import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { state, suma } = useCounter(1);
  const [show, setShow] = useState(true);
  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-12">
          <h1>Memo</h1>
          <hr />
        </div>
        <div className="col-12">
          <h3>
            Counter: <Small value={state} />
          </h3>
        </div>
        <div className="col-2">
          <button type="button" onClick={suma} className="btn btn-primary">
            +1
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            onClick={() => {
              setShow(!show);
            }}
            className="btn btn-outline-primary"
          >
            Show/Hide {JSON.stringify(show)}
          </button>
        </div>
      </div>
    </div>
  );
};
