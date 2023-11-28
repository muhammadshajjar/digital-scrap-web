// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYzySfrxdjfAyUiiAREV7VtF-tX1xiC_8",
  authDomain: "digital-scrap-dc471.firebaseapp.com",
  projectId: "digital-scrap-dc471",
  storageBucket: "digital-scrap-dc471.appspot.com",
  messagingSenderId: "1018730329907",
  appId: "1:1018730329907:web:9fdaabfb871e26b8947046",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service

export const storage = getStorage(app);
