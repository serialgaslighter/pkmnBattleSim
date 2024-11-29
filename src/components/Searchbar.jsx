import { useState } from "react";

export const Searchbar = ({ pkmnList }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

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
          <li key={index}>{pkmn.name}</li>
        ))}
      </ul>
    </>
  );
};
