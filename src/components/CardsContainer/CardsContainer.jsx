import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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
  return (
    <CardsContainerStyle>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardsContainerStyle>
  );
};

CardsContainer.propTypes = {};

export default CardsContainer;
