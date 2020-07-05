import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CharactersContext,
  FavoriteCharactersContext,
  ShowFavoriteListContext,
  InitialPreviousData,
} from "../../Store";
import { getDataByKeyword } from "../../services/apis";
import { CancelToken, isCancel } from "../../services/source";
import { InputContainer, Icon, InputBar, Image } from "./SearchBarStyle";
import Star from "../Star";

InputContainer.displayName = "InputContainer";
Icon.displayName = "Icon";
InputBar.displayName = "InputBar";

const SearchBar = () => {
  const history = useHistory();
  const { search } = useLocation();

  const [, setCharacters] = useContext(CharactersContext);
  const [initialPreviousData, setInitialPreviousData] = useContext(
    InitialPreviousData
  );
  const [favoriteCharacters] = useContext(FavoriteCharactersContext);
  const [showFavoriteList, setShowFavoriteList] = useContext(
    ShowFavoriteListContext
  );
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const query = getParams();
    const source = CancelToken.source();
    const getData = async () => {
      try {
        const result = await getDataByKeyword(query, source);
        setCharacters(result);
        setInitialPreviousData(result);
      } catch (error) {
        if (isCancel(error)) {
          console.log(`request cancelled:${error}`);
        } else {
          console.log("another error happened:" + error.message);
        }
      }
    };
    if (query.character.length > 0 || query.comic.length > 0) {
      getData();
      setShowFavoriteList(false);
    }

    return () => {
      source.cancel();
    };
  }, [keyword]);

  const handleChange = (e) => {
    const searchKeyword = e.target.value;
    const isURL = searchKeyword.split("/")[5];
    if (isURL) {
      history.replace(`/?comic=${isURL}`);
      setKeyword(searchKeyword);
    } else {
      history.replace(`/?character=${searchKeyword}`);
      setKeyword(searchKeyword);
    }
  };

  const getParams = () => {
    const searchParams = new URLSearchParams(search);
    return {
      character: searchParams.get("character") || "",
      comic: searchParams.get("comic") || "",
    };
  };

  const showFavoriteCharacters = () => {
    if (!showFavoriteList) {
      setCharacters(favoriteCharacters);
      setShowFavoriteList(true);
    } else {
      setCharacters(initialPreviousData);
      setShowFavoriteList(false);
    }
  };

  const customStyle = showFavoriteList
    ? {
        stroke: "black",
        strokeWidth: 25,
        fill: "gray",
        right: "2rem",
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
        defaultValue={getParams().character || ""}
      />
      <Star onClick={showFavoriteCharacters} style={customStyle} />
    </InputContainer>
  );
};

export default SearchBar;
