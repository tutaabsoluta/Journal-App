import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      {/* Caja que contiene el formulario */}
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2, width: { sm: 450 } }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          { title }
        </Typography>

        {/* Children */}
        { children }
      </Grid>
    </Grid>
  );
};

// Como el formulario es lo que cambia, ponemos children y el titulo cambia entonces lo pasamos via props
