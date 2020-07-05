import React from "react";
import { shallow } from "enzyme";
import MockData from "../MockData";
import Card from "../Card";

const propsData = {
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/50/5e8b6cdb3c371",
    extension: "jpg",
  },
  handleClick: jest.fn(),
  name: "Scream: Curse of Carnage (2019) #6",
  characterID: 83383,
  favoriteCharacters: MockData,
};

describe("Card", () => {
  it("should render properly", () => {
    const src = "http://i.annihil.us/u/prod/marvel/i/mg/c/50/5e8b6cdb3c371.jpg";
    const name = "Scream: Curse of Carnage (2019) #6";
    const wrapper = shallow(<Card {...propsData} />);
    expect(wrapper.find("Thumbnail").props().src).toEqual(src);
    expect(wrapper.find("Name").text("")).toEqual(name);
    wrapper.find("Star").simulate("click");
    expect(propsData.handleClick).toHaveBeenCalled();
  });
  it("should render Portal", () => {
    const wrapper = shallow(<Card {...propsData} />);
    wrapper.find("CardComponent").simulate("click");
    expect(wrapper.find("Portal").exists()).toBe(true);
  });
});
