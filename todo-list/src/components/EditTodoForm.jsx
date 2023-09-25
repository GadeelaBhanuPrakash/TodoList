import React, { useState } from "react";

function EditTodoForm(props) {
  const [value, setValue] = useState(props.task);
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  function handleChange(event) {
    setValue(event.target.value);
    setDate(new Date().toLocaleTimeString());
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.editTask(value, date, props.id);
  }
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text"
        onChange={handleChange}
        value={value}
        className="todo-input"
        placeholder="Update Task"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
