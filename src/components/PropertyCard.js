import React from "react";
import "../styles/property-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="property-card">
      <div className="property-card_image">
        <img src="https://picsum.photos/300/200" alt={`${title} property`} />
      </div>
      <div className="property-card_item">{title}</div>
      <div className="property-card_item">
        <FontAwesomeIcon icon={faBed} />
        &nbsp;{bedrooms}
      </div>
      <div className="property-card_item">
        <FontAwesomeIcon icon={faBath} />
        &nbsp;&nbsp;{bathrooms}
      </div>
      <div className="property-card_item">{price}</div>
      <div className="property-card_item">{city}</div>
      <div className="property-card_item">{type}</div>
      <div className="property-card_email">
        <a className="email-link" href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp;Email
        </a>
      </div>
      {userId && (
        <button
          className="save-button"
          type="button"
          onClick={() => onSaveProperty(_id)}
        >
          <FontAwesomeIcon icon={faHeart} />
          &nbsp;Save
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
