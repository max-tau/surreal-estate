import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: `${searchTerm}` },
    });
    navigate(newQueryString);
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="sidebar">
      <form className="sidebar-search" onSubmit={handleSearch}>
        <input
          type="text"
          className="sidebar-search-input"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <button className="sidebar-search-button" type="submit">
          <img
            className="search-icon"
            src="https://cdn-icons-png.flaticon.com/128/3308/3308543.png"
            alt="search icon"
          />
        </button>
      </form>
      <h3 className="sidebar-heading">Filter by city</h3>
      <ul className="sidebar-links">
        <li>
          <Link
            className="sidebar-links-item"
            to={buildQueryString("query", { city: "Manchester" })}
          >
            Manchester
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-links-item"
            to={buildQueryString("query", { city: "Leeds" })}
          >
            Leeds
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-links-item"
            to={buildQueryString("query", { city: "Sheffield" })}
          >
            Sheffield
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-links-item"
            to={buildQueryString("query", { city: "Liverpool" })}
          >
            Liverpool
          </Link>
        </li>
      </ul>
      <h3 className="sidebar-heading">Sort By</h3>
      <ul className="sidebar-links">
        <li>
          <Link
            className="sidebar-links-item"
            to={buildQueryString("sort", { price: 1 })}
          >
            Price ascending
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-links-item"
            to={buildQueryString("sort", { price: -1 })}
          >
            Price descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
