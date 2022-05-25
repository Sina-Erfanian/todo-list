const todoModels = require("../models/todoModels");

module.exports.getTodo = async (req, res) => {
  const todo = await todoModels.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  todoModels
    .create({ text })
    .then(() => res.set(201).send("added successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = (req, res) => {
  const { _id } = req.body;
  todoModels
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("deleted successfully"))
    .catch((err) => console.log(err));
};

module.exports.updateTodo = (req, res) => {
  const { _id , text } = req.body;
  todoModels
    .findByIdAndUpdate(_id , {text})
    .then(() => res.set(201).send("Updated successfully"))
    .catch((err) => console.log(err));
};
