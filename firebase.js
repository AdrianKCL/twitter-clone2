// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWF1jzMFjOAy3VbVLaDaIJVBeSsef0EQQ",
  authDomain: "twitter-clone-c679e.firebaseapp.com",
  projectId: "twitter-clone-c679e",
  storageBucket: "twitter-clone-c679e.appspot.com",
  messagingSenderId: "1032880403701",
  appId: "1:1032880403701:web:fc2edc0e17b8e9dbe8c1bc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
