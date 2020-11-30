import React from "react";
import { render } from "@testing-library/react";
import ServicePackages from "./ServicePackages";
import SectionHeading from "../../components/generalComponents/SectionHeading/SectionHeading";

test("ServicePackages is rendered correctly", () => {
  const mockSectionClassName = "servicePackages";
  render(<ServicePackages className={mockSectionClassName} />);
});

test("ServicePackages contains sections", () => {
  const mockHeadingText = "Test heading";
  const mockPackageClassName = "servicePackages";
  const { getByTestId } = render(
    <ServicePackages>
      <SectionHeading text={mockHeadingText} />
      <div className={mockPackageClassName} />
    </ServicePackages>
  );
  const headingText = getByTestId("section-heading");
  expect(headingText).toBeDefined();
});
