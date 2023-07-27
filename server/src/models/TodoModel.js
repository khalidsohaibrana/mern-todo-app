const mongoose = require('mongoose');
const TodoSchema= mongoose.Schema({
    text:{
        type: 'string',
    },
    completed:{
        type: 'boolean',
    }
})

const TodoModel = mongoose.model('Todo',TodoSchema);

module.exports = TodoModel;