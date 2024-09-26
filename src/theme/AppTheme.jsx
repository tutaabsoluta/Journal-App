import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./purpleTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}

// En lugar de usar el  Componente App, usamos el children, que sera el App.
// HOC: Un componente que tiene otros componentes como hijos, y los renderiza.