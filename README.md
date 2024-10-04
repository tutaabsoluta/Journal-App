# React + Vite

- El proyecto tiene autenticacion, tiene un router principal y uno secundario, rutas protegidas y privadas. Por esto se modulariza la app
- La idea es que los modulos esten separados significativamente 

- Se comenzo creando la estructura de la aplicacion usando modulos. Tenemos dos modulos: uno de autenticacion y otro que es toda la parte que contiene el Journal
El folder theme tiene el tema de la aplicacion
El Layout es el cascaron que tendran todas mis paginas (aspecto, color, forma, etc)

Usamos la palabra Page cuando tenemos componentes que cubren toda la pantalla

- Luego de que definimos la estructura de la aplicacion procedemos a configurar el Routing
- No tendremos rutas privadas y publicas, se hara de otra manera para manejar la proteccion de rutas

**Estructura de las Rutas**
- Tenemos el AppRouter que esta en la raiz del proyecto
- En este AppRouter tenemos dos rutas:
1. Ruta auth/#: cualquier ruta que pase por auth muestra el elemento *AuthRoutes*
2. Ruta /#: cualquier ruta que pase por / muestra el elemento *JournalRoutes*

- *AuthRoutes* tiene tres rutas: una de login, una de register y un comodin
- *JournalRoutes* tiene dos rutas: una general y un redirect

- El archivo de la aplicacion *JournalApp* tiene unicamente el router principal que es *AppRouter*
- En el main usamos el componente *BrowserRouter*

-- Instalar Material UI
MUI es una peer dependency, por lo que tiene que estar instalado react para poder usarlo.
- Instalamos con npm MUI
- Usamos el CDN para la fuente
- Instalamos icons
- Luego hay que configurar MUI con Vite

- Tenemos que crear el HOC del theme y lo utilizamos para envolver la aplicacion en el componente JournalApp

-- Creamos una carpeta components dentro de Journal. Podria haber un modulo llamado UI ya que va a ser estandar en todo, pero queda a discrecion.

- Componentes de MUI utilizados: 
* Box, Appbar, Navbar, Toolbar

- Diferencia entre un Page y un View: 
Un componente es una pequena pieza de mi aplicacion
Layout es el cascaron relacionado al estilo
Pages es algo que ocupa toda la vista de la pantalla desde el punto de vista del user
Views: Un componente que ocupa cierta parte de la pantalla

**Autenticacion con Firebase**

- Para trabajar con Firebase primero se instala el paquete.
- Luego se crea un folder llamado Firebase y dentro un archivo config.js, donde exportamos los objetos que nos permitiran interactuar con Firebase.
- Seguidamente creamos un usuario en el Proyecto creado en la Web de Firebase. Usamos la cuenta de Google.
- El archivo Providers seran nuestros proveedores de autenticacion.
- La funcion signInWithGoogle se llama en el Thunk

- El AppRouter esta pendiente del status de la App. Si esta en checking renderiza un componente que muestra un spinner. Pero se deben disparar un efecto para cambiar ese checking si se esta autenticado

- Firebase tiene una forma de saber los cambios que ocurran con el usuario
onAuthStateChanged