import axios from "axios";

export function getSinglePokemon(name) {
  return function (dispatch) {
    let namePokemon = name;
    const allCities = axios({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${namePokemon}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    allCities.then((resp) => {
      console.log("soy action ", resp)
      // let respuesta = resp.data.hola;
      dispatch({
        type: "GET_POKEMON",
        payload: resp,
      });
    });
    allCities.catch((err) => {
      console.log("Hubo un error", err);
    });
  };
}
