import React from "react";
import { mount } from "enzyme";
import SingleComic from "../SingleComic";
import mockData from "../mockData";
import { CharactersContext } from "../../../Store";

let wrapper;

beforeEach(() => {
  const TestComponent = () => (
    <CharactersContext.Provider value={[mockData]}>
      <SingleComic />
    </CharactersContext.Provider>
  );
  wrapper = mount(<TestComponent />);
});

describe("SingleComic", () => {
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render proper context comic data", () => {
    const src = "http://i.annihil.us/u/prod/marvel/i/mg/5/03/5e86532e23215.jpg";
    const title = "X-Force (2019) #10";
    const description =
      "Note: The on-sale date listed here is subject to change. THE DEADLY GARDEN! As one of the team members struggles with their secrets unraveling, the rest of X?Force has to fight to stay alive long enough to salvage their mission.";
    const publishedDate = "Published: Jul 8, 2020";
    expect(wrapper.find("img").props().src).toEqual(src);
    expect(wrapper.find("Title").find("span").text()).toEqual(title);
    expect(
      wrapper.find("InfoContainer").find("div").at(0).children()
    ).toHaveLength(6);
    expect(wrapper.find("Description").find("div").text()).toEqual(description);
    expect(wrapper.find("Info").at(0).find("span").text()).toEqual(
      publishedDate
    );
  });
});
