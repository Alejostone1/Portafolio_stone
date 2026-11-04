import show from "../../../assets/images/projects/adi_estilos-showcase.webp";
import seccion from "../../../assets/images/projects/adi_estilos-seccion.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Adi Estilos",
  "theme": "dark",
  "tags": [
    "react",
    "vite",
    "nodejs",
    "express",
    "prisma"
  ],
  "live": "https://adiestilos-full.vercel.app",
  "source": "https://github.com/Alejostone1/Adiestilos_Full",
  "videoBorder": true,
  "description": "Sistema web administrativo para una tienda de ropa real. Centraliza inventario con variantes de talla y color, ventas, compras a proveedores, créditos de clientes y reportes financieros.<br/><br/>Tiene un dashboard interactivo con indicadores, control de estados, gestión de usuarios por rol y reportes dinámicos con visualización de datos.",
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
        "src": "https://adiestilos-full.vercel.app",
        "caption": "Demo en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "Inventario con variantes de producto",
          "Ventas, compras y créditos con abonos",
          "Dashboard y reportes financieros",
          "React + Vite, Node.js, Express y Prisma"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Filosofía de la marca",
        "caption": "Filosofía de la marca"
      }
    }
  ]
} as const satisfies ProjectContent;
