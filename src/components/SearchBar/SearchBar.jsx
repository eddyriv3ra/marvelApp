import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const SearchBar = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <InputContainer>
      <Image src="/marvelLogo.png" alt="marvel" />
      <Icon className="fa fa-search fa-2x" />
      <InputBar type="text" onChange={handleChange} placeholder="Search..." />
    </InputContainer>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
