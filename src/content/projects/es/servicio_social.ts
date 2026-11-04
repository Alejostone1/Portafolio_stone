import show from "../../../assets/images/projects/servicio_social-showcase.webp";
import seccion from "../../../assets/images/projects/servicio_social-seccion.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Servicio Social UCP",
  "theme": "dark",
  "tags": [
    "next",
    "typescript",
    "prisma",
    "postgresql",
    "tailwind"
  ],
  "live": "https://ucp-servicio-social.vercel.app",
  "source": "https://github.com/Alejostone1/Serviciosocial_ucp",
  "videoBorder": true,
  "description": "Sistema web para gestionar el servicio social de la Universidad Católica de Pereira de principio a fin: convocatorias, postulaciones, registro y aprobación de horas, certificados y noticias.<br/><br/>Tiene roles para administrador, profesor, auxiliar, aliado y estudiante, cada uno con su panel. Autenticación con NextAuth y base de datos PostgreSQL con Prisma.<br/><br/><b>Cuenta demo:</b> estudiante1@ucp.edu.co · Ucpservicio123",
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
        "src": "https://ucp-servicio-social.vercel.app",
        "caption": "Demo en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "5 roles con paneles propios",
          "Convocatorias y postulaciones",
          "Reporte y aprobación de horas",
          "Certificados con código QR",
          "Next.js 14, NextAuth, Prisma y PostgreSQL"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Convocatorias y procesos",
        "caption": "Convocatorias y procesos"
      }
    }
  ]
} as const satisfies ProjectContent;
