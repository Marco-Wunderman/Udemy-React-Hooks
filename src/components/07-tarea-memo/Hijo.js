import React from "react";
import "./../01-useState/styles.css";
export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-primary me-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
