import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const classActive = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };
  return (
    <nav className="nav nav-pills">
      <li className="nav-item">
        <NavLink to="/" className={classActive}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className={classActive}>
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className={classActive}>
          About
        </NavLink>
      </li>
    </nav>
  );
};
