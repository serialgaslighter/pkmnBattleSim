import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ pkmnData, setPkmnData ] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ pkmnData, setPkmnData }}>
        {children}
      </AppContext.Provider>
    </>
  )
}