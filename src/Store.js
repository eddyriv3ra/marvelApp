import React, { createContext, useState } from "react";

export const CharactersContext = createContext();

const Store = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  return (
    <CharactersContext.Provider value={[characters, setCharacters]}>
      {children}
    </CharactersContext.Provider>
  );
};

export default Store;
