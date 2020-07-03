import React, { useState, useEffect, useRef, useContext } from "react";
import { CharactersContext, FavoriteCharactersContext } from "../../Store";
import { getDataByKeyword } from "../../services/apis";
import styled from "styled-components";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { CancelToken, isCancel } from "../../services/source";
import Star from "../Star";

const InputContainer = styled.div`
  display: block;
  position: relative;
  width: 96%;
  margin: 1rem;
`;

const Icon = styled.i`
  position: absolute;
  height: 1.5rem;
  left: 8rem;
  top: 0.5rem;
  color: rgb(226, 226, 226);
`;

const InputBar = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.4rem;
  padding-left: 12rem;
`;

const Image = styled.img`
  width: 5rem;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
`;

const SearchBar = () => {
  const history = useHistory();
  const { search } = useLocation();

  const [_, setCharacters] = useContext(CharactersContext);
  const [favoriteCharacters, , initialCharacters] = useContext(
    FavoriteCharactersContext
  );
  const [keyword, setKeyword] = useState("");
  const [favoriteList, setFavoriteList] = useState(false);
  const componentJustMounted = useRef(true);

  useEffect(() => {
    const query = getParams();
    const source = CancelToken.source();
    const getData = async () => {
      try {
        const result = await getDataByKeyword(query, source);
        setCharacters(result);
      } catch (error) {
        if (isCancel(error)) {
          console.log(`request cancelled:${error}`);
        } else {
          console.log("another error happened:" + error.message);
        }
      }
    };
    if (query.length > 0) {
      getData();
      setFavoriteList(false);
    }
    componentJustMounted.current = false;

    return () => {
      source.cancel();
    };
  }, [keyword]);

  const handleChange = (e) => {
    const searchKeyword = e.target.value;
    history.replace(`/?character=${searchKeyword}`);
    setKeyword(searchKeyword);
  };

  const getParams = () => {
    const searchParams = new URLSearchParams(search);
    return searchParams.get("character") || "";
  };

  const showFavoriteCharacters = () => {
    if (!favoriteList) {
      setCharacters(favoriteCharacters);
      setFavoriteList(true);
    } else {
      setCharacters(initialCharacters);
      setFavoriteList(false);
    }
  };

  const customStyle = favoriteList
    ? {
        stroke: "black",
        strokeWidth: 25,
        fill: "black",
        right: "1rem",
        top: "15%",
      }
    : {
        stroke: "black",
        strokeWidth: 25,
        fill: "white",
        right: "2rem",
        top: "15%",
      };

  return (
    <InputContainer>
      <Image src="/marvelLogo.png" alt="marvel" />
      <Icon className="fa fa-search fa-2x" />
      <InputBar
        type="text"
        onChange={handleChange}
        placeholder="Search..."
        defaultValue={getParams() || ""}
      />
      <Star onClick={showFavoriteCharacters} style={customStyle} />
    </InputContainer>
  );
};

export default SearchBar;
