const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./models/Todo");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

app.post("/todos", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.status(201).json(todo);
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
