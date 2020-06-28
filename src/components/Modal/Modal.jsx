import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  background-color: rgba(0, 0, 0, 0.3);
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

const Modal = ({ title, closePopup }) => {
  return (
    <Wrapper>
      <ModalBox>
        <Title>{title}</Title>
        <Times className="fa fa-times fa-lg" onClick={closePopup} />
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
