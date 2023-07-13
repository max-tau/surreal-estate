import React, { useState } from "react";
import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Favourites from "./Favourites";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";

const App = () => {
  const [userId, setUserId] = useState("");
  const handleLogin = (response) => {
    setUserId(response.userID);
  };
  const handleLogout = () => {
    window.FB.logout(() => {
      window.location = "/";
    });
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userId={userId} />
      <Routes>
        <Route path="/" element={<Properties userId={userId} />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
