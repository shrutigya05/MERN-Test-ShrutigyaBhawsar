import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:4000/todos");
    const data = await res.json();
    setTodos(data);
  };

 const addTodo = async () => {
 
  if (title.trim() === "" || description.trim() === "") {
    alert("Please enter both Title and Description!");
    return;
  }

  await fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description })
  });


    setTitle("");
    setDescription("");
    fetchTodos();
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <strong>{todo.title}</strong> - {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
