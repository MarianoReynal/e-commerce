// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtzNJj8rfEb9UJscg-kmAub4b53fEGApE",
  authDomain: "e-commerce-ae6a9.firebaseapp.com",
  projectId: "e-commerce-ae6a9",
  storageBucket: "e-commerce-ae6a9.appspot.com",
  messagingSenderId: "376613042122",
  appId: "1:376613042122:web:91d31a14a745f420504133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)