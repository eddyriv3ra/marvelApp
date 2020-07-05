import React from "react";
import { mount } from "enzyme";
import CardsContainer from "../CardsContainer";
import routeData from "react-router";
import {
  CharactersContext,
  FavoriteCharactersContext,
  ShowFavoriteListContext,
} from "../../../Store";
import {
  mockDataCharacter,
  showFavoriteListMockData,
  comicData,
} from "../MockData";

let wrapper;

const setCharacters = jest.fn();
let characters = mockDataCharacter;
const favoriteCharacters = showFavoriteListMockData;
const showFavoriteList = false;
const setFavoriteCharacters = jest.fn();

const mockLocation = {
  pathname: "/welcome",
  hash: "",
  search: "",
  state: "",
};

describe("CardsContainer", () => {
  it("should render Card Component", () => {
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);

    const TestComponent = () => (
      <CharactersContext.Provider value={[characters, setCharacters]}>
        <FavoriteCharactersContext.Provider
          value={[favoriteCharacters, setFavoriteCharacters]}
        >
          <ShowFavoriteListContext.Provider value={[showFavoriteList]}>
            <CardsContainer />
          </ShowFavoriteListContext.Provider>
        </FavoriteCharactersContext.Provider>
      </CharactersContext.Provider>
    );
    wrapper = mount(<TestComponent />);
    expect(
      wrapper.find("CardsContainerStyle").find("Card").children().length
    ).toEqual(1);
  });
  it("should render SingleComic Component", () => {
    characters = comicData;
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);

    const TestComponent = () => (
      <CharactersContext.Provider value={[characters, setCharacters]}>
        <FavoriteCharactersContext.Provider
          value={[favoriteCharacters, setFavoriteCharacters]}
        >
          <ShowFavoriteListContext.Provider value={[showFavoriteList]}>
            <CardsContainer />
          </ShowFavoriteListContext.Provider>
        </FavoriteCharactersContext.Provider>
      </CharactersContext.Provider>
    );
    wrapper = mount(<TestComponent />);
    expect(
      wrapper.find("CardsContainerStyle").find("SingleComic").exists()
    ).toBe(true);
  });
});
