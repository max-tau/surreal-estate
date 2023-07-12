import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";

const Favourites = () => {
  <div>Favourites</div>;

  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    axios
      .get("/Favourite?populate=propertyListing")
      .then(({ data }) => setFavourites(data))
      .catch(() => {
        <Alert message="No properties found" isSuccess={false} />;
      });
  }, []);

  return (
    <div className="favourites-page">
      {favourites.length === 0 ? (
        <Alert message="No favourites found" success={false} />
      ) : (
        <div className="property-card-grid">
          {favourites.map((favourite) => (
            <PropertyCard
              key={favourite.propertyListing._id}
              userId={favourite.fbUserId}
              _id={favourite.propertyListing._id}
              title={favourite.propertyListing.title}
              bedrooms={favourite.propertyListing.bedrooms}
              bathrooms={favourite.propertyListing.bathrooms}
              price={favourite.propertyListing.price}
              city={favourite.propertyListing.city}
              type={favourite.propertyListing.type}
              email={favourite.propertyListing.email}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
