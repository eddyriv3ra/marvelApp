import React, { useContext } from "react";
import { CharactersContext } from "../../Store";
import moment from "moment";
import styled from "styled-components";

const Thumbnail = styled.img`
  width: 40%;
  height: 90%;
  border-radius: 10px;
`;

const SingleCardContainer = styled.div`
  display: flex;
  width: 90%;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 600;
`;

const Info = styled.span`
  font-size: 1.3rem;
`;

const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
`;

const Description = styled.div`
  margin-top: 7rem;
  font-weight: 300;
  font-size: 1.3rem;
`;

const SingleComic = () => {
  const [comicData] = useContext(CharactersContext);
  const comic = comicData[0];
  const onSaleDate = comic.dates.find((date) => date.type === "onsaleDate");

  const creatorsIndexValues = [
    "colorist (cover)",
    "penciler (cover)",
    "writer",
  ];

  const creators = comic.creators.items.reduce((acc, currentValue) => {
    if (creatorsIndexValues.some((value) => currentValue.role === value)) {
      const role = currentValue.role;
      const name = currentValue.name;
      acc.push({ role, name });
    }
    return acc;
  }, []);

  return (
    <SingleCardContainer>
      <Thumbnail
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt=""
      />
      <InfoContainer>
        <Title>{comic.title}</Title>
        <Info>Published: {moment(onSaleDate.date).format("MMM D, YYYY")}</Info>
        {creators.map((creator) => {
          return (
            <Info>
              {creator.role}: {creator.name}
            </Info>
          );
        })}
        <Description>{comic.description}</Description>
      </InfoContainer>
    </SingleCardContainer>
  );
};

export default SingleComic;
