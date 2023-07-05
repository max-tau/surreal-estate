/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";
import Sidebar from "./Sidebar";

axios.defaults.baseURL = "http://localhost:4000/api/v1";

const Properties = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);
  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({ message: "No properties found", isSuccess: false });
      });
  }, [search]);

  return (
    <div className="properties-page">
      <Sidebar />
      <div className="property-card-grid">
        {properties.map((property) => (
          <PropertyCard
            id={property.id}
            title={property.title}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            price={property.price}
            city={property.city}
            type={property.type}
            email={property.email}
          />
        ))}
        {alert.message && (
          <Alert message={alert.message} success={alert.isSuccess} />
        )}
      </div>
    </div>
  );
};

export default Properties;
