import { useState, useContext } from "react";
import { AppContext } from "../utils/pkmnContext";
// import { addPkmnToTeam } from "../apps/addPkmnToTeam";

export const Searchbar = ({ pkmnList }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const {playerTeamPkmn, setPlayerTeamPkmn} = useContext(AppContext);

  const handleSuggestion = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (!input) {
      setFilteredSuggestions([]);
      return;
    }

    const filteredPkmnList = pkmnList.filter((pkmn) =>
      pkmn.name.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredSuggestions(filteredPkmnList);
  };

  const addPkmnToTeam = (event) => {
    const pkmn = event.target.textContent;
  
    setPlayerTeamPkmn(prevState => [...prevState, pkmn])
  }

  return (
    <>
      <input 
        type="text" 
        value={searchInput} 
        onChange={handleSuggestion} 
        placeholder="Search Pokémon"
      />
      <ul>
        {filteredSuggestions.map((pkmn, index) => (
          <li key={index} onClick={(event) => addPkmnToTeam(event)}>{pkmn.name}</li>
        ))}
      </ul>
    </>
  );
  console.log(playerTeamPkmn);
};
