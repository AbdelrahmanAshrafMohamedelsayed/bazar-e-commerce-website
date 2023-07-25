// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAOUyIiDeqQUcBi8wCAAQPBBgh6w4-3RL4",
  authDomain: "bazzar-f100e.firebaseapp.com",
  projectId: "bazzar-f100e",
  storageBucket: "bazzar-f100e.appspot.com",
  messagingSenderId: "1008393475946",
  appId: "1:1008393475946:web:6fc6390fc4760fb37fb713",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
