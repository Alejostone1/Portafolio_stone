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
  "description": "Admin web system for a real clothing store. It centralizes inventory with size and color variants, sales, supplier purchases, customer credit and financial reports.<br/><br/>It features an interactive KPI dashboard, status control, role-based user management and dynamic reports with data visualization.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": show,
        "alt": "Desktop and mobile view",
        "caption": "Desktop and mobile view"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://adiestilos-full.vercel.app",
        "caption": "Live demo",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "Inventory with product variants",
          "Sales, purchases and credit with payments",
          "Dashboard and financial reports",
          "React + Vite, Node.js, Express and Prisma"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Brand philosophy",
        "caption": "Brand philosophy"
      }
    }
  ]
} as const satisfies ProjectContent;
