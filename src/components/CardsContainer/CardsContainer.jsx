import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../Card";
import { CharactersContext } from "../../Store";
import { getInitialData } from "../../services/apis";

const CardsContainerStyle = styled.div`
  background-color: rgb(246, 247, 249);
  height: 55rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 3rem;
  flex-wrap: wrap;
`;

const CardsContainer = (props) => {
  const [characters, setCharacters] = useContext(CharactersContext);

  useEffect(() => {
    const fecthData = async () => {
      const result = await getInitialData();
      setCharacters(result);
    };
    fecthData();
  }, []);

  return (
    <CardsContainerStyle>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            thumbnail={character.thumbnail}
            name={character.name}
            comics={character.comics.items}
          />
        );
      })}
    </CardsContainerStyle>
  );
};

CardsContainer.propTypes = {};

export default CardsContainer;
