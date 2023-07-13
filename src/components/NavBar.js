import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import "../styles/navbar.css";

const NavBar = ({ onLogin, userId, onLogout }) => {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="Surreal Estate logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="navbar-links-item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-item" to="/add-property">
            Add a Property
          </Link>
        </li>
        {userId ? (
          <li className="navbar-links-item">
            <Link className="navbar-links-item" to="/favourites">
              View Favourites
            </Link>
          </li>
        ) : null}
      </ul>
      {userId ? (
        <button className="navbar-signout" type="submit" onClick={onLogout}>
          Sign out
        </button>
      ) : (
        <div className="navbar-login">
          <Link className="navbar-links-auth" to="/create-account">
            Create Account
          </Link>
          <Link className="navbar-links-auth" to="/sign-in">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
