import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import FavouriteCard from "./FavouriteCard";

const Favourites = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    axios
      .get("/Favourite?populate=propertyListing")
      .then(({ data }) =>
        data.length === 0
          ? setAlert({
              message: "No properties saved in Favourites",
              isSuccess: false,
            })
          : setFavourites(data)
      )
      .catch(() => {
        setAlert({
          message:
            "There has been a problem with the server, please try again later",
          isSuccess: false,
        });
      });
  }, [favourites]);

  const handleRemoveProperty = async (favouriteId) => {
    await axios
      .delete(`/Favourite/${favouriteId}`)
      .then(() => {
        setAlert({
          message: "Property successfully removed from Favourites",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message:
            "Unable to remove property from Favourites at the moment, please try again later",
          isSuccess: false,
        });
      });
  };

  return (
    <div className="favourites-page">
      <div>
        {alert.message && (
          <Alert message={alert.message} isSuccess={alert.isSuccess} />
        )}
      </div>
      <div className="property-card-grid">
        {favourites.map((favourite) => (
          <FavouriteCard
            key={favourite.propertyListing._id}
            _id={favourite._id}
            title={favourite.propertyListing.title}
            bedrooms={favourite.propertyListing.bedrooms}
            bathrooms={favourite.propertyListing.bathrooms}
            price={favourite.propertyListing.price}
            city={favourite.propertyListing.city}
            type={favourite.propertyListing.type}
            email={favourite.propertyListing.email}
            onRemoveProperty={handleRemoveProperty}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
