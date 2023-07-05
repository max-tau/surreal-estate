import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);

    expect(getByText(/Error/).textContent).toBe("Error!");
    expect(asFragment()).toMatchSnapshot();
  });
  it("displays a success message", () => {
    const { getByText, asFragment } = render(<Alert message="Success!!!" />);

    expect(getByText(/Success/).textContent).toBe("Success!!!");
    expect(asFragment()).toMatchSnapshot();
  });
  it("does not render without a message", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
