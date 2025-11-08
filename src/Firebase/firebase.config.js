// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB3KlNWPvBzTAUndHpovenJ8vBGT2h2DIA",
  authDomain: "game-lab-fc53f.firebaseapp.com",
  projectId: "game-lab-fc53f",
  storageBucket: "game-lab-fc53f.firebasestorage.app",
  messagingSenderId: "400922401287",
  appId: "1:400922401287:web:ff7f6b47fb64f232fd68a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);