const {Person} = require('../models');
const { validationResult } = require('express-validator');

function PersonController() {

}

PersonController.prototype.create = function(req, res) {
    const data = {
        fullname: req.body.fullname,
        phone: req.body.phone,
    };
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    Person.create(data, function(err, doc){
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
    })
};

PersonController.prototype.all = function(req, res) {
    Person.find({}, function(err, docs){
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: err
            })
        }
        res.status(200).json({
            status: 'success',
            data: docs
        })
    })
};

module.exports = PersonController;