import img0 from "../../../assets/images/projects/desarpro-banner.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "DesarPro",
  "theme": "dark",
  "tags": [
    "react",
    "nodejs",
    "prisma",
    "postgresql"
  ],
  "live": "https://github.com/Alejostone1/Desarpro",
  "source": "https://github.com/Alejostone1/Desarpro",
  "videoBorder": true,
  "description": "DesarPro es la empresa de desarrollo de software que cofundé en Pereira. Hacemos software a medida, apps móviles, plataformas SaaS y soluciones de IA, ciberseguridad e infraestructura para empresas de Colombia y Latinoamérica.<br/><br/>El proyecto incluye la plataforma corporativa con CMS multilingüe y portales de administración y de clientes.",
  "components": [
    {
      "type": "list",
      "props": {
        "title": "Qué incluye",
        "items": [
          "Sitio público corporativo",
          "CMS multilingüe",
          "Portal administrativo",
          "Portal para clientes"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img0,
        "alt": "DesarPro",
        "caption": "DesarPro"
      }
    }
  ]
} as const satisfies ProjectContent;
