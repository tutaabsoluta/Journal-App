import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';



export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        
        onAuthStateChanged( FirebaseAuth, async( user ) => {
        
        // Si no hay un usuario se ejecuta logout
        if ( !user ) return dispatch( logout() );

        const { uid, email, displayName, photoURL } = user;

        // Despachamos la funcion de logeo si el usuario existe
        dispatch( login({ uid, email, displayName, photoURL }) );
        })
    }, []);

    return status;
}

// Si el user no existe despachamos el logout.
// La funcion regresa un observable. Es una funcion que esta emitiendo valores. Cuando el estado de la autenticacion cambia la funcion se vuelve a disparar. Usualmente se limpia pero en este caso no

// La funcion que se ejecuta luego del Auth es el callback que se va a estar ejecutando cuando se reciba el siguiente valor

