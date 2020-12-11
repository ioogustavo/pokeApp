import React, { useEffect, useState } from "react";
import axios from "axios";
import Abilities from "./Abilities";
import Stats from "./Stats";
import Types from "./Types";
import "./style.css";

export default function SingleCard() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    var url = window.location.href;
    //Esta variable separa la url conn "/", para luego tomar el ultimo valor
    var separarUrl = url.split("/");
    //Esta variable toma el ultimo valor de la URL, para hacerla dinamica
    var nombre = separarUrl.pop();
    //URL dinamica
    var urlReal = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    axios.get(urlReal).then((res) => {
      setPokemon(res.data);
    });
  }, []);

  return (
    <div>
      <div className="card">
        <div className="cards">
          {pokemon && (
            <h3 className="card-title">{pokemon.name && pokemon.name}</h3>
          )}
        </div>
        <div className="img">
          {pokemon && (
            <img
              className="card-img-top"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          )}
        </div>
        <div className="stats">
          {pokemon && <Stats props={pokemon.stats} />}
        </div>

        <div className="abilities">
          {pokemon && <Abilities props={pokemon.abilities} />}
        </div>

        <div className="type">{pokemon && <Types props={pokemon.types} />}</div>
      </div>
    </div>
  );
}
