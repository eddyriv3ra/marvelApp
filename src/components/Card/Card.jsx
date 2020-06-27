import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardComponent = styled.div`
  width: 20%;
  height: 23rem;
  background-color: blue;
  margin-left: 2rem;
`;

const Card = (props) => {
  return <CardComponent></CardComponent>;
};

Card.propTypes = {};

export default Card;
