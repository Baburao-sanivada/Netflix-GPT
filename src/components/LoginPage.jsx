import React, { useState } from "react";
import loginpageBgImage from "../utils/Images/loginPageBgImage.jpg";
import Header from "./Header";

const LoginPage = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSiginInForm = () => {
    setSignInForm(!isSignInForm);
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
            type="text"
            className="px-4 py-3 mb-8 bg-[#333] text-[#8c8c8c] w-full rounded-md"
            placeholder="UserName"
          />
        )}
        <input
          type="text"
          className="px-4 py-3 mb-8 bg-[#333] text-[#8c8c8c] w-full rounded-md"
          placeholder="Email"
        />
        <input
          type="password"
          className="px-4 py-3 mb-8 bg-[#333] text-[#8c8c8c] w-full rounded-md"
          placeholder="Password"
        />
        <button className="px-4 py-3 bg-red-700 w-full mb-8 rounded-md">
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
