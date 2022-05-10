import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("components/button/Button", () => {
  test("should match snapshot", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button
        className="reactionButton"
        icon="fas fa-times"
        iconColor="#fc575e"
        onClick={onClick}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should match snapshot without className", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button icon="fas fa-times" iconColor="#fc575e" onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should match snapshot without iconColor ", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button className="reactionButton" icon="fas fa-times" onClick={onClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should match snapshot without onClick ", () => {
    const wrapper = shallow(<Button className="reactionButton" icon="fas fa-times" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should handle onClick", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button
        className="reactionButton"
        icon="fas fa-times"
        iconColor="#fc575e"
        onClick={onClick}
      />
    );

    wrapper.find("div.button").simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
