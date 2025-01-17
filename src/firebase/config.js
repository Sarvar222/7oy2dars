import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEuoMGeDBuTXaNn7SLTpTNnnJYFkJp598",
  authDomain: "sarvarshop-a2430.firebaseapp.com",
  projectId: "sarvarshop-a2430",
  storageBucket: "sarvarshop-a2430.firebasestorage.app",
  messagingSenderId: "660923196665",
  appId: "1:660923196665:web:7425c38817687e773c2e28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth();

// db
export const db = getFirestore();

firebase.initializeApp(firebaseConfig);
