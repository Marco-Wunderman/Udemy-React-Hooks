import React from "react";
import PropTypes from "prop-types";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, i) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          i={i}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
