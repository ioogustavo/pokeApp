import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "../../services/";
import Card from "../Card";
import { NavLink } from "react-router-dom";
import "./style.css";
import gif from "../../images/totodile.gif";

export default function Lista() {
  const [listaPokemon, setListaPokemon] = useState();
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(true);
  const mainUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(mainUrl);
      setNext(response.next);
      setPrevious(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const nextUrl = async () => {
    setLoading(true);
    let data = await getAllPokemon(next);
    await loadingPokemon(data.results);
    setNext(data.next);
    setPrevious(data.previous);
    setLoading(false);
  };

  const prevUrl = async () => {
    if (!previous) return;
    setLoading(true);
    let data = await getAllPokemon(previous);
    await loadingPokemon(data.results);
    setNext(data.next);
    setPrevious(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setListaPokemon(_pokemonData);
  };

  return (
    <div className="listaCard">
      {loading ? (
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="row justify-content-center h-100">
            <div className="col-sm-8 align-self-center text-center ">
              <h1>Cargando</h1>
              <img src={gif} alt="totodile" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid-container">
            {listaPokemon.map((pokemon, i) => {
              return (
                <NavLink to={`/${pokemon.name}`}>
                  <Card key={i} pokemon={pokemon} />
                </NavLink>
              );
            })}
          </div>
          <div className="botons">
            <button className="btn btn-dark" onClick={prevUrl}>
              Anterior
            </button>
            <button className="btn btn-dark" onClick={nextUrl}>
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
}
