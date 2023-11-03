import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import BrowsePage from "./BrowsePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/browse",
    element: <BrowsePage />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Auth Listener should be called only once so placed in useEffect.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // SignIn / SignUp
        const uid = user.uid;
      } else {
        // SignOut
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
