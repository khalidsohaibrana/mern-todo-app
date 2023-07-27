const TodoModel = require("../models/TodoModel")

module.exports = async(req, res) => {

    const {id} = req.params;
    console.log("success", id);
    const todo = await TodoModel.findById(id);
    const response = await todo.deleteOne();
    //res.send(response);
    res.status(204).json(todo)
}