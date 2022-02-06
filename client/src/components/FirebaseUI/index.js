import React from "react";
import "./style.css";
import "firebase/auth";
const firebase = require("firebase");
const firebaseui = require("firebaseui");
const { signup } = useAuth();

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function FirebaseAuth() {
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  return <div></div>;
}

export const auth = app.auth();
export default FirebaseAuth;
