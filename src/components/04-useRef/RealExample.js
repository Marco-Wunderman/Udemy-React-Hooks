import React, { useState } from "react";
import { MultipleCustomHooks } from "./../03-examples/MultipleCustomHooks";
export const RealExample = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Real Example UseRef</h1>
          <hr />
        </div>
        {show && <div className="col-12">{<MultipleCustomHooks />}</div>}
        <button type="button" className="btn btn-info mt-4" onClick={handleShow}>
          Mostrar/Ocultar
        </button>
      </div>
    </div>
  );
};
