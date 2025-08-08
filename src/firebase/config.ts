// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAiszhpIbqRxfNENS2tcBF4x2e2av-nyWs",
  authDomain: "travlebd-fbc2b.firebaseapp.com",
  projectId: "travlebd-fbc2b",
  storageBucket: "travlebd-fbc2b.firebasestorage.app",
  messagingSenderId: "954241376170",
  appId: "1:954241376170:web:de609600dad30c2f87d5d3"
};

// Initialize Firebase
const app = initializeApp(config);
 const auth = getAuth(app);
 export default auth;


