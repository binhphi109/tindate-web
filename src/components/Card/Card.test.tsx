import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("components/card/Card", () => {
  test("should match snapshot", () => {
    const wrapper = shallow(<Card image="http://image-url.com" title="Alex" subtitle="25" />);

    expect(wrapper).toMatchSnapshot();
  });
});
