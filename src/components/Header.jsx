import React, { useEffect } from "react";
import netflixLogo from "../utils/Images/Netflix_Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { togglegpt } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    // Auth Listener should be called only once so placed in useEffect.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // SignIn / SignUp
        const uid = user.uid;
        navigate("/browse");
      } else {
        // SignOut
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Callback Function is Called When Component unMounts
    return unsubscribe;
  }, []);

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("currentuser" + auth.currentUser);
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleGptSearchClick = () => {
    dispatch(togglegpt());
  };

  return (
    <div className="absolute z-50 flex bg-gradient-to-b from-black">
      <img src={netflixLogo} alt="NetflixLogo" className="w-44" />
      <button
        className="bg-purple-700 text-white p-2 my-4 mx-4 rounded-lg"
        onClick={handleGptSearchClick}
      >
        GPT Search
      </button>
      <button onClick={signoutHandler} className="text-white cursor-pointer">
        SignOut
      </button>
    </div>
  );
};

export default Header;
