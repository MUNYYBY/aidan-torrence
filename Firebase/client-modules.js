import { auth, db } from "./Config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import axios from "axios";

export async function SignIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error;
      // ..
    });
}

export async function CreateAccount(email, password, name, phone) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      try {
        setDoc(doc(db, "users", email), {
          email,
          name,
          phone,
        });
        axios.post("/api/twilio/send-message", {
          phone: phone,
          message: `Hello ${name}, Welcome to Our Company!`,
        });
        console.log("User Logged registered: ", user);
        return user;
      } catch (error) {
        console.log("Error while adding to db: ", error);
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error;
      // ..
    });
}
