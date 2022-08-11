const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    timeCreated: {
        type: String,
        required: true
    },
    timeUpdated: {
        type: String,
        required: false
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;