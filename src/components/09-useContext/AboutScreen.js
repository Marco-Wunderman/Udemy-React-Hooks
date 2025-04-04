import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser({});
  };
  return (
    <div>
      <h1>AboutScreen</h1> <hr />
      {/* <pre>{JSON.stringify(user, null, 3)}</pre> */}
      <button onClick={handleLogout} type="button" className="btn btn-warning">
        Logout
      </button>
    </div>
  );
};
