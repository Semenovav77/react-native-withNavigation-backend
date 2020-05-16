const { check, validationResult } = require('express-validator');

const validationPerson = {
    create: [
        check('fullname').isLength({ min: 1 }),
        check('phone').isLength({ min: 11})
    ]
};

const validationTask = {
    create: [
        check('task').isLength({ min: 1 }),
        check('date').isLength({ min: 1}),
        check('time').isLength({ min: 5}),
        check('user').isLength({ min: 1}),
    ]
};

module.exports = {
    validationPerson: validationPerson,
    validationTask: validationTask
};