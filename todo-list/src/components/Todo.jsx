import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo(props) {
  function handleToggle() {
    props.toggleComplete(props.id);
  }
  function handleEdit() {
    props.editTodo(props.id);
  }
  function handleDelete() {
    props.deleteTodo(props.id);
  }
  return (
    <div className="Todo">
      <p className={props.complete ? "completed" : ""} onClick={handleToggle}>
        {props.task}
      </p>
      <div>
        <small
          style={{ color: "#1a1a40", fontSize: "0.7rem", padding: "0 10px" }}
        >
          {props.date}
        </small>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </div>
    </div>
  );
}

export default Todo;
