import React, { useState } from "react";
import "./styles.css";

export default function CounterApp() {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });
  const { counter1, counter2 } = state;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Counter 1= {counter1}</h2>
        </div>
        <div className="col-12">
          <h2>Counter 2= {counter2}</h2>
        </div>
        <button
          type="button"
          name=""
          id=""
          className="btn btn-primary btn-lg btn-block"
          onClick={() => {
            setState({ ...state, counter2: counter2 + 1 });
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
}
