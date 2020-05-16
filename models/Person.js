const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonSchema =  new Schema({
    id: String,
    fullname: String,
    phone: String
}, {
    timestamps: true
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;