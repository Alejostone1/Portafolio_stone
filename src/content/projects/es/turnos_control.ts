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
  "description": "Plataforma SaaS multi-empresa para programar turnos laborales y liquidar recargos y horas extra conforme a la normativa colombiana vigente (CST, Decreto 1072 de 2015, Ley 2101 de 2021 y Ley 2466 de 2025).<br/><br/>Resuelve un problema real: los errores manuales al clasificar horas nocturnas, dominicales, festivas y cruces de medianoche.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://turnos-control.vercel.app",
        "caption": "Demo en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "Arquitectura multi-tenant",
          "Liquidación de recargos y horas extra",
          "Reglas de la ley laboral colombiana",
          "Next.js, Prisma y PostgreSQL"
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
