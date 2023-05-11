import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

export const MemorizeHook = () => {
  const { state, suma } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memoProceso = useMemo(() => procesoPesado(state), [state]);
  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-12">
          <h1>Memo Hook</h1>
          <hr />
        </div>
        <div className="col-12">
          <h3>Counter: {state}</h3>
          <p>{memoProceso}</p>
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
