import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignIn = ({ onSetUser }) => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleCreateAccount = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
      .then((userCredential) => {
        const { user } = userCredential;
        onSetUser(user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form>
      <label htmlFor="sign-in_email-input">
        Email
        <input
          onChange={handleChange}
          value={userLogin.email}
          type="email"
          name="email"
          id="sign-in_email-input"
        />
      </label>
      <label htmlFor="sign-in_password-input">
        <input
          onChange={handleChange}
          value={userLogin.password}
          type="password"
          name="password"
          id="sign-in_password-input"
        />
      </label>
      <button id="sign-in_button" type="button" onClick={handleCreateAccount}>
        Submit
      </button>
    </form>
  );
};

export default SignIn;
