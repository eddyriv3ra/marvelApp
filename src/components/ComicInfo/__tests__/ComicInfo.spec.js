import React from "react";
import { shallow } from "enzyme";
import MockData from "../MockData";
import ComicInfo from "../ComicInfo";

describe("ComicInfo", () => {
  it("should render properly", () => {
    const src = "http://i.annihil.us/u/prod/marvel/i/mg/1/03/5834b9b033036.jpg";
    const title = "Nick Fury, Agent of S.H.I.E.L.D. (1989) #19";
    const description =
      "Apogee of Disaster Part 5.  Lohan the Satellite Monster is no match for Fury with a little help from the Fantastic Four!";
    const wrapper = shallow(<ComicInfo comic={MockData} />);
    expect(wrapper.find("ComicImage").props().src).toEqual(src);
    expect(wrapper.find("ComicInfoData").children().length).toEqual(2);
    expect(wrapper.find("ComicInfoData").find("span").text()).toEqual(title);
    expect(wrapper.find("Description").text()).toEqual(description);
  });
});
