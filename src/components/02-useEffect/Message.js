import React, { useEffect, useState } from "react";

export const Message = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mousemove = (e) => {
      const cords = { x: e.x, y: e.y };
      setCords(cords);
    };
    window.addEventListener("mousemove", mousemove);
    console.log(":D");
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  return (
    <div>
      <h1>Genial</h1>
      <p>
        Valor de X: {cords.x}
        <br />
        Valor de Y: {cords.y}
      </p>
    </div>
  );
};
