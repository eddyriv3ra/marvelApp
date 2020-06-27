import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardComponent = styled.div`
  width: 20%;
  height: 25rem;
  margin-left: 1rem;
  position: relative;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Name = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

const Card = ({ thumbnail, name }) => {
  return (
    <CardComponent>
      <Thumbnail src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
      <Name>{name}</Name>
    </CardComponent>
  );
};

Card.propTypes = {
  thumbnail: PropTypes.shape({
    extension: PropTypes.string,
    path: PropTypes.string,
  }),
  name: PropTypes.string,
};

Card.defaultProps = {
  thumbnail: {
    extension: "",
    path: "",
  },
  name: "",
};

export default Card;
