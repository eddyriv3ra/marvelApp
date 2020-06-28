import React, { Fragment } from "react";
import SearchBar from "./components/SearchBar";
import CardsContainer from "./components/CardsContainer";

const App = () => {
  return (
    <Fragment>
      <SearchBar />
      <CardsContainer />
    </Fragment>
  );
};

export default App;
