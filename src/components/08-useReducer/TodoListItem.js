import React from "react";
import PropTypes from "prop-types";

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <div className="d-flex">
        <p
          className={`${(todo.done) ? "completed" : ''}`}
          onClick={() => handleToggle(todo.id)}
        >
          {i + 1}. {todo.desc}
        </p>
        <div className="ms-auto my-1 me-1">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todo.id)}
          >
            Borrar
          </button>
        </div>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
