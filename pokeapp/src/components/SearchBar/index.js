import React, { useState } from "react";
import "./style.css";
import { searchPokemon } from "../../services/index";

export default function SearchBar() {
  const [name, setName] = useState("");

  async function buscar(namePokemon) {
    if(!name) return;
    let nombre = namePokemon.name.toLowerCase();
    await searchPokemon(nombre);
  }

  return (
    <div className="searchBar">
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <form
            className="form-inline"
            onSubmit={(e) => {
              e.preventDefault();
              buscar({ name });
            }}
          >
            <input
              className="form-control mr-sm-2"
              placeholder="Buscar pokemon"
              type="search"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <i className="material-icons">Buscar</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
