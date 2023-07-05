import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property card", () => {
  const validProps = {
    key: 123456,
    title: "2 bed flat for sale",
    bedrooms: 2,
    bathrooms: 1,
    price: 125000,
    email: "mrs_hudson@bakerstreet.co.uk",
    city: "Manchester",
    type: "Flat",
  };
  render(
    <PropertyCard
      key={validProps.key}
      title={validProps.title}
      bedrooms={validProps.bedrooms}
      bathrooms={validProps.bathrooms}
      price={validProps.price}
      city={validProps.city}
      type={validProps.type}
      email={validProps.email}
    />
  );

  it("renders correct value for title prop", () => {
    console.log(validProps.title);
    expect(screen.getByText("2 bed flat for sale")).toBeInTheDocument();
  });
  it("renders correct value for bedrooms prop", () => {
    expect(screen.getByText(2)).toBeInTheDocument();
  });
  it("renders correct value for bathrooms prop", () => {
    expect(screen.getByText(1)).toBeInTheDocument();
  });
  it("renders correct value for price prop", () => {
    expect(screen.getByText(125000)).toBeInTheDocument();
  });
  it("renders correct value for city prop", () => {
    expect(screen.getByText("Manchester")).toBeInTheDocument();
  });
  it("renders correct value for type prop", () => {
    expect(screen.getByText("Flat")).toBeInTheDocument();
  });
  it("renders correct value for email prop", () => {
    expect(screen.getByText("Email")).toHaveAttribute(
      "href",
      "mailto:mrs_hudson@bakerstreet.co.uk"
    );
  });
});
