// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "assignment-43425.firebaseapp.com",
  projectId: "assignment-43425",
  storageBucket: "assignment-43425.firebasestorage.app",
  messagingSenderId: "322158087338",
  appId: "1:322158087338:web:b2dabab29dfbef9cf054d3",
  measurementId: "G-Z01L1TR00J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
