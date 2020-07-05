import React from "react";
import { shallow } from "enzyme";
import StarComponent from "../Star";

const initialCustomStyle = {
  stroke: "black",
  strokeWidth: 25,
  fill: "gray",
  right: "2rem",
  top: "15%",
};

const onClick = jest.fn();
let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <StarComponent style={initialCustomStyle} onClick={onClick} />
  );
});

describe("StarComponent", () => {
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should handle onClick", () => {
    const event = {
      stopPropagation: jest.fn(),
    };
    wrapper.find("svg").simulate("click", event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });
  it("Should update props styles", () => {
    const newProps = {
      stroke: "black",
      strokeWidth: 25,
      fill: "white",
      right: "2rem",
      top: "15%",
    };
    wrapper.setProps({ style: newProps });
    expect(wrapper.find("svg").props().styleProps).toEqual(newProps);
  });
});
