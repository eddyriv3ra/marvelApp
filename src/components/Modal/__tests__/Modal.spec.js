import React from "react";
import { shallow } from "enzyme";
import Modal from "../Modal";

let wrapper;

const initialPropsData = {
  title: "new Title",
  characterId: 1,
  closePopup: jest.fn(),
};

beforeEach(() => {
  wrapper = shallow(<Modal {...initialPropsData} />);
});

describe("Modal", () => {
  it("should render props correctly", () => {
    expect(wrapper.find("Title").text()).toEqual("new Title");
    expect(wrapper.find("Times").props().className).toEqual(
      "fa fa-times fa-lg"
    );
    expect(wrapper.find("ComicList").exists()).toEqual(true);
  });
  it("should handle closePopup", () => {
    wrapper.find("Times").simulate("click");
    expect(initialPropsData.closePopup).toHaveBeenCalled();
  });
});
