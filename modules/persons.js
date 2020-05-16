const express = require('express');
const {PersonControll, TaskControll} = require('./../controllers');
const {validationPerson, validationTask} = require('./../helpers/validations');

const router = express.Router();

router.get('/', PersonControll.all);
router.post('/', validationPerson.create, PersonControll.create);

module.exports = router;
