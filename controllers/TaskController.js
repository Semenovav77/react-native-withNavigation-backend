const {Task} = require('../models');
const { validationResult } = require('express-validator');
const {reduce, orderBy} = require('lodash');
const {parseISO} = require('date-fns');
const format = require('date-fns/format');
const { ru } = require('date-fns/locale');

function TaskController() {

}

TaskController.prototype.create = function(req, res) {
    const data = {
        task: req.body.task,
        date: req.body.date,
        time: req.body.time,
        user: req.body.user
    };
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    Task.create(data, function(err, doc){
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: err
            })
        }
        res.status(201).json({
            status: 'success',
            data: doc
        })
    });}

    TaskController.prototype.all = function(req, res) {
        Task.find({}).populate('user').exec(function(err, docs){
            const result = docs.reduce((accumulator, item) => {
                const date = item.date.split('T')[0];
                if (accumulator[date]) {
                    accumulator[date].push(item);
                } else {
                    accumulator[date] = [item]
                }
               return accumulator
            },{});
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: err
                })
            }
            res.status(200).json({
                status: 'success',
                data: reduce(result, function(res, value, key) {
                    res = [...res, {title: format(parseISO(key), 'dd MMMM yyyy',  {locale: ru}), data: value}];
                    return orderBy(res, ['title'], ['asc']);
                }, [])
            })
        })
    };

module.exports = TaskController;