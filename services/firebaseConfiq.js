//This file is used if you want to use firebase services like firestore.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_KEYAUTH_DOMAIN,
  projectId: import.meta.env.VITE_API_KEYPROJECT_ID,
  storageBucket: import.meta.env.VITE_API_KEYSTORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_API_KEYMESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_API_KEYAPP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);