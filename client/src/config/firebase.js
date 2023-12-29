import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDJOQQf_lOPUfokwxnYR3iOyxpMbiYcGMc",
  authDomain: "titanium-deck-286202.firebaseapp.com",
  projectId: "titanium-deck-286202",
  storageBucket: "titanium-deck-286202.appspot.com",
  messagingSenderId: "21072412527",
  appId: "1:21072412527:web:d11f9d8a1db6b51c07329a",
  measurementId: "G-3XCJD6X57N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();