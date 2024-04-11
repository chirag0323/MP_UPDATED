// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJbVwagr-SpdWCjWpgtrHKm9gVARy9S-Q",
  authDomain: "medease-e22ba.firebaseapp.com",
  projectId: "medease-e22ba",
  storageBucket: "medease-e22ba.appspot.com",
  messagingSenderId: "842599844123",
  appId: "1:842599844123:web:3da7cbdb4b1ed247deabbe",
  measurementId: "G-WPNWPSK7SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);