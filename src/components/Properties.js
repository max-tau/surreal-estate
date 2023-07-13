import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";
import Sidebar from "./Sidebar";

axios.defaults.baseURL = "http://localhost:4000/api/v1";

const Properties = ({ userId }) => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);
  const [properties, setProperties] = useState([]);
  const { search } = useLocation();

  const handleSaveProperty = (propertyId) => {
    axios
      .post("/Favourite", {
        propertyListing: propertyId,
        fbUserId: userId,
      })
      .then(() =>
        setAlert({
          message: "Property successfully saved to Favourites",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message:
            "Unable to save property to Favourites, please try again later",
          isSuccess: false,
        })
      );
  };

  useEffect(() => {
    axios
      .get(`/PropertyListing${search}`)
      .then(({ data }) =>
        data.length === 0
          ? setAlert({
              message: "No properties found",
              isSuccess: false,
            })
          : setProperties(data)
      )
      .catch(() => {
        <Alert message="No properties found" isSuccess={false} />;
      });
  }, [search]);

  return (
    <div className="properties-page">
      <div className="properties-page_alert">
        {alert.message && (
          <Alert message={alert.message} isSuccess={alert.isSuccess} />
        )}
      </div>
      <Sidebar />
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
    </div>
  );
};

export default Properties;
