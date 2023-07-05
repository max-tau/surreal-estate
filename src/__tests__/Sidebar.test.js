import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";

describe("Sidebar", () => {
  it("renders components correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
