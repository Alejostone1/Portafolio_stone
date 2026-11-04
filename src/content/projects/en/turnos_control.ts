import img0 from "../../../assets/images/projects/turnos_control-cover.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "TurnosControl",
  "theme": "dark",
  "tags": [
    "next",
    "typescript",
    "prisma",
    "postgresql"
  ],
  "live": "https://turnos-control.vercel.app",
  "source": "https://github.com/Alejostone1/TurnosControl",
  "videoBorder": true,
  "description": "Multi-tenant SaaS platform to schedule work shifts and calculate surcharges and overtime under current Colombian labor law (CST, Decree 1072/2015, Law 2101/2021 and Law 2466/2025).<br/><br/>It solves a real problem: manual errors when classifying night, Sunday, holiday and past-midnight hours.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://turnos-control.vercel.app",
        "caption": "Live demo",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "Multi-tenant architecture",
          "Surcharge and overtime calculation",
          "Colombian labor-law rules",
          "Next.js, Prisma and PostgreSQL"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img0,
        "alt": "TurnosControl",
        "caption": "TurnosControl"
      }
    }
  ]
} as const satisfies ProjectContent;
