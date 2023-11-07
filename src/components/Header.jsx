import React, { useEffect } from "react";
import netflixLogo from "../utils/Images/Netflix_Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    // Auth Listener should be called only once so placed in useEffect.
    onAuthStateChanged(auth, (user) => {
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

  return (
    <div className="w-44 bg-gradient-to-b from-black z-20 flex justify-center">
      <img src={netflixLogo} alt="NetflixLogo" />
      <button onClick={signoutHandler}>SignOut</button>
    </div>
  );
};

export default Header;
