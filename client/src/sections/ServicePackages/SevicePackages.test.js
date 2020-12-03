import React from "react";
import { render } from "@testing-library/react";
import ServicePackages from "./ServicePackages";
import SectionHeading from "../../components/generalComponents/SectionHeading/SectionHeading";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

test("ServicePackages is rendered correctly", () => {
  const mockSectionClassName = "service-packages";
  render(<ServicePackages className={mockSectionClassName} />);
});

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));
const mockHistoryReplace = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    replace: () => mockHistoryReplace,
  }),
}));

test("ServicePackages contains sections", () => {
  const mockHeadingText = "Test heading";
  const mockPackageClassName = "service-packages";
  const { getByTestId } = render(
    <ServicePackages>
      <SectionHeading text={mockHeadingText} />
      <div className={mockPackageClassName} />
    </ServicePackages>
  );
  mockAllIsIntersecting(true);
  const headingText = getByTestId("section-heading");
  expect(headingText).toBeDefined();
});
