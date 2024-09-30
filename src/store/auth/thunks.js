import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./"


export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
    }
};

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )

        const result = await signInWithGoogle();
        
        if ( !result.ok ) {
            return dispatch( logout( result.errorMessage ) );
        }

        // Si todo sale bien hago un dispatch de un objeto que pase al Login
        dispatch( login( result ) )   
    }
}

// Es el mismo reducer porque igual ponemos la App en un estado de loading

// Acciones que puedo despachar, pero estas acciones internamente tienen una tarea asincrona

// el result tiene la informacion de la cuenta luego de que se clickea el btn Google. Es decir, si me autentico podemos obtener la informacion del usuario.
// Esa informacion la debemos mantener en el Store

// Cuando se da click al boton Google, en el estado cambia status por not-uthenticated por checking.
// Cuando se autentique deberia de cambiar de checking a authenticated
