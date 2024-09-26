import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >23 de sep, 2024 </Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 20, mr: 1 }}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un titulo"
                label='Titulo'
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Que sucedio hoy"
                minRows={ 5 }
            />
        </Grid>

        {/* Galeria */}
        <ImageGallery />
    </Grid>
  )
}

// El grid permite definir elementos internamente
