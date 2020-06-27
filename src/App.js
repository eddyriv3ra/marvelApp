import React from "react";
import SearchBar from "./components/SearchBar";
import CardsContainer from "./components/CardsContainer";
import styled from "styled-components";

const AppContainer = styled.div``;

const App = () => {
  return (
    <div>
      <SearchBar />
      <CardsContainer />
    </div>
  );
};

export default App;
