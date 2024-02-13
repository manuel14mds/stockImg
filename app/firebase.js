
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7XZOSYjOW4q5EBmro8otmXHI33B1WYL8",
  authDomain: "visiostock-914b6.firebaseapp.com",
  projectId: "visiostock-914b6",
  storageBucket: "visiostock-914b6.appspot.com",
  messagingSenderId: "756702151552",
  appId: "1:756702151552:web:e8c35b8d86928a18ebb765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };