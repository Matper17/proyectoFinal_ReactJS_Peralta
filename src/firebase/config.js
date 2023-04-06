// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6UfP_JuT2dt6WUJWLxDGkLxQys72kLBY",
  authDomain: "rjs-proyecto.firebaseapp.com",
  projectId: "rjs-proyecto",
  storageBucket: "rjs-proyecto.appspot.com",
  messagingSenderId: "764453740283",
  appId: "1:764453740283:web:732ad4e1239b3df3211a5e",
  measurementId: "G-RHH98Z8VXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider()