
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear una cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          {/* Buttons */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
          <Typography variant="" sx={{ mr:1 }}>Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Iniciar Sesion
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
