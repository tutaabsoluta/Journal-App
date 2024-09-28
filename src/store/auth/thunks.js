import { checkingCredentials } from "./"


export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
    }
};

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}

// Es el mismo reducer porque igual ponemos la App en un estado de loading



// Acciones que puedo despachar, pero estas acciones internamente tienen una tarea asincrona