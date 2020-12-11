import axios from "axios";
import swal from "sweetalert";

export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function searchPokemon(name) {
  let nombre = name;
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        window.location.assign(`http://localhost:3000/${nombre}`);
      })
      .catch((err) => {
        return swal({
          text: "No existe ese pokemon",
          icon: "error",
          timer: "2000",
        });
      });
  });
}
