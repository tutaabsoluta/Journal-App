import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

// Registro con Google
export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    const { displayName, email, photoURL, uid } = result.user;

    await updateProfile( FirebaseAuth.currentUser, {
      displayName
    } );

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

// Registrarse con Usuario y Password
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

// Login con Email y Password. Revisa si las credenciales existen en Firebase
export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

// singInWithGoogle tiene el objeto con la info del Usuario o el objeto del error
// signInWithEmailAndPassword: se le pasan el email y password. Si no existen se retorna un error
// Obtener usuario actual de Firebase: FirebaseAuth.currentUser

// Cada una de estas funciones cambiara el estado del user