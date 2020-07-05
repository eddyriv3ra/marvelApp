import styled from "styled-components";

export const Thumbnail = styled.img`
  width: 40%;
  height: 90%;
  border-radius: 10px;
`;

export const SingleCardContainer = styled.div`
  display: flex;
  width: 90%;
`;

export const Title = styled.span`
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 600;
`;

export const Info = styled.span`
  font-size: 1.3rem;
`;

export const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
`;

export const Description = styled.div`
  margin-top: 7rem;
  font-weight: 300;
  font-size: 1.3rem;
`;
