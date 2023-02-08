// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASLtn7GNMxXRvq7VwK9vZWHhDCUjdK3dw",
  authDomain: "aidan-torrence.firebaseapp.com",
  projectId: "aidan-torrence",
  storageBucket: "aidan-torrence.appspot.com",
  messagingSenderId: "986725428375",
  appId: "1:986725428375:web:ef03c180143ac2a04b8dd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
