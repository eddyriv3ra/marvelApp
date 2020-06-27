import React from "react";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <AppContainer>
      <SearchBar />
    </AppContainer>
  );
};

export default App;
