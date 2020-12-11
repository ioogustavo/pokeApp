import React from "react";
import Card from "../Card";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Lista(props) {
  return (
    <div className="listaCard">
      <div className="grid-container">
        {props.listaPokemon &&
          props.listaPokemon.map((pokemon, i) => {
            return (
              <NavLink to={`/${pokemon.name}`}>
                <Card key={i} pokemon={pokemon} />
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}
