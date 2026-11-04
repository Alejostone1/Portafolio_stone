import show from "../../../assets/images/projects/market_ucp-showcase.webp";
import seccion from "../../../assets/images/projects/market_ucp-seccion.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Market UCP",
  "theme": "dark",
  "tags": [
    "next",
    "typescript",
    "prisma",
    "postgresql",
    "socketio"
  ],
  "live": "https://market-ucp.vercel.app",
  "source": "https://github.com/Alejostone1/Market_ucp",
  "videoBorder": true,
  "description": "Plataforma de comercio digital para la comunidad de la Universidad Católica de Pereira: estudiantes, docentes y personal pueden publicar, comprar, vender e intercambiar dentro del campus.<br/><br/>Incluye roles de usuario, chat en tiempo real entre comprador y vendedor, favoritos, reportes de publicaciones y un panel de administración con gestión de usuarios.",
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
        "src": "https://market-ucp.vercel.app",
        "caption": "Demo en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "Arquitectura multi-rol (usuario, vendedor, administrador)",
          "Chat en tiempo real con Socket.io",
          "Favoritos, reportes y moderación",
          "Next.js 15, Prisma y PostgreSQL en Neon"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Publicaciones destacadas",
        "caption": "Publicaciones destacadas"
      }
    }
  ]
} as const satisfies ProjectContent;
