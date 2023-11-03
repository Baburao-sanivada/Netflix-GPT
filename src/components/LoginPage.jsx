import React, { useRef, useState } from "react";
import loginpageBgImage from "../utils/Images/loginPageBgImage.jpg";
import Header from "./Header";
import { validateEmail, validatePassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  // Data In input fields Accessed using useRef Hook
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  // State Variable for toggling signin/signUp form
  const [isSignInForm, setSignInForm] = useState(true);

  // Toggle signin/signup
  const toggleSiginInForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  // Clicked on signin/signUp
  const handleSubmit = () => {
    // Setting Initial Value to Null to avoid same error message when resubmitted the data
    setErrorMessage(null);

    console.log(email?.current?.value);
    console.log(password?.current?.value);

    if (!validateEmail(email?.current?.value)) {
      setErrorMessage("Invalid Email ID");
    } else if (!isSignInForm && !validatePassword(password?.current?.value)) {
      setErrorMessage(
        "Invalid Password. Password must contain a special character,Capital letter,Small letter"
      );
    } else {
      // No Errors
      if (!isSignInForm) {
        // Signing up
        createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessagefirebase = error.message;
            if (
              errorMessagefirebase ===
              "Firebase: Error (auth/email-already-in-use)."
            ) {
              setErrorMessage("Email is Already Registered");
            } else {
              setErrorMessage(errorMessagefirebase);
            }
          });
      } else {
        // Signing In
        signInWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessagefirebase = error.message;
            if (
              errorMessagefirebase ===
              "Firebase: Error (auth/invalid-login-credentials)."
            ) {
              setErrorMessage("Invalid Login Credentials");
            } else {
              setErrorMessage(errorMessagefirebase);
            }
          });
      }
    }
  };
  return (
    <div>
      {/* Logo */}
      <Header />

      {/* Backgorund Image */}
      <div className="absolute">
        <img src={loginpageBgImage}></img>
      </div>

      {/* Sign Up/Sign In Form */}
      <form
        className="w-4/12 absolute bg-black mt-28 mx-auto left-0 right-0 py-12 px-14 text-white bg-opacity-90 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl mb-8 font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={username}
            type="text"
            className="px-4 py-3 mb-8 bg-[#333] text-[#8c8c8c] w-full rounded-md"
            placeholder="UserName"
          />
        )}
        <input
          ref={email}
          type="text"
          className="px-4 py-3 mb-8 bg-[#333] text-[#8c8c8c] w-full rounded-md"
          placeholder="Email"
        />
        <input
          ref={password}
          type="password"
          className="px-4 py-3 mb-8 bg-[#333] text-[#8c8c8c] w-full rounded-md"
          placeholder="Password"
        />
        {/* Error Message */}
        <p className="mb-4 text-red-600">{errorMessage}</p>
        <button
          className="px-4 py-3 bg-red-700 w-full mb-8 rounded-md"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-[#8c8c8c] mb-12">
          {isSignInForm ? "New to Netflix ? " : "Already Registered ? "}
          <button className="text-white" onClick={toggleSiginInForm}>
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
