import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, prettyDOM, render } from "@testing-library/react";
import Scroll from "./Scroll";

describe("<Scroll />", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Scroll>
        <div>testDivContent</div>
      </Scroll>
    );
  });

  test("should render the children", () => {
    component.getByText("testDivContent");
  });

  test("should render the children", () => {
    const el = component.getByText("testDivContent");
    expect(el.parentNode).toHaveStyle("overflow: scroll");
  });
});
