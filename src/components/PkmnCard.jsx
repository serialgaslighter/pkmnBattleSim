import { useEffect, useState } from "react";

export const PkmnCard = ({ pkmn }) => {

  const [ pkmnData, setPkmnData ] = useState(null);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/";
    const endpoint = `pokemon/${pkmn}`;

    fetch(`${URL}${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        setPkmnData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {pkmnData ? (
        <div>
          <img src={pkmnData.sprites.front_default} alt="" />
          <h4>{pkmnData.name}</h4>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
    
  )
}