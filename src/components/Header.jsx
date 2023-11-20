import React, { useEffect } from "react";
import netflixLogo from "../utils/Images/Netflix_Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import {
  addGptMoviesData,
  setGpt,
  toggleShowSuggestions,
  togglegpt,
} from "../utils/gptSlice";
import { Header_list, Supported_Languages } from "../utils/constants";
import { changeLanguage } from "../utils/langSlice";
import profileImage from "../utils/Images/netflixProfile.png";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const data = useSelector((store) => store.user.user);
  const displayName = data?.displayName;
  // console.log(userName);
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
    dispatch(addGptMoviesData({ movieNames: null, moviesInfo: null }));
    dispatch(changeLanguage("en"));
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleHomeClick = () => {
    dispatch(setGpt(false));
    dispatch(toggleShowSuggestions(false));
  };

  return (
    <div className="fixed flex justify-between bg-[#141414] w-full z-50 px-2 md:px-6 items-center py-1">
      <div className="flex text-white items-center">
        <button onClick={handleHomeClick}>
          <img
            src={netflixLogo}
            alt="NetflixLogo"
            className="w-24 md:w-32  mr-2"
          />
        </button>
        {!showGptSearch &&
          Header_list.map((item) => (
            <button
              key={item}
              className="m-2 font-medium hidden lg:inline-block hover:text-gray-400"
            >
              {item}
            </button>
          ))}
      </div>
      <div className="flex items-center ">
        {showGptSearch && (
          <select
            className="p-1 md:p-2 bg-gray-800 text-white rounded-lg mr-4 md:mr-0 "
            onChange={handleLanguageChange}
          >
            {Supported_Languages.map((lang) => (
              <option key={lang.name} value={lang.value}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className={`bg-red-700 text-white mx-2 md:mx-4 px-2  md:px-4 py-1 my-1 rounded-sm md:rounded-md hover:bg-red-500 ${
            showGptSearch ? "hidden md:block" : ""
          }`}
          onClick={handleGptSearchClick}
        >
          {!showGptSearch ? (
            <div className="flex items-center">
              <AiOutlineSearch className="text-sm md:text-xl mr-1 md:mr-2" />
              <span className="text-xs">GPT Search</span>
            </div>
          ) : (
            "HomePage"
          )}
        </button>
        <button
          onClick={signoutHandler}
          className="text-white cursor-pointer mx-1 md:mx-2 text-xs md:text-sm font-medium"
        >
          SignOut
        </button>
        <img
          src={profileImage}
          alt="image"
          className="rounded-sm w-5 md:w-7 ml-2"
        />
        <span className="text-white font-semibold px-1 text-sm md:text-md">
          {displayName}
        </span>
      </div>
    </div>
  );
};

export default Header;
