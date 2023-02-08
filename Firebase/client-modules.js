import { auth, db } from "./Config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import axios from "axios";
import { toast } from "react-toastify";

export async function SignIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      toast.success("You have been Logged successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //   console.log(error.code, errorMessage);
      toast.error(errorCode, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
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
        toast.success("You have been registered successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
        });
        // console.log("User Logged registered: ", user);
        return user;
      } catch (error) {
        console.log("Error while adding to db: ", error);
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
      return error;
      // ..
    });
}
