// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3bDD7eC92V9V8SsWWMYpQ47M7qA8Xhb0",
  authDomain: "temp1-403814.firebaseapp.com",
  projectId: "temp1-403814",
  storageBucket: "temp1-403814.appspot.com",
  messagingSenderId: "605956114974",
  appId: "1:605956114974:web:60b695db50b3381e977c0f",
  measurementId: "G-H5X79KXN27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
