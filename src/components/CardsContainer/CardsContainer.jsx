import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../Card";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { CharactersContext, FavoriteCharactersContext } from "../../Store";
import { getInitialData } from "../../services/apis";

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
  const { search } = useLocation();

  useEffect(() => {
    const query = getParams();
    const fecthData = async () => {
      const result = await getInitialData();
      setCharacters(result);
    };
    if (query.length === 0) {
      fecthData();
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

  return (
    <CardsContainerStyle>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            thumbnail={character.thumbnail}
            name={character.name}
            comics={character.comics.items}
            characterId={character.id}
            handleClick={getCharaterData}
            favoriteCharacters={favoriteCharacters}
          />
        );
      })}
    </CardsContainerStyle>
  );
};

CardsContainer.propTypes = {};

export default CardsContainer;
