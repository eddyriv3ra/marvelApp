import React, { createContext, useState } from "react";
import { useLocalStorage } from "./utils/utils";

export const CharactersContext = createContext();
export const FavoriteCharactersContext = createContext();

const Store = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useLocalStorage(
    "favCharacters",
    []
  );

  return (
    <CharactersContext.Provider value={[characters, setCharacters]}>
      <FavoriteCharactersContext.Provider
        value={[favoriteCharacters, setFavoriteCharacters]}
      >
        {children}
      </FavoriteCharactersContext.Provider>
    </CharactersContext.Provider>
  );
};

export default Store;
