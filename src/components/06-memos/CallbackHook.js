import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [cont, setCont] = useState(1);
  // const increment = () => {
  //   setCont(cont + 1);
  // };
  const increment = useCallback(
    (num) => {
      setCont((c) => c + num);
    },
    [setCont]
  );
  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-12">
          <h1>Callback Hook</h1>
          <hr />
        </div>
        <div className="col-12">
          <h3>Counter: {cont}</h3>
        </div>
        <ShowIncrement increment={increment} />
      </div>
    </div>
  );
};
