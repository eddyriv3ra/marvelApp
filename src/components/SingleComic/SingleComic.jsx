import React, { useContext } from "react";
import moment from "moment";
import { CharactersContext } from "../../Store";
import {
  Thumbnail,
  SingleCardContainer,
  Title,
  Info,
  InfoContainer,
  Description,
} from "./SingleComicStyle";

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
