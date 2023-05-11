import React from "react";
import { useCounter, useFetch } from "../../hooks";

export const MultipleCustomHooks = () => {
  const { state, suma } = useCounter(1);
  const { loading, data } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${state}`
  );
  //El operador de doble negación verifica que no venga undefined o null la respuesta del fecth
  const { author, quote } = !!data && data[0];
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">Quotes Breakingbad</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-12">
          {loading ? (
            <div className="alert alert-info text-center mt-3">Loading...</div>
          ) : (
            <div>
              <blockquote className="blockquote text-end">
                <p>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
              </blockquote>
              <button type="button" className="btn btn-primary" onClick={suma}>
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
