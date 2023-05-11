import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    // const action = {
    //   type: "add",
    //   payload: newTodo,
    // };
    // dispatch(action);
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agrega TODO</h4>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Aprender..."
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-outline-primary mt-1">Agregar</button>
        </div>
      </form>
    </>
  );
};
