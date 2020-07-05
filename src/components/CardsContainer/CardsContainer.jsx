import React, { useEffect, useContext } from "react";
import Card from "../Card";
import { useLocation } from "react-router-dom";
import {
  CharactersContext,
  FavoriteCharactersContext,
  ShowFavoriteListContext,
} from "../../Store";
import { getInitialData } from "../../services/apis";
import SingleComic from "../SingleComic";
import { CardsContainerStyle } from "./CardsContainerStyle";

CardsContainerStyle.displayName = "CardsContainerStyle";

const CardsContainer = () => {
  const [characters, setCharacters] = useContext(CharactersContext);
  const [favoriteCharacters, setFavoriteCharacters] = useContext(
    FavoriteCharactersContext
  );
  const [showFavoriteList] = useContext(ShowFavoriteListContext);
  const { search } = useLocation();
  const isURLSearch = search.includes("comic");

  useEffect(() => {
    const query = getParams();
    const fetchData = async () => {
      const result = await getInitialData();
      setCharacters(result);
    };
    if (query.length === 0 && !isURLSearch) {
      fetchData();
    }
  }, []);

  const getParams = () => {
    const searchParams = new URLSearchParams(search);
    return searchParams.get("character") || "";
  };

  const getCharaterData = (characterId) => {
    const characterData = characters.find((character) => {
      return character.id === characterId;
    });
    setFavoriteCharacters(characterData);
  };

  const render =
    (!isURLSearch || showFavoriteList) && Array.isArray(characters)
      ? characters.map((character) => {
          const Title = character.name ? character.name : character.title;

          return (
            <Card
              key={character.id}
              thumbnail={character.thumbnail}
              name={Title}
              characterId={character.id}
              handleClick={getCharaterData}
              favoriteCharacters={favoriteCharacters}
            />
          );
        })
      : !Array.isArray(characters) && <SingleComic />;

  return <CardsContainerStyle>{render}</CardsContainerStyle>;
};

export default CardsContainer;
