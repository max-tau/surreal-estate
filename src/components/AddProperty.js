/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  axios.defaults.baseURL = "http://localhost:4000/api/v1";

  const initialState = {
    fields: {
      title: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
      city: "Manchester",
      type: "Detached",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = async (e) => {
    e.preventDefault();
    setAlert({ message: "", isSuccess: false });
    await axios
      .post("/PropertyListing", { ...fields })
      .then(() => {
        setAlert({ message: "Property successfully added!", isSuccess: true });
      })
      .catch(() => {
        setAlert({
          message: "Server error, please try again later.",
          isSuccess: false,
        });
      });
  };
  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-property">
      <h2 className="add-property-subheading">Add Property</h2>
      <form className="add-property-form" onSubmit={handleAddProperty}>
        {alert.message && (
          <Alert message={alert.message} success={alert.isSuccess} />
        )}
        <label htmlFor="title">
          Title
          <input
            className="add-property-form-input"
            placeholder="Property tagline"
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            className="add-property-form-input"
            placeholder="Number of bedrooms"
            type="number"
            id="bedrooms"
            step="1"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            className="add-property-form-input"
            placeholder="Number of bathrooms"
            type="number"
            step="1"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price &#40;£&#41;
          <input
            className="add-property-form-input"
            placeholder="e.g. 100,000"
            type="number"
            min="0.00"
            step="250"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className="add-property-form-input"
            placeholder="name12@example.com"
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            className="add-property-form-select"
            name="city"
            id="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type
          <select
            className="add-property-form-select"
            name="type"
            id="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Flat">Flat</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
