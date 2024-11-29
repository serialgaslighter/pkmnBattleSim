import { useEffect, useState } from "react";

export const Teambuilder = () => {

  const [ allPkmn, setAllPkmn ] = useState([]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/";
    const endpoint = "pokemon?limit=100000&offset=0";

    fetch(`${URL}${endpoint}`)
      .then(res => res.json())
      .then(data => setAllPkmn(data.results))
      .catch(error => console.error(error))
    }, []);
    
  console.log(allPkmn);
  return (
    <>
      <h1>Teambuilder</h1>
    </>
  );
};
