import React from "react";
import { mount } from "enzyme";
import routeData from "react-router";
import SearchBar from "../SearchBar";
import { initialPreviousMockData, showFavoriteListMockData } from "../mockData";
import {
  CharactersContext,
  FavoriteCharactersContext,
  ShowFavoriteListContext,
  InitialPreviousData,
} from "../../../Store";

jest.mock("../../../utils/utils", () => ({
  getParams: jest.fn(),
}));

jest.mock("../../../services/apis", () => ({
  getDataByKeyword: jest.fn(),
}));

let wrapper;
const setCharacters = jest.fn();
const setInitialPreviousData = jest.fn();
const setShowFavoriteList = jest.fn();
const favoriteCharacters = showFavoriteListMockData;
const showFavoriteList = false;
const initialPreviousData = initialPreviousMockData;

const mockLocation = {
  pathname: "/welcome",
  hash: "",
  search: "spi",
  state: "",
};

const mockHistory = {
  replace: jest.fn(),
};

beforeEach(() => {
  jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
  jest.spyOn(routeData, "useHistory").mockReturnValue(mockHistory);

  const TestComponent = () => (
    <CharactersContext.Provider value={["", setCharacters]}>
      <FavoriteCharactersContext.Provider value={[favoriteCharacters]}>
        <ShowFavoriteListContext.Provider
          value={[showFavoriteList, setShowFavoriteList]}
        >
          <InitialPreviousData.Provider
            value={[initialPreviousData, setInitialPreviousData]}
          >
            <SearchBar />
          </InitialPreviousData.Provider>
        </ShowFavoriteListContext.Provider>
      </FavoriteCharactersContext.Provider>
    </CharactersContext.Provider>
  );
  wrapper = mount(<TestComponent />);
});

describe("SearchBar", () => {
  it("should render proper context data", () => {
    const logo = "/marvelLogo.png";
    expect(wrapper.find("InputContainer").find("img").props().src).toEqual(
      logo
    );
    expect(
      wrapper.find("InputContainer").find("Icon").find("i").exists()
    ).toEqual(true);
    expect(
      wrapper.find("InputContainer").find("Star").find("svg").exists()
    ).toEqual(true);
    expect(wrapper.find("InputContainer").find("InputBar").exists()).toEqual(
      true
    );
    expect(
      wrapper.find("InputContainer").find("InputBar").props().defaultValue
    ).toEqual("");
  });
  it("should update defaultValue when onChange is fired", () => {
    const event = {
      target: {
        value: "spi",
      },
    };
    const URLSearchParams = { set: jest.fn() };
    wrapper.find("InputContainer").find("InputBar").simulate("change", event);
    URLSearchParams.set("character", "spi");
    expect(
      wrapper.find("InputContainer").find("InputBar").props().defaultValue
    ).toEqual("");
  });
});
