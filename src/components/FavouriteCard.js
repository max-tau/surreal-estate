import React from "react";
import "../styles/favourite-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faEnvelope,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

const FavouriteCard = ({
  _id,
  title,
  bedrooms,
  bathrooms,
  price,
  city,
  type,
  email,
  onRemoveProperty,
}) => {
  return (
    <div className="favourite-card">
      <div className="favourite-card_image">
        <img src="https://picsum.photos/300/200" alt={`${title} property`} />
      </div>
      <div className="favourite-card_item">{title}</div>
      <div className="favourite-card_item">
        <FontAwesomeIcon icon={faBed} />
        &nbsp;{bedrooms}
      </div>
      <div className="favourite-card_item">
        <FontAwesomeIcon icon={faBath} />
        &nbsp;&nbsp;{bathrooms}
      </div>
      <div className="favourite-card_item">{price}</div>
      <div className="favourite-card_item">{city}</div>
      <div className="favourite-card_item">{type}</div>
      <div className="favourite-card_email">
        <a className="favourite-card_email-link" href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp;Email
        </a>
      </div>
      <button
        className="save-button"
        type="button"
        onClick={() => onRemoveProperty(_id)}
      >
        <FontAwesomeIcon icon={faHeartBroken} />
        &nbsp;Remove
      </button>
    </div>
  );
};

export default FavouriteCard;
