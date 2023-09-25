import React, { useState } from "react";

function TodoForm(props) {
  const [todos, setTodos] = useState("");
  const [stodo, setStodo] = useState("");
  function handleChange(event) {
    setTodos(event.target.value);
  }
  function handleSubmit(event) {
    props.addTodo(todos);
    event.preventDefault();
    setTodos("");
  }
  function handleSearch(event) {
    setStodo(event.target.value);
    // props.searchTodo(stodo);
  }
  function handleSearchSumit(event) {
    props.searchTodo(stodo);
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          onChange={handleChange}
          value={todos}
          className="todo-input"
          placeholder="what is the task?"
        />
        <button type="submit" className="todo-btn">
          AddItem
        </button>
      </form>
      <form onSubmit={handleSearchSumit} className="Todofrom">
        <input
          type="text"
          onChange={handleSearch}
          value={stodo}
          className="todo-search"
          placeHolder="Task to be searched??"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
