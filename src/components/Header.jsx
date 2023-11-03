import React from "react";
import netflixLogo from "../utils/Images/Netflix_Logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("currentuser" + auth.currentUser);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="w-44 bg-gradient-to-b from-black z-20 flex justify-center">
      <img src={netflixLogo} alt="NetflixLogo" />
      <button onClick={signoutHandler}>SignOut</button>
    </div>
  );
};

export default Header;
