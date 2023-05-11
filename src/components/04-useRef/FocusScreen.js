import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Use Ref</h1>
          <hr />
          <div className="">
            <input ref={inputRef} type="text" className="form-control" />
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-outline-primary mt-2"
          >
            Focus
          </button>
        </div>
      </div>
    </div>
  );
};
