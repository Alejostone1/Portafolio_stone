# Portafolio 3D · Alejandro Piedrahita

Portafolio personal interactivo en 3D con mis proyectos reales.

**Ver en vivo:** https://alejostone.vercel.app

Hecho con **Vue 3**, **TypeScript** y **Vite**. La escena 3D usa **three.js** y shaders GLSL, las animaciones **GSAP** y **Lenis**, y el audio **Howler**. Está en español e inglés.

## Proyectos incluidos

| Proyecto | Demo |
|---|---|
| ElectroLab 3D | https://electrolab3d.vercel.app |
| Market UCP | https://market-ucp.vercel.app |
| Atacknimal | https://atacknimal.vercel.app |
| Adi Estilos | https://adiestilos-full.vercel.app |
| Formación 360 | https://formation360.vercel.app |
| Servicio Social UCP | https://ucp-servicio-social.vercel.app |
| Forja & Temple | https://ley-enfriamiento.vercel.app |
| TurnosControl | https://turnos-control.vercel.app |
| Reptil Kombat | https://reptilkombat.vercel.app |
| MatheRest | https://mathe-rest.vercel.app |
| DesarPro | https://github.com/Alejostone1/Desarpro |

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en el puerto **3000** |
| `npm run build` | Revisa tipos con `vue-tsc` y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión de producción |

## Cómo agregar o editar un proyecto

1. Agrega el id en `src/content/projects/index.ts` (`projectIds`).
2. Crea el contenido en `src/content/projects/es/<id>.ts` y `src/content/projects/en/<id>.ts`.
3. Agrega la tarjeta en `src/content/projects/previews/es.ts` y `previews/en.ts`.
4. Pon la miniatura en `src/assets/thumbnails/<id>.webp` (1080×608) y las imágenes en `src/assets/images/projects/`.

Cada proyecto puede mostrar `media` de tipo `image`, `video` o `embed` (vista previa en vivo de la demo).

## Despliegue

Está conectado a Vercel: cada push a `main` se publica automáticamente en https://alejostone.vercel.app.

## Créditos y atribución

Este portafolio está construido sobre **portfolio-2025**, creado y diseñado por **David Heckhoff**. La escena 3D, el personaje, el diseño y la base del código son de su autoría; el contenido, los proyectos y los textos son míos.

- Portafolio original: https://david-hckh.com
- Repositorio original: https://github.com/davidhckh/portfolio-2025
- Uso personal y educativo según [license.md](license.md). Se mantiene el crédito visible en el pie de página.

Música producida por [HM Surf](https://soundcloud.com/hmsurf).
