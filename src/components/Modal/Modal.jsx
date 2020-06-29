import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getComicsByCharaterId } from "../../services/apis";
import ComicList from "../ComicList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  box-sizing: border-box;
  height: 60%;
  width: 30%;
  overflow-y: auto;
  background-color: white;
  z-index: 101;
  border-radius: 20px;
  padding: 1rem 2rem;
  position: relative;
  overflow-y: hidden;
`;

const Times = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h2``;

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
        <div>
          <Title>{title}</Title>
          <Times className="fa fa-times fa-lg" onClick={closePopup} />
        </div>
        <ComicList comics={comics} />
      </ModalBox>
    </Wrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  closePopup: PropTypes.func,
};

Modal.defaultProps = {
  title: "",
  closePopup: () => {},
};

export default Modal;
