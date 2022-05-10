import React from "react";
import { shallow } from "enzyme";
import NavBar from "./NavBar";
import NavBarItem from "./NavBarItem";

describe("components/navbar/NavBar", () => {
  test("should match snapshot with icon", () => {
    const onFirstClick = jest.fn();
    const onThirdClick = jest.fn();
    const wrapper = shallow(
      <NavBar>
        <NavBarItem icon="fas fa-tasks" onClick={onFirstClick} />
        <NavBarItem icon="fas fa-fire" color="primary" />
        <NavBarItem icon="far fa-comment" onClick={onThirdClick} />
      </NavBar>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should match snapshot with title", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <NavBar>
        <NavBarItem icon="fas fa-chevron-left" onClick={onClick} />
        <NavBarItem title="Likes" />
        <NavBarItem />
      </NavBar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
