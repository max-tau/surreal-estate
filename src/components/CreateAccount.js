import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const CreateAccount = () => {
  const handleCreateAccount = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form>
      <label htmlFor="create-account_email-input">
        Email
        <input
          type="email"
          name="create-account_email-input"
          id="create-account_email-input"
        />
      </label>
      <label htmlFor="create-account_password-input">
        <input
          type="password"
          name="create-account_password-input"
          id="create-account_password-input"
        />
      </label>
      <button type="submit" onClick={handleCreateAccount}>
        Submit
      </button>
    </form>
  );
};

export default CreateAccount;
