import React, { useState } from "react";
import PropTypes from "prop-types";
import Portal from "../Portal";
import Modal from "../Modal";
import Star from "../Star";
import { CardComponent, Thumbnail, Name } from "./CardStyle";

const Card = ({
  thumbnail,
  name,
  characterId,
  handleClick,
  favoriteCharacters,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const showPortal = () => {
    setShowPopup(true);
  };

  const closePopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  const isFavoriteCharater = () =>
    favoriteCharacters.some((favCharacter) => {
      return favCharacter.id === characterId;
    });

  const starStyle = isFavoriteCharater()
    ? {
        fill: "white",
        right: "1rem",
        top: "1rem",
      }
    : {
        fill: "none",
        stroke: "white",
        strokeWidth: 50,
        right: "1rem",
        top: "1rem",
      };

  return (
    <CardComponent onClick={showPortal}>
      <Thumbnail src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
      <Name>{name}</Name>
      <Star onClick={handleClick} id={characterId} style={starStyle} />
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
