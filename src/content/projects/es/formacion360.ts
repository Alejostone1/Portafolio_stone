import show from "../../../assets/images/projects/formacion360-showcase.webp";
import seccion from "../../../assets/images/projects/formacion360-seccion.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Formación 360",
  "theme": "dark",
  "tags": [
    "next",
    "typescript",
    "express",
    "postgresql",
    "tailwind"
  ],
  "live": "https://formation360.vercel.app",
  "source": "https://github.com/Alejostone1/Formation360",
  "videoBorder": true,
  "description": "Plataforma educativa completa: los estudiantes activan cursos con un código, avanzan por módulos y videos, y obtienen su certificado al terminar. El administrador gestiona categorías, cursos, videos, usuarios y certificados, y ve estadísticas de actividad.<br/><br/>Frontend en Next.js y backend en Express. Lo migré de MySQL a PostgreSQL (Supabase) y los archivos se guardan en Vercel Blob.<br/><br/><b>Cuenta demo:</b> estudiante@formacion360.co · Estudiante360",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": show,
        "alt": "Vista en computador y celular",
        "caption": "Vista en computador y celular"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://formation360.vercel.app",
        "caption": "Demo en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "Cursos por módulos y videos con progreso",
          "Activación de cursos por código",
          "Certificados verificables por código",
          "Panel de administración con estadísticas",
          "Next.js 14, Express, PostgreSQL y Vercel Blob"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Por qué Formación 360",
        "caption": "Por qué Formación 360"
      }
    }
  ]
} as const satisfies ProjectContent;
