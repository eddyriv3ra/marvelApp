import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../Card";
import { useHistory, useParams, useLocation } from "react-router-dom";
import {
  CharactersContext,
  FavoriteCharactersContext,
  ShowFavoriteListContext,
} from "../../Store";
import { getInitialData } from "../../services/apis";
import SingleComic from "../SingleComic";

const CardsContainerStyle = styled.div`
  height: 55rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 3rem;
  flex-wrap: wrap;
`;

const CardsContainer = (props) => {
  const [characters, setCharacters] = useContext(CharactersContext);
  const [favoriteCharacters, setFavoriteCharacters] = useContext(
    FavoriteCharactersContext
  );
  const [showFavoriteList, setShowFavoriteList] = useContext(
    ShowFavoriteListContext
  );
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
    !isURLSearch || showFavoriteList
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
      : characters.length > 0 &&
        characters[0].format === "Comic" && <SingleComic />;

  return <CardsContainerStyle>{render}</CardsContainerStyle>;
};

CardsContainer.propTypes = {};

export default CardsContainer;
