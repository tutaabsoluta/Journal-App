import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        {/* Navbar */}
        <NavBar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        {/* Sidebar */}
        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
        {/* Toolbar */}
        <Toolbar />
        { children }


        </Box>

    </Box>
  )
}

// Como este componente es un Layout, espera un children
// La barra lateral siempre tendra tamano especifico. Para esto creamos una variable