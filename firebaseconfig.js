import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAOKIu9h0OZx5-uKP7-CDMeCxyHvqVHU8Y",
    authDomain: "simpleuserregisterpage.firebaseapp.com",
    projectId: "simpleuserregisterpage",
    storageBucket: "simpleuserregisterpage.appspot.com",
    messagingSenderId: "2668094853",
    appId: "1:2668094853:web:0545604c25749b5dfe50ec",
    measurementId: "G-W3TTQC8V89"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

