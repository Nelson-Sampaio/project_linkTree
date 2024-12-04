
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA-burlgAIxQYEK9QIL0cgohuG11TIjqEk",
    authDomain: "devlink-51768.firebaseapp.com",
    projectId: "devlink-51768",
    storageBucket: "devlink-51768.firebasestorage.app",
    messagingSenderId: "467632694957",
    appId: "1:467632694957:web:8112ad2bf2a62a2db7c824",
    measurementId: "G-HBCRGCZWB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
