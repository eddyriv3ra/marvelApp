import styled from "styled-components";

export const Wrapper = styled.div`
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

export const ModalBox = styled.div`
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

export const Times = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
`;

export const TitleContainer = styled.div`
  margin: 1rem 0;
`;
