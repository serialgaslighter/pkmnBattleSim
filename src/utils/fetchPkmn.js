import { useContext } from "react";
import { AppContext } from "./pkmnContext.js";

export const fetchPkmn = (endpoint) => {
  const URL = "https://pokeapi.co/api/v2/";

  const { pkmnData, setPkmnData } = useContext(AppContext);

  fetch(`${URL}/${endpoint}`)
    .then(res => res.json())
    .then(data => setPkmnData(data))
    .catch(error => console.error(error))
}