import React, { Fragment } from "react";
import SearchBar from "./components/SearchBar";
import CardsContainer from "./components/CardsContainer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  background-color: rgb(246, 247, 249);
},
html {
  font-size: 62.5%;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <SearchBar />
      <CardsContainer />
    </Fragment>
  );
};

export default App;
