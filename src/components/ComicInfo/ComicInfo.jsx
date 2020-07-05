import React from "react";
import PropTypes from "prop-types";
import {
  ComicImage,
  ComicItem,
  ComicInfoData,
  Description,
} from "./ComicInfoStyle";

const ComicInfo = ({ comic }) => {
  return (
    <ComicItem>
      <ComicImage
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={`${comic.title}`}
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

ComicInfo.propTypes = {
  comic: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

ComicInfo.defaultProps = {
  comic: {
    thumbnail: {
      path: "",
      extension: "",
    },
    title: "",
    description: "",
  },
};

export default ComicInfo;
