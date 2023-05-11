import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./styles.css";

export default function CounterWithCustomHook() {
  const { state, suma, resta, reset } = useCounter(100);
  //   const inicial = 100;
  return (
    <div>
      <h1>Contador: {state}</h1>
      <button
        onClick={suma}
        type="button"
        className="btn btn-primary m-2"
      >
        +1
      </button>
      <button type="button" onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button
        onClick={() => resta(2)}
        type="button"
        className="btn btn-primary m-2"
      >
        -1
      </button>
    </div>
  );
}
