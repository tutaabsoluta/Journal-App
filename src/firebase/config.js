// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMi9Fk1eGBMIDcOs4KUgis-yJQaA76c34",
  authDomain: "react-cursos-44cab.firebaseapp.com",
  projectId: "react-cursos-44cab",
  storageBucket: "react-cursos-44cab.appspot.com",
  messagingSenderId: "264146228050",
  appId: "1:264146228050:web:0e9e753fe51cb5ef72608b"
};

// Objetos para interactuar con Firebase
// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );