import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ pkmnData, setPkmnData ] = useState([]);
  const [ playerTeamPkmn, setPlayerTeamPkmn ] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ pkmnData, setPkmnData, playerTeamPkmn, setPlayerTeamPkmn }}>
        {children}
      </AppContext.Provider>
    </>
  )
}