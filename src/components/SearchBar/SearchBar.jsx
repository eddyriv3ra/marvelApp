import React, { useState, useEffect, useRef, useContext } from "react";
import { CharactersContext, FavoriteCharactersContext } from "../../Store";
import { getDataByKeyword } from "../../services/apis";
import styled from "styled-components";
import { CancelToken, isCancel } from "../../services/source";
import Star from "../Star";

const InputContainer = styled.div`
  display: block;
  width: 87%;
  position: fixed;
`;

const Icon = styled.i`
  position: absolute;
  padding: 1rem;
  height: 2rem;
  left: 8rem;
  color: rgb(226, 226, 226);
`;

const InputBar = styled.input`
  width: 100%;
  height: 2rem;
  padding: 1rem;
  font-size: 1.7rem;
  padding-left: 12rem;
`;

const Image = styled.img`
  width: 5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const SearchBar = () => {
  const [_, setCharacters] = useContext(CharactersContext);
  const [favoriteCharacters, , initialCharacters] = useContext(
    FavoriteCharactersContext
  );
  const [keyword, setKeyword] = useState("");
  const [favoriteList, setFavoriteList] = useState(false);
  const componentJustMounted = useRef(true);

  useEffect(() => {
    const source = CancelToken.source();
    const getData = async () => {
      try {
        const result = await getDataByKeyword(keyword, source);
        setCharacters(result);
      } catch (error) {
        if (isCancel(error)) {
          console.log(`request cancelled:${error}`);
        } else {
          console.log("another error happened:" + error.message);
        }
      }
    };
    if (!componentJustMounted.current && keyword.length > 0) {
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
    setKeyword(searchKeyword);
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
        right: "-6rem",
        top: "0.6rem",
      }
    : {
        stroke: "black",
        strokeWidth: 25,
        fill: "white",
        right: "-6rem",
        top: "0.6rem",
      };

  return (
    <InputContainer>
      <Image src="/marvelLogo.png" alt="marvel" />
      <Icon className="fa fa-search fa-2x" />
      <InputBar type="text" onChange={handleChange} placeholder="Search..." />
      <Star onClick={showFavoriteCharacters} style={customStyle} />
    </InputContainer>
  );
};

export default SearchBar;
