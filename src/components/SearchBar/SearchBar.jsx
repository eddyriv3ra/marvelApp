import React, { useState, useEffect, useRef, useContext } from "react";
import { CharactersContext } from "../../Store";
import styled from "styled-components";
import axios from "axios";

const InputContainer = styled.div`
  display: block;
  width: 87%;
  position: relative;
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
  const [keyword, setKeyword] = useState("");
  const componentJustMounted = useRef(true);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getData = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${keyword}&limit=8&ts=1&apikey=508dfef6ad8ecc046b84be570d8ab372&hash=afa0ce68cff53edcda03339bc63595aa`;
      try {
        const result = await axios.get(url, {
          cancelToken: source.token,
        });
        setCharacters(result.data.data.results);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(`request cancelled:${error}`);
        } else {
          console.log("another error happened:" + error.message);
        }
      }
    };
    if (!componentJustMounted.current && keyword.length > 0) {
      getData();
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

  console.log(keyword);

  return (
    <InputContainer>
      <Image src="/marvelLogo.png" alt="marvel" />
      <Icon className="fa fa-search fa-2x" />
      <InputBar type="text" onChange={handleChange} placeholder="Search..." />
    </InputContainer>
  );
};

export default SearchBar;
