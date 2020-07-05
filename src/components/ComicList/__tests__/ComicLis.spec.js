import React from "react";
import { shallow } from "enzyme";
import ComicList from "../ComicList";
import mockData from "../mockData";

describe("ComicList", () => {
  it("Should render List", () => {
    const wrapper = shallow(<ComicList comics={mockData} />);
    expect(wrapper.find("List").children().length).toEqual(4);
  });
});
