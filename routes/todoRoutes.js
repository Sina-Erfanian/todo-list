const { Router } = require("express");

const router = Router();

const {
  getTodo,
  saveTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoControllers");

router.get("/get-todo", getTodo);
router.post("/save-todo", saveTodo);
router.post("/delete-todo", deleteTodo);
router.post("/update-todo", updateTodo);

module.exports = router;
