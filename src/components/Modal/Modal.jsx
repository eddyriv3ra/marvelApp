import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getComicsByCharaterId } from "../../services/apis";
import ComicList from "../ComicList";
import { Wrapper, ModalBox, Times, Title, TitleContainer } from "./ModalStyles";

Title.displayName = "Title";
Times.displayName = "Times";

const Modal = ({ title, closePopup, characterId }) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const getDataById = async () => {
      try {
        const comicsData = await getComicsByCharaterId(characterId);
        setComics(comicsData);
      } catch (e) {
        throw new Error(e.message);
      }
    };
    getDataById();
  }, [characterId]);

  return (
    <Wrapper>
      <ModalBox>
        <TitleContainer>
          <Title>{title}</Title>
          <Times className="fa fa-times fa-lg" onClick={closePopup} />
        </TitleContainer>
        <ComicList comics={comics} />
      </ModalBox>
    </Wrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  closePopup: PropTypes.func,
  characterId: PropTypes.number,
};

Modal.defaultProps = {
  title: "",
  closePopup: () => {},
  characterId: 0,
};

export default Modal;
