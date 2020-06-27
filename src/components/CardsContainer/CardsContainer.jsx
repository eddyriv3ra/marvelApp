import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import Card from "../Card";

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
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const offset = Math.floor(Math.random() * 1485) + 1;
      const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?limit=8&offset=${offset}&ts=1&apikey=508dfef6ad8ecc046b84be570d8ab372&hash=afa0ce68cff53edcda03339bc63595aa`;
      const result = await axios(urlAPI);
      setCharacters(result.data.data.results);
    };
    fetchData();
  }, []);

  return (
    <CardsContainerStyle>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            thumbnail={character.thumbnail}
            name={character.name}
          />
        );
      })}
    </CardsContainerStyle>
  );
};

CardsContainer.propTypes = {};

export default CardsContainer;
