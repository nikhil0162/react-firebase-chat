// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-2f3a6.firebaseapp.com",
  projectId: "reactchat-2f3a6",
  storageBucket: "reactchat-2f3a6.appspot.com",
  messagingSenderId: "648002707733",
  appId: "1:648002707733:web:44807270af2ce0f6fd091c",
  measurementId: "G-FVQQYDCS0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()