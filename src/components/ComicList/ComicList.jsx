import React from "react";
import PropTypes from "prop-types";
import ComicInfo from "../ComicInfo";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow-y: scroll;
`;

const ListContainer = styled.div`
  height: 85%;
  overflow-y: auto;
`;

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

ComicList.propTypes = {};

export default ComicList;
