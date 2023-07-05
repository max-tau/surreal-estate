import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property card", () => {
  const validProps = {
    id: 123456,
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
      id={validProps.id}
      title={validProps.title}
      bedrooms={validProps.bedrooms}
      bathrooms={validProps.bathrooms}
      price={validProps.price}
      city={validProps.city}
      type={validProps.type}
      email={validProps.email}
    />
  );

  it("renders correct value for props", () => {
    expect(screen.getByText("2 bed flat for sale")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("125000")).toBeInTheDocument();
    expect(screen.getByText("Manchester")).toBeInTheDocument();
    expect(screen.getByText("Flat")).toBeInTheDocument();
    expect(screen.getByText("Email")).toHaveAttribute(
      "href",
      "mailto:mrs_hudson@bakerstreet.co.uk"
    );
  });
});
