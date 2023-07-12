/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";
import Sidebar from "./Sidebar";

axios.defaults.baseURL = "http://localhost:4000/api/v1";

const Properties = ({ userId }) => {
  const [properties, setProperties] = useState([]);
  const { search } = useLocation();

  const handleSaveProperty = (propertyId) => {
    axios
      .post("/Favourite", {
        propertyListing: propertyId,
        fbUserId: userId,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        <Alert message="No properties found" isSuccess={false} />;
      });
  }, [search]);

  return (
    <div className="properties-page">
      <Sidebar />
      {properties.length === 0 ? (
        <Alert message="No properties found" success={false} />
      ) : (
        <div className="property-card-grid">
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
              userId={userId}
              _id={property._id}
              title={property.title}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              price={property.price}
              city={property.city}
              type={property.type}
              email={property.email}
              onSaveProperty={handleSaveProperty}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
