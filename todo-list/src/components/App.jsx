import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm.jsx";
import Todo from "./Todo.jsx";
import EditTodoForm from "./EditTodoForm.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, Settodos] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      Settodos(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    Settodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        date: new Date().toLocaleTimeString(),
        completed: false,
        isEditing: false,
        isSearching: true
      }
    ]);
  }

  function deleteTodo(id) {
    Settodos(todos.filter((todo) => todo.id !== id));
  }
  function toggleComplete(id) {
    Settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  function editTodo(id) {
    Settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  function editTask(task, date, id) {
    Settodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task, date, isEditing: !todo.isEditing }
          : todo
      )
    );
  }
  function searchTodo(stodo) {
    Settodos(
      todos.map((todo) =>
        todo.task.includes(stodo)
          ? { ...todo, isSearching: true }
          : { ...todo, isSearching: false }
      )
    );
  }
  return (
    <div className="app">
      <h1>Gets Things Done!!</h1>
      <TodoForm addTodo={addTodo} searchTodo={searchTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            id={todo.id}
            date={todo.date}
            editTask={editTask}
            task={todo.task}
          />
        ) : (
          todo.isSearching && (
            <Todo
              id={todo.id}
              complete={todo.completed}
              task={todo.task}
              date={todo.date}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )
      )}
    </div>
  );
}

export default App;
