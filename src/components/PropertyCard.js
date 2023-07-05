import React from "react";
import "../styles/property-card.css";

const PropertyCard = ({
  userId,
  _id,
  title,
  bedrooms,
  bathrooms,
  price,
  city,
  type,
  email,
  onSaveProperty,
}) => {
  return (
    <div className="property-card" key={_id}>
      <div className="property-card_image">
        <img src="https://picsum.photos/300/200" alt={`${title} property`} />
      </div>
      <div className="property-card_title">{title}</div>
      <div className="property-card_bedrooms">
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/128/2284/2284001.png"
          alt="bedroom icon"
        />
        {bedrooms}
      </div>
      <div className="property-card_bathrooms">
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/128/259/259973.png"
          alt="bathroom icon"
        />
        {bathrooms}
      </div>
      <div className="property-card_price">{price}</div>
      <div className="property-card_city">{city}</div>
      <div className="property-card_type">{type}</div>
      <div className="property-card_email">
        <a href={`mailto:${email}`}>Email</a>
      </div>
      {userId && (
        <button
          type="button"
          onClick={() => {
            onSaveProperty(_id);
          }}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
