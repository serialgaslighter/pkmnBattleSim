import { useEffect, useState } from "react";
import { Searchbar } from "../components/searchbar";

export const Teambuilder = () => {
  const [allPkmn, setAllPkmn] = useState([]);
  const [loading, setLoading] = useState(true);

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
  console.log(allPkmn);

  return (
    <>
      <h1>Teambuilder</h1>
      <Searchbar pkmnList={allPkmn} />
    </>
  );
};
