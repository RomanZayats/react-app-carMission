import React from "react";
import { render } from "@testing-library/react";
import ReviewCarousel from "./ReviewCarousel";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    replace: jest.fn(),
  }),
}));

test("ReviewCarousel is rendered is correctly", () => {
  render(<ReviewCarousel heading="test" />);
  mockAllIsIntersecting(true);
});
