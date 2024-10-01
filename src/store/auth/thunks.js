import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./"


export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

// Funcion disparada al tocar el Btn de Google
export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
      // Mostrar mensaja de Checking
        dispatch( checkingCredentials() )

        // result tiene los datos de la cuenta de google
        const result = await signInWithGoogle();
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
        // delete result.ok

        // Si todo es correcto, a la accion login le pasamos el objeto de la cuenta de google
        dispatch( login( result ) )   
    }
}

// Es el mismo reducer porque igual ponemos la App en un estado de loading

// Acciones que puedo despachar, pero estas acciones internamente tienen una tarea asincrona

// el result tiene la informacion de la cuenta luego de que se clickea el btn Google. Es decir, si me autentico podemos obtener la informacion del usuario.
// Esa informacion la debemos mantener en el Store

// Cuando se da click al boton Google, en el estado cambia status por not-uthenticated por checking.
// Cuando se autentique deberia de cambiar de checking a authenticated
