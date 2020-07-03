import React, { Fragment } from "react";
import SearchBar from "./components/SearchBar";
import CardsContainer from "./components/CardsContainer";
import { GlobalStyle } from "./AppStyle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <SearchBar />
        <Switch>
          <Route path="/">
            <CardsContainer />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
