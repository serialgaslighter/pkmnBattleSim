import { useEffect, useState, useContext } from "react";
import { AppContext } from "../utils/pkmnContext";
import { Searchbar } from "../components/searchbar";
import { PkmnCard } from "../components/PkmnCard";

export const Teambuilder = () => {
  const [allPkmn, setAllPkmn] = useState([]);
  const [loading, setLoading] = useState(true);
  const {playerTeamPkmn, setPlayerTeamPkmn} = useContext(AppContext);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/";
    const endpoint = "pokemon?limit=100000&offset=0";

    fetch(`${URL}${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        setAllPkmn(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Teambuilder</h1>
      <Searchbar pkmnList={allPkmn} />
      <ul>
        {playerTeamPkmn.map((pkmn, index) => (
          <li key={index}>{pkmn}</li>
        ))}
      </ul>
      {playerTeamPkmn.map((pkmn, index) => {
        return <PkmnCard key={index} pkmn={pkmn}/>
      })}
    </>
  );
};
