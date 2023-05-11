import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export default function SimpleForm() {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };
  useEffect(() => {
    // console.log("Hey");
  }, []);
  useEffect(() => {
    // console.log("Escucha los cambios del form");
  }, [formState]);
  useEffect(() => {
    // console.log("Escucha el cambio pero solo del input del email");
  }, [email]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Formulario Simple</h1>
          <hr />
        </div>
        <div className="col-12">
          <form className="form-group">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                id="name"
                autoComplete="off"
                placeholder="Nombre"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Correo</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                id="email"
                autoComplete="off"
                onChange={handleChange}
                placeholder="algo@gmail.com"
              />
            </div>
          </form>
          {name === "123" && <Message />}
        </div>
      </div>
    </div>
  );
}
