import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const CreateAccount = ({ onSetUser }) => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleCreateAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        const { user } = userCredential;
        onSetUser(user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form>
      <label htmlFor="create-account_email-input">
        Email
        <input
          onChange={handleChange}
          value={newUser.email}
          type="email"
          name="email"
          id="create-account_email-input"
        />
      </label>
      <label htmlFor="create-account_password-input">
        <input
          onChange={handleChange}
          value={newUser.password}
          type="password"
          name="password"
          id="create-account_password-input"
        />
      </label>
      <button
        id="create-user_button"
        type="button"
        onClick={handleCreateAccount}
      >
        Submit
      </button>
    </form>
  );
};

export default CreateAccount;
