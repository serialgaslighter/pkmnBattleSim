export const addPkmnToTeam = (event, setPlayerTeam) => {
  const pkmn = event.target.value;

  setPlayerTeam(prevState => [...prevState, pkmn])
  console.log(pkmn);
}