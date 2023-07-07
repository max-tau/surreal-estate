import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  const handleLogin = () => {
    jest.fn();
  };
  const handleLogout = () => {
    jest.fn();
  };

  it("renders component correctly", () => {
    const { asFragment } = render(
      <Router>
        <NavBar onLogin={handleLogin} userId={1} onLogout={handleLogout} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("contains an image with correct src", () => {
    render(
      <Router>
        <NavBar onLogin={handleLogin} userId={1} onLogout={handleLogout} />
      </Router>
    );
    const logo = screen.getByRole("img");

    expect(logo).toHaveAttribute(
      "src",
      "https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
    );
  });
});
