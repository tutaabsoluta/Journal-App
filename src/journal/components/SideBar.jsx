import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box 
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >

        <Drawer
            variant="permanent" // temporary si lo quisieramos ocultar
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
             }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Sergio Duran
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={ text } secondary={'Cosas que podrian pasar pero que nunca pasaron'} />
                                    </Grid>
                            </ListItemButton>
                        </ListItem>
                    ) )
                }
            </List>

        </Drawer>

    </Box>
  )
}
