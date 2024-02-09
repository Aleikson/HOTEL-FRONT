// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "hotel-9f356.firebaseapp.com",
    projectId: "hotel-9f356",
    storageBucket: "hotel-9f356.appspot.com",
    messagingSenderId: "971184167517",
    appId: "1:971184167517:web:72320d8a09a8bf075d8bb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);