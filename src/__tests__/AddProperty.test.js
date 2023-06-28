import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders component correctly", () => {
    const { asFragment } = render(<AddProperty />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("contains a form with correct inputs and selects", () => {
    render(<AddProperty />);
    const textInputs = screen.queryAllByRole("textbox");
    const numberInput = screen.getByRole("spinbutton");
    const selectInputs = screen.queryAllByRole("combobox");

    expect(textInputs).toHaveLength(4);
    expect(numberInput).toBeInTheDocument();
    expect(selectInputs).toHaveLength(2);
  });
});
