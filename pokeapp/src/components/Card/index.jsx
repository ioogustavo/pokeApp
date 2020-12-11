import React from "react";
import "./style.css";

export default function Card({ pokemon }) {
  return (
    <div className="card">
      <div className="cards">
        <h3 className="card-title">{pokemon.name}</h3>
      </div>
      <div className="img">
        <img
          className="card-img-top"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
    </div>
  );
}
