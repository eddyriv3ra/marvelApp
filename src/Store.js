import React, { createContext, useState } from "react";
import { useLocalStorage } from "./utils/utils";

export const CharactersContext = createContext();
export const FavoriteCharactersContext = createContext();
export const ShowFavoriteListContext = createContext();

const Store = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [initialCharacter, setInitialCharacters] = useState([]);
  const [showFavoriteList, setShowFavoriteList] = useState(false);
  const [favoriteCharacters, setFavoriteCharacters] = useLocalStorage(
    "favCharacters",
    []
  );

  if (initialCharacter.length === 0 && characters.length > 0) {
    setInitialCharacters(characters);
  }

  return (
    <CharactersContext.Provider value={[characters, setCharacters]}>
      <FavoriteCharactersContext.Provider
        value={[
          favoriteCharacters,
          setFavoriteCharacters,
          initialCharacter,
          setInitialCharacters,
        ]}
      >
        <ShowFavoriteListContext.Provider
          value={[showFavoriteList, setShowFavoriteList]}
        >
          {children}
        </ShowFavoriteListContext.Provider>
      </FavoriteCharactersContext.Provider>
    </CharactersContext.Provider>
  );
};

export default Store;
