import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const OnresetForm = () => {
    setValues(initialState);
    console.table(values);
  };
  const handleChange = ({ target }) => {
    console.log("Values", values);
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, handleChange, OnresetForm];
};
