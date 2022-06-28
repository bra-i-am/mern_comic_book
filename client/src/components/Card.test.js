import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Card from "./Card";

describe("<Card />", () => {
  const comicTest = {
    _id: 123,
    date_added: Date.now(),
    image: "https://www.fdd.cl/wp-content/uploads/2017/09/Test.jpg",
    name: "ComicTest",
  };

  let component, mockHandlerAdd;
  beforeEach(() => {
    mockHandlerAdd = jest.fn();

    component = render(
      <Router>
        <Card comic={comicTest} handleAddFavs={mockHandlerAdd} />
      </Router>
    );
  });

  test("should render content", () => {
    component.getByText("ComicTest");
  });

  test("should call event handler clicking the button", () => {
    const addButton = component.getByText("Add to favorites");
    fireEvent.click(addButton);

    expect(mockHandlerAdd).toHaveBeenCalledTimes(1);
  });

  test("should call event handler clicking the button", () => {
    const el = component.getByText("Add to favorites");
    expect(el.parentNode).toHaveClass("card");
  });
});
