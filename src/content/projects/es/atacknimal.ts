import img0 from "../../../assets/images/projects/atacknimal-portada.webp";
import img1 from "../../../assets/images/projects/atacknimal-paneles.webp";
import img2 from "../../../assets/images/projects/atacknimal-duelo.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Atacknimal",
  "theme": "dark",
  "tags": [
    "react",
    "typescript",
    "phaser",
    "nodejs",
    "postgresql"
  ],
  "live": "https://atacknimal.vercel.app",
  "source": "https://github.com/Alejostone1/Atacknimal",
  "videoBorder": true,
  "description": "Juego de cartas de animales por turnos donde <i>el instinto decide y la estrategia gana</i>. Cada animal tiene estadísticas y habilidades propias, y las partidas se juegan en tableros temáticos.<br/><br/>Se desarrolló por fases documentadas: análisis, diseño del juego (GDD), arte conceptual, interfaz y motor de combate.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://atacknimal.vercel.app",
        "caption": "Jugar en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "Motor de juego con Phaser dentro de React",
          "Backend en Node.js con PostgreSQL",
          "Diseño documentado por fases (GDD)",
          "Arte conceptual y storyboard propios"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img0,
        "alt": "Portada",
        "caption": "Portada"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img1,
        "alt": "Paneles de juego",
        "caption": "Paneles de juego"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img2,
        "alt": "Duelo de cartas",
        "caption": "Duelo de cartas"
      }
    }
  ]
} as const satisfies ProjectContent;
