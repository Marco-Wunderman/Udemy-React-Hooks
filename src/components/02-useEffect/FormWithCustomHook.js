import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function FormWithCustomHook() {
  const [values, handleChange, OnresetForm] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = values;
  useEffect(() => {
    console.log("Se dispara cuando el email cambia");
  }, [email]);
  return (
    <div className="container">
      <div className="row">
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
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                id="password"
                onChange={handleChange}
                placeholder="*****"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="button" className="btn btn-primary mt-4" onClick={OnresetForm}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
