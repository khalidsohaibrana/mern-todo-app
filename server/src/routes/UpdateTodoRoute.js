const TodoModel = require("../models/TodoModel")

module.exports = async(req, res) => {

    const {id} = req.params;

    const todo = await TodoModel.findById(id);
    todo.completed = req.body.completed;
    todo.text = req.body.text;
    const newTodo = await todo.save();
    res.send(newTodo);
}
