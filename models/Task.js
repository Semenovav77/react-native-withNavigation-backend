const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema =  new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Person'},
    task: String,
    date: String,
    time: String
}, {
    timestamps: true
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;