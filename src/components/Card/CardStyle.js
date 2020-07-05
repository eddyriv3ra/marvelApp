import styled from "styled-components";

export const CardComponent = styled.div`
  width: 20%;
  height: 27rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Name = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
`;
