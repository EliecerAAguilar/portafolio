# Secciones 📚

✔️ Resumen y << sobre mi >>\
✔️ Hablidades \
✔️ Proyectos Open source conectados a GitHub\
✔️ Experiencia\
✔️ Certificaciones 🏆\
✔️ Blogs\
✔️ Educacion\
✔️ Contactarme \

# Clonar y Usar 📋

- El sitio web está completamente construido en `react-js` biblioteca de `javascript` y es por eso que necesitamos `nodejs` y `npm` instalado
- Al instalar `nodejs` y `npm`, intenta instalar versiones que sean iguales o superiores a las versiones mencionadas en las insignias de arriba.
- En caso de que quieras ayudar a desarrollarlo o simplemente guardarlo, puedes hacer un fork del repositorio simplemente pulsando el botón en la esquina superior derecha de esta página
- Después de la instalación exitosa de `nodejs` y `npm`, clona el repositorio en tu sistema local usando el siguiente comando

  ```bash
   git clone https://github.com/ashutosh1919/masterPortfolio.git
  ```

  Esto clonará todo el repositorio en su sistema.

- Para descargar las dependencias necesarias en su sistema, vaya al directorio donde reside el repositorio clonado y ejecute el siguiente comando:
  ```node
  npm install
  ```
- Ahora el proyecto está listo para usar
- Puedes comprobarlo usando `npm start`, abrirá el sitio web localmente en tu navegador.

# Como modificar este proyecto ✏️

En este proyecto, hay básicamente 4 cosas que usted necesita cambiar para personalizar esto a la cartera de cualquier otra persona: **package.json**, **Información personal**, **Información de Github** y **Logotipo de Splash**.

### package.json

Abre este archivo, que está en el directorio principal clonado, elige cualquier "nombre" y cambia "homepage " a `https://<tu-nombre-deusuario-github>.github.io`. No olvides el `https://`, de lo contrario las fuentes no se cargarán.

### Informacion personal

Encontrará el archivo `src/portfolio.js` que contiene la información completa sobre el usuario. El archivo se ve algo como lo siguiente:

```javascript
// Home Page
const greeting = {
    ...
}

// Social Media
const socialMediaLinks = {
    ...
}

...
```

Puedes cambiar la información personal, experiencia, educación, redes sociales, certificaciones, información del blog, información de contacto, etc. en `src/portfolio.js` para reflejarlos directamente en el sitio web del portafolio.

### como cambiar los iconos de la pagina de inicio y la seccion de << que hago? >>

1. Esta sección extrae datos de `skills` en el archivo portfolio.js.
2. Visite este sitio web: https://icon-sets.iconify.design/
3. Busca la habilidad que quieres añadir.
4. Selecciona el icono de tu elección.
5. Copia el texto al lado de **Icono seleccionado** y sustitúyelo por `fontAwesomeClassName` de ese softwareSkill en particular.

### Información de Github

Encontrará el archivo `git_data_fetcher.mjs` en el directorio principal del repositorio. Este archivo se utiliza para obtener los datos (Pull requests, Issues, Organizations, Pinned projects etc.) de tu github.

En el proyecto verás un archivo `env.example`, crea un nuevo archivo llamado `.env` y copia el contenido de `env.example` en él. En ese archivo, verá las siguientes variables de entorno

```javascript
GITHUB_TOKEN = su_token;
GITHUB_USERNAME = su_nombre_de_usuario;
```

Puedes obtener un token de github como se describe [aquí](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Da todos los permisos mientras generas el token. Añade tu nombre de usuario de github y el token generado en las variables `GITHUB_USERNAME` y `GITHUB_TOKEN` en el archivo .env.
Ahora, necesitas ejecutar el siguiente comando. (Asegúrate de haber ejecutado `npm install` antes de esto)
**Atención:** Trata tus tokens como contraseñas y mantenlos en secreto. Cuando trabajes con la API, usa los tokens como variables de entorno en lugar de codificarlos en tus programas.

```node
node git_data_fetcher.mjs
```

Esto obtendrá todos los datos de tu github y automáticamente reemplazará mis datos con los tuyos.
Cada vez que desee actualizar la información relacionada con github en el sitio web que usted necesita para ejecutar este comando.

### Splash Logo

Tenga en cuenta aquí que si hace clic en [mi portafolio](https://ashutosh1919.github.io), se puede ver la animación del logotipo al principio. He diseñado ese logo en [`Figma`](https://www.figma.com/) y luego lo he animado usando css.
Por lo tanto, esta parte del portafolio no es personalizable. Pero no te preocupes, tenemos una solución para este problema. A continuación tienes dos alternativas:

- Si quieres diseñar tu propio logo, entonces puedes diseñarlo usando `Figma` o `Adobe XD` o `Adobe Illustrator` o `Inkscape`. Si quieres animarlo, puedes referirte al directorio `./src/components/Loader` que contiene archivos `js` y `css` que animan el logo.
- Si no quieres Splash screen o no sabes como diseñar el logo, entonces esta opción es para ti

  - Puede abrir el archivo `src/portfolio.js` y en la parte superior de este archivo verá el componente `settings` como se muestra a continuación:
    ```javascript
    // Website related settings
    const settings = {
      isSplash: true,
    };
    ```
  - Cambiar `isSplash` de `true` a `false`.
  - Ahora, si ves tu web usando `npm start`, se abrirá directamente `home` en lugar de animar la pantalla del logo `splash
  - Si usted diseña su logotipo en el futuro, a continuación, editar los archivos en `./src/components/Loader` y luego revertir `isSplash` a `true` en `src/portfolio.js`.

## Otros

- Necesitas cambiar el título del sitio web y otras descripciones en `public/index.html`.
- Puedes definir tu propio favicon en el directorio `public/icons`. Si no tienes un favicon, puedes generar favicons desde [Favicon Generator](https://www.favicon-generator.org/) y [Favicon IO](https://favicon.io/)
- También puedes editar la vista previa de tu sitio web (conocida como imagen de descripción). Ejecuta tu sitio localmente, haz una captura de pantalla y sustitúyela por `public/icons/desc.png`. Tenga en cuenta que su captura de pantalla debe ser 1280x640 para una mejor vista previa.

# Elegir tema 🌈

- Puedes echar un vistazo al archivo `src/theme.js` donde se mencionan todos los temas disponibles con sus respectivos códigos de color.
- En la parte inferior de este archivo verás el siguiente código:
  - `export const chosenTheme = blueTheme;`
  - Es necesario cambiar el nombre de `blueTheme` a cualquier tema que desea establecer su sitio web a
  - Puedes definir un nuevo tema de forma similar a otros temas y puedes asignar el nombre de ese nuevo tema definido a `chosenTheme`.
- Eso es todo. Sólo tienes que cambiar el nombre del tema y el código se encargará de todo lo demás
- Ejecuta `npm start` para comprobar que todo está bien.

# Deployment 📦

- ¡Una vez que haya terminado con su configuración y han completado con éxito todos los pasos anteriores, usted necesita para poner su sitio web en línea!
- Recomiendo encarecidamente el uso de [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) para lograr esto de la MANERA MÁS FÁCIL.
- Para desplegar tu sitio web, tienes dos opciones. Primero necesitas crear un repositorio github con el nombre `<tu-nombre-deusuario-github>.github.io`. Por favor, no le des ningún otro nombre.
- Ahora, usted necesita para generar una producción de construir y desplegar el sitio web.

\*\*Opción 1

- Ejecuta `npm run build` para generar la carpeta de producción.
- Entra en la carpeta de construcción, `git init` y empuja el código generado a la rama `master` de tu nuevo repositorio en github. Y ya está. Ya está hecho.
- Puede que necesites hacer `git init` y forzar el push en cada nueva compilación.

**Opción 2 (no funcionará con [páginas de usuario](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)):**

- Ejecuta `npm run deploy` para construir y crear una rama llamada `gh-pages`. Esto empujará los archivos `build` a esa rama.
- El último paso en el despliegue es habilitar `Github Pages` en la configuración del repositorio y seleccionar la rama `gh-pages`.

Ahora, tu sitio web se ha desplegado correctamente y puedes visitarlo en `<usuario-de-github>.github.io`.  
Si estás atascado en alguna parte y quieres observar el proceso de despliegue en profundidad, entonces por favor mira el siguiente video.

# Tecnoloogias utilizadas 🛠️

- [React](https://reactjs.org/)
- [Graphql](https://graphql.org/)
- [Apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [Baseui](https://github.com/uber/baseweb)
- [React-reveal](https://www.react-reveal.com/)
- [Styled-components](https://styled-components.com/)

# Ilustraciones 🍥

- [UnDraw](https://undraw.co/illustrations)

# Licensia 📄

Este proyecto está bajo la Licencia MIT - consulte el archivo [LICENSE.md](./LICENSE) para más detalles.

# Referencias 👏🏻

- Algunas ideas de diseño e implementación están tomadas de [Saad Pasta's Portfolio Project](https://github.com/saadpasta/developerFolio).
- El logotipo de MasterPortfolio está inspirado en [prettier-logo](https://github.com/prettier/prettier-logo) para [prettier](https://github.com/prettier/prettier) diseñado por @ianstormtaylor.
