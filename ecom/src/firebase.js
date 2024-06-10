// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_PBw8ezQJxQhohBUlRZFymvt0PsLH3z4",
  authDomain: "ecomapp-d3955.firebaseapp.com",
  projectId: "ecomapp-d3955",
  storageBucket: "ecomapp-d3955.appspot.com",
  messagingSenderId: "917065860199",
  appId: "1:917065860199:web:68e0c35087a9224f6a80c2",
  measurementId: "G-6W300NGV97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
