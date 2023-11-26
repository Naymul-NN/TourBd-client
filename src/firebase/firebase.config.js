// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe2jCcdI5bOyr9rhkIbtL7wBHJO2sRBbY",
  authDomain: "tourbd-8344b.firebaseapp.com",
  projectId: "tourbd-8344b",
  storageBucket: "tourbd-8344b.appspot.com",
  messagingSenderId: "82084819212",
  appId: "1:82084819212:web:d65f02400112043de19929"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;