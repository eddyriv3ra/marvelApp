import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ComicImage = styled.img`
  width: 30%;
`;

const ComicItem = styled.li`
  padding-bottom: 20px;
  display: flex;
`;

const ComicInfoData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const Description = styled.span`
  padding-top: 2rem;
`;

const ComicInfo = ({ comic }) => {
  return (
    <ComicItem>
      <ComicImage
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt=""
      />
      <ComicInfoData>
        <span>{comic.title}</span>
        {comic.description ? (
          <Description>{comic.description}</Description>
        ) : (
          <Description>No description available</Description>
        )}
      </ComicInfoData>
    </ComicItem>
  );
};

ComicInfo.propTypes = {};

export default ComicInfo;
