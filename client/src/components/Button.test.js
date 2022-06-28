import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("should render content", () => {
    const component = render(<Button text={"Testing button"} />);

    component.getByText("Testing button");
  });

  test("should call event handler clicking the button", () => {
    const mockHandler = jest.fn();

    const component = render(
      <Button text={"Testing button"} navigate={mockHandler} />
    );

    const button = component.getByText("Testing button");
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
