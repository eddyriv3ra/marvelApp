import React, { useState, useEffect, useRef, useContext } from "react";
import { CharactersContext } from "../../Store";
import { getDataByKeyword } from "../../services/apis";
import styled from "styled-components";
import { CancelToken, isCancel } from "../../services/source";

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

  return (
    <InputContainer>
      <Image src="/marvelLogo.png" alt="marvel" />
      <Icon className="fa fa-search fa-2x" />
      <InputBar type="text" onChange={handleChange} placeholder="Search..." />
    </InputContainer>
  );
};

export default SearchBar;
