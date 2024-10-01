// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMi9Fk1eGBMIDcOs4KUgis-yJQaA76c34",
  authDomain: "react-cursos-44cab.firebaseapp.com",
  projectId: "react-cursos-44cab",
  storageBucket: "react-cursos-44cab.appspot.com",
  messagingSenderId: "264146228050",
  appId: "1:264146228050:web:0e9e753fe51cb5ef72608b"
};

// Initialize Firebase
// Objetos para interactuar con Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

// FirebaseAuth: funcionalidades de autenticacion

// FirebaseDB: configuracion de la BD

// Lo utilizamos para autenticacion y para almacenamiento