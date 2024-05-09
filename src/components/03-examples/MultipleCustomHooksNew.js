import React from "react";
import { useCounter, useFetchNew } from "../../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooksNew = () => {
  const { state: counter, suma, resta } = useCounter(1);
  const { data, isLoading } = useFetchNew(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Información del Pokemon</h1>
          <hr />
          {isLoading ? (
            <LoadingMessage />
          ) : (
            <PokemonCard
              id={data.id}
              name={data.name}
              sprites={[
                data.sprites.back_default,
                data.sprites.back_shiny,
                data.sprites.front_default,
                data.sprites.front_shiny,
              ]}
            />
          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <button
              onClick={counter > 1 ? () => resta() : null}
              className="btn btn-primary btn-large mt-2"
            >
              Anterior
            </button>
          </div>
          <div className="col-2">
            <button
              className="btn btn-primary btn-large mt-2"
              onClick={() => suma()}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
