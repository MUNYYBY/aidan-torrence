import { auth } from "../Firebase/Config";
import {
  createUserWithEmailAndPassword,
  signInUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";

export async function signIn(email, password) {
  signInUserWithEmailAndPassword(auth, email, password)
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
      setDoc(doc(db, "users", email), {
        email,
        name,
        phone,
      });
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
