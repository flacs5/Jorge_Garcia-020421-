const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema(
    {
        name: { 
          first: {type: String, required: true}, 
          last: {type: String, required: true}
        },
        birth: { type: Date, required: true },
        hobbies: { type: [String], required: true }
    }
)

module.exports = mongoose.model('persons', Person);
