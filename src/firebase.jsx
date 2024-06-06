// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIQAZOc_5CrtrIgXKi1g29mlvPRvqPdIw",
  authDomain: "netflixclone-769d8.firebaseapp.com",
  projectId: "netflixclone-769d8",
  storageBucket: "netflixclone-769d8.appspot.com",
  messagingSenderId: "813639146255",
  appId: "1:813639146255:web:0701870b4aba87fb54fc7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app)
