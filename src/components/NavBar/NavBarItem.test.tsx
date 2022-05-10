import React from "react";
import { shallow } from "enzyme";
import NavBarItem from "./NavBarItem";

describe("components/navbar/NavBarItem", () => {
  test("should match snapshot with icon", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<NavBarItem icon="fas fa-tasks" onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should match snapshot with title", () => {
    const wrapper = shallow(<NavBarItem title="Likes" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should match snapshot with color", () => {
    const wrapper = shallow(<NavBarItem icon="fas fa-fire" color="primary" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should handle onClick", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<NavBarItem icon="fas fa-chevron-left" onClick={onClick} />);

    wrapper.find("div.navbarItem").simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
