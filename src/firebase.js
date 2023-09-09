// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
<<<<<<< HEAD
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
=======
import { getAuth } from "firebase/auth";
>>>>>>> parent of ab2658a (Revert "added signin page")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMS3xO54ldF_cclnuRWISQe2gk3nOSLDg",
  authDomain: "note-sharing-app-8c1e0.firebaseapp.com",
  projectId: "note-sharing-app-8c1e0",
  storageBucket: "note-sharing-app-8c1e0.appspot.com",
  messagingSenderId: "734684038476",
  appId: "1:734684038476:web:9e06b3dd5c7287a2d8bbe9",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
<<<<<<< HEAD
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
=======

export const auth = getAuth(app);
>>>>>>> parent of ab2658a (Revert "added signin page")
