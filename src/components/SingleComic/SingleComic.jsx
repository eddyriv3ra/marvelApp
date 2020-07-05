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

Title.displayName = "Title";
InfoContainer.displayName = "InfoContainer";
Description.displayName = "Description";
Info.displayName = "Info";

const SingleComic = () => {
  const [comicData] = useContext(CharactersContext);
  const { dates, creators, thumbnail, description, title } = comicData;
  const onSaleDate = dates.find((date) => date.type === "onsaleDate");

  const creatorsIndexValues = [
    "colorist (cover)",
    "penciler (cover)",
    "writer",
  ];

  const creatorsValue = creators.items.reduce((acc, currentValue) => {
    if (creatorsIndexValues.some((value) => currentValue.role === value)) {
      const role = currentValue.role;
      const name = currentValue.name;
      acc.push({ role, name });
    }
    return acc;
  }, []);

  return (
    <SingleCardContainer>
      <Thumbnail src={`${thumbnail.path}.${thumbnail.extension}`} alt="comic" />
      <InfoContainer>
        <Title>{title}</Title>
        <Info>Published: {moment(onSaleDate.date).format("MMM D, YYYY")}</Info>
        {creatorsValue.map((creator) => {
          return (
            <Info key={creator.role}>
              {creator.role}: {creator.name}
            </Info>
          );
        })}
        {description ? (
          <Description>{description}</Description>
        ) : (
          <Description>No Description available</Description>
        )}
      </InfoContainer>
    </SingleCardContainer>
  );
};

export default SingleComic;
