//This file is used if you want to use firebase services like firestore.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUQ09555mknd3Vv752oTKqZSpfhadbK4M",
  authDomain: "nuxt-fake-store.firebaseapp.com",
  projectId: "nuxt-fake-store",
  storageBucket: "nuxt-fake-store.appspot.com",
  messagingSenderId: "805950989590",
  appId: "1:805950989590:web:eef40f43bf4f490c249c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);