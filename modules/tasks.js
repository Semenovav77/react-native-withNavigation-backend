const express = require('express');
const {TaskControll} = require('./../controllers');
const {validationTask} = require('./../helpers/validations');

const router = express.Router();

router.get('/', TaskControll.all);
router.post('/', validationTask.create, TaskControll.create);

module.exports = router;
