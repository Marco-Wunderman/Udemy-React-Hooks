import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";
export const MainApp = () => {
  const [user, setUser] = useState({});
  // const user = {
  //   id: 18,
  //   name: "Marco",
  //   mail: "mag.van..gam@gmail.com",
  // };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
