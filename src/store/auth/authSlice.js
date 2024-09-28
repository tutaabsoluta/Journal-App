import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // checking not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null, 
        photoURL: null,
        errorMesasge: null,
    },
    reducers: {
        login: ( state, action ) => {
            
        },

        logout: ( state, payload ) => {
            
        },

        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

// Cuando se toca el boton de Login ayudara a colocar la aplicacion en un estado de loading, que sirve para deshabilitar botones, evitar dobles posteos de submit