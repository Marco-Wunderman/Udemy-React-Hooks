import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        type="button"
        onClick={() => {
          setUser({ ...user, id: 12, name: "Marco" });
        }}
        className="btn btn-primary btn-lg btn-block "
      >
        Login
      </button>
    </div>
  );
};
