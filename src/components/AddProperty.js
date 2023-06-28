import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
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
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (e) => {
    e.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className="subheading">Add Property</h2>
      <div>
        <form className="add-property" onSubmit={handleAddProperty}>
          <label htmlFor="title">
            Title
            <input
              className="add-property-input"
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
              className="add-property-input"
              placeholder="Number of bedrooms"
              type="text"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              className="add-property-input"
              placeholder="Number of bathrooms"
              type="text"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="price">
            Price &#40;£&#41;
            <input
              className="add-property-input"
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
              className="add-property-input"
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
              className="add-property-select"
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
              className="add-property-select"
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
    </>
  );
};

export default AddProperty;
