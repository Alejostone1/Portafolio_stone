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
  "description": "Web system to manage the Universidad Católica de Pereira's social service end to end: calls for participation, applications, logging and approving hours, certificates and news.<br/><br/>It has roles for admin, professor, assistant, partner and student, each with its own dashboard. Authentication with NextAuth and a PostgreSQL database with Prisma.<br/><br/><b>Demo account:</b> estudiante1@ucp.edu.co · Ucpservicio123",
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
        "src": "https://ucp-servicio-social.vercel.app",
        "caption": "Live demo",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "5 roles with their own dashboards",
          "Calls and applications",
          "Hour reporting and approval",
          "QR-code certificates",
          "Next.js 14, NextAuth, Prisma and PostgreSQL"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Calls and processes",
        "caption": "Calls and processes"
      }
    }
  ]
} as const satisfies ProjectContent;
