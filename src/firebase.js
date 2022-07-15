// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGRjm4UKxC6LhQEkDF9FR4MqJa40lZi1Y",
  authDomain: "expensetrack-786a3.firebaseapp.com",
  projectId: "expensetrack-786a3",
  storageBucket: "expensetrack-786a3.appspot.com",
  messagingSenderId: "1033863621319",
  appId: "1:1033863621319:web:1d2fa14b899734544dece2",
  measurementId: "G-14B44LJ38B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
