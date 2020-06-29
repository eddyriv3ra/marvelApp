import React, { useState } from "react";
import Portal from "../Portal";
import Modal from "../Modal";
import Star from "../Star";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardComponent = styled.div`
  width: 20%;
  height: 25rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
  position: relative;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
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

const Card = ({ thumbnail, name, characterId, addOrRemoveCharacter }) => {
  const [showPopup, setShowPopup] = useState(false);

  const showPortal = () => {
    setShowPopup(true);
  };

  const closePopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <CardComponent onClick={showPortal}>
      <Thumbnail src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
      <Name>{name}</Name>
      <Star handleStarClick={addOrRemoveCharacter} id={characterId} />
      {showPopup && (
        <Portal>
          <Modal
            title={name}
            closePopup={closePopup}
            characterId={characterId}
          />
        </Portal>
      )}
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
