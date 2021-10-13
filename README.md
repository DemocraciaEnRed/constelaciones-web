<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

# Constelaciones Web

> Desarrollada utilizando [Gatsby](https://www.gatsbyjs.org/) v3, framework basado en React, y [Bulma](https://bulma.io/), framework de CSS basado en Flexbox.

## 🚀 Quick start


### Para correr la aplicación:

1. Asegurarnos de tener utilizar la versión correcta de Node. Requiere, como minimo, NodeJS 12.x (Tambien funciona con node 14.x)
```bash
nvm use v12.22.3
```

2. Instalar dependencias del proyecto
```bash
npm install
```

4. Levantar en modo desarrollo (actualiza los cambios automáticamente)
```bash
npm run develop
```
Se disponibiliza el sitio en [http://localhost:8000/](http://localhost:8000/)

5. Generar build productivo*
```bash
npm run  build
```
Genera archivos estáticos dentro de la carpeta `build`

> Se aconseja ejecutar `gatsby clean` previo a generar build productivo que limpia cache de gatsby

6. Para probar el build productivo:
```bash
npm run  serve
```
Se disponibiliza el sitio en [http://localhost:9000/](http://localhost:9000/)

En la carpeta `content` se encuentran los textos en formato .json de la landing para facilitar su edición.

### Github Pages deploy

Siempre corroborar que el build es correcto. Para eso hacer `npm run build` y puego `npm run serve` para testear.

Cuando el build haya sido correcto, se hace el deploy en la branch `gh-pages` del contenido de la carpeta `/public`

Simplemente hay que correr `npm run deploy` que hará el build y luego el deploy en la branch `gh-pages`

La página es hosteada por Github Pages: [https://constelaciones.co](https://constelaciones.co)

Mas informacion: [https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)

---

####  Gatsby v3

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
