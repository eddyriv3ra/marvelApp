import React, { createContext, useState } from "react";
import { useLocalStorage } from "./utils/utils";

export const CharactersContext = createContext();
export const FavoriteCharactersContext = createContext();
export const ShowFavoriteListContext = createContext();
export const InitialPreviousData = createContext();

const Store = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [initialPreviousData, setInitialPreviousData] = useState([]);
  const [showFavoriteList, setShowFavoriteList] = useState(false);
  const [favoriteCharacters, setFavoriteCharacters] = useLocalStorage(
    "favCharacters",
    []
  );

  if (initialPreviousData.length === 0 && characters.length > 0) {
    setInitialPreviousData(characters);
  }

  return (
    <CharactersContext.Provider value={[characters, setCharacters]}>
      <FavoriteCharactersContext.Provider
        value={[favoriteCharacters, setFavoriteCharacters]}
      >
        <ShowFavoriteListContext.Provider
          value={[showFavoriteList, setShowFavoriteList]}
        >
          <InitialPreviousData.Provider
            value={[initialPreviousData, setInitialPreviousData]}
          >
            {children}
          </InitialPreviousData.Provider>
        </ShowFavoriteListContext.Provider>
      </FavoriteCharactersContext.Provider>
    </CharactersContext.Provider>
  );
};

export default Store;
