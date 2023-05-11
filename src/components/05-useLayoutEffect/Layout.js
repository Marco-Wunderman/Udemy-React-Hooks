import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";
export const Layout = () => {
  const { state, suma } = useCounter(1);

  const { data } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${state}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [sizeBox, setsizeBox] = useState({});
  useLayoutEffect(() => {
    setsizeBox(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">Quotes Breakingbad</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-12">
          <blockquote className="blockquote text-end">
            <p ref={pTag}>{quote}</p>
          </blockquote>
          <pre>{JSON.stringify(sizeBox, null, 3)}</pre>
          <button type="button" className="btn btn-primary" onClick={suma}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
