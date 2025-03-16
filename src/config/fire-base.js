import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1AaOeYgvsKD_J-iPfan4QGA2kZjntqPI",
  authDomain: "shweta-project-d11bf.firebaseapp.com",
  databaseURL: "https://shweta-project-d11bf-default-rtdb.firebaseio.com",
  projectId: "shweta-project-d11bf",
  storageBucket: "shweta-project-d11bf.firebasestorage.app",
  messagingSenderId: "1091779913401",
  appId: "1:1091779913401:web:a4e7770a466d613849dd68",
  measurementId: "G-1PNYCGJS6L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();