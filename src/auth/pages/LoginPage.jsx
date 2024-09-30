import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth )

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: 'sergio@mail.com',
    password: '123456'
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = ( e ) => {
    e.preventDefault();
    
    dispatch( checkingAuthentication( email, password ) );
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn( email, password ));
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          {/* Buttons */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                variant="contained" 
                fullWidth 
                type="submit"
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                variant="contained" 
                fullWidth 
                onClick={ onGoogleSignIn }
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

// Grid es similar a un div pero tiene propiedades interesantes
// Con sx tenemos acceso al tema con nuestro ThemeProvider
// xs={ 3 }: en tamanos xs toma 3 posiciones
// sx: style extended: tenemos acceso al tema que definimos en el themeProvider
// Cuando usamos fullWidth para que ocupe todo el tamano debemos darle un tamano al Grid

// Estamos usando RRD, entonces para navegar debemos usar el componente Link, pero MUI debe saber como quiero que luzcan los links.
