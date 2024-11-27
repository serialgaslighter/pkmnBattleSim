import { useState } from "react";

export const Searchbar = (pkmnList) => {
  const [ serchInput, setSearchInput ] = useState("");
  const [ filterdSuggestions, setFilteredSuggestions ] = useState([]);

  const handleSuggestion = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (input) {
      const filterdPkmnList = pkmnList.filter(pkmn => pkmn.name.toLowerCase().startsWith(input.toLowerCase()));
      setFilteredSuggestions(filterdPkmnList)
    }
  }

  return (
    <>
      <input type="text" />
    </>
  )
}