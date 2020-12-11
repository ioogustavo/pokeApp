const initialState = {
  singlePokemon: [],
};

export default function rooReducer(state = initialState, action) {
  if (action.type === "GET_POKEMON") {
    console.log("soy reducer")
    return {
      ...state,
      singlePokemon: action.payload,
    };
  }
}
