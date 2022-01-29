// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjLVX5sBCEKNqdA_XmqZqmovApTEzSZGE",
  authDomain: "a-house-marketplace.firebaseapp.com",
  projectId: "a-house-marketplace",
  storageBucket: "a-house-marketplace.appspot.com",
  messagingSenderId: "226577368560",
  appId: "1:226577368560:web:3d82bd5752915e1d3a4935",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
