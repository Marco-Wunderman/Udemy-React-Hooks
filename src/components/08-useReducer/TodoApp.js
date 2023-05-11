import "./styles.css";
import { useTodos } from "../../hooks/useTodos";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const { todos, handleDelete, handleToggle, handleAddTodo, totalTodos, totalPendientes } = useTodos();

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>TodoApp ({totalTodos}), <small>pendientes: {totalPendientes} </small></h1>
          <hr />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <TodoList
              todos={todos}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          </div>
          <div className="col-5">
            <TodoAdd handleAddTodo={handleAddTodo} />
          </div>
        </div>
      </div>
    </>
  );
};
