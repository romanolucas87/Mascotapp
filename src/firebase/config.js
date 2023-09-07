// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA6derU-zlpFkOb_xvTGaaQSGeO6mqyPw",
  authDomain: "coderhouse-ecommerce-aef2c.firebaseapp.com",
  projectId: "coderhouse-ecommerce-aef2c",
  storageBucket: "coderhouse-ecommerce-aef2c.appspot.com",
  messagingSenderId: "810444860109",
  appId: "1:810444860109:web:01a052d70a6e3970bc9784"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
export const firestore =getFirestore(app);