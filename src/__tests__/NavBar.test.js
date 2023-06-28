import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders component correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("contains an image with correct src", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const logo = screen.getByRole("img");

    expect(logo).toHaveAttribute(
      "src",
      "https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
    );
  });
});
