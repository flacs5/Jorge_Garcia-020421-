const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDo = new Schema(
    {
        description: {type: String, required: true},
        status: { type: Boolean, required: true },
    }
)

module.exports = mongoose.model('todos', ToDo);