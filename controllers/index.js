const PersonController = require('./PersonController');
const TaskController = require('./TaskController');

module.exports = {
    PersonControll: new PersonController(),
    TaskControll: new TaskController()
};