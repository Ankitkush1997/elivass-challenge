import React from "react";
import { render } from "@testing-library/react";
import Spinner from "../spinner/Spinner.jsx";
import "@testing-library/jest-dom/extend-expect";

describe("Spinner", () => {
  test("renders without errors", () => {
    render(<Spinner />);
  });

  test("renders the spinner with the correct CSS class", () => {
    const { container } = render(<Spinner />);
    const spinnerElement = container.firstChild;
    expect(spinnerElement).toHaveClass("lds-roller");
  });

  test("renders 8 child elements representing the spinner circles", () => {
    const { container } = render(<Spinner />);
    const circleElements = container.querySelectorAll(".lds-roller > div");
    expect(circleElements.length).toBe(8);
  });
});
