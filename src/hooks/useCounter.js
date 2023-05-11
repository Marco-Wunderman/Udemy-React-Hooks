import { useState } from "react";

export const useCounter = (initialState = 1) => {
  const [state, setState] = useState(initialState);

  // const suma = (factor = 1) => {
  //   setState(state + factor);
  // };
  //Se utiliza en el MultipleCustomHooks
  const suma = () => {
    setState(state + 1);
  };
  const resta = (factor = 1) => {
    setState(state - factor);
  };
  const reset = () => {
    setState(initialState);
  };
  return {
    state,
    suma,
    resta,
    reset,
  };
};
