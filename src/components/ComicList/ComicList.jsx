import React from "react";
import PropTypes from "prop-types";
import ComicInfo from "../ComicInfo";
import { ListContainer, List } from "./ComicListStyle";

List.displayName = "List";

const ComicList = ({ comics }) => {
  return (
    <ListContainer>
      <List>
        {comics.map((comic) => {
          return <ComicInfo key={comic.id} comic={comic} />;
        })}
      </List>
    </ListContainer>
  );
};

ComicList.propTypes = {
  comics: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};

export default ComicList;
