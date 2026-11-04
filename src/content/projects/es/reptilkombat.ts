import show from "../../../assets/images/projects/reptilkombat-showcase.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Reptil Kombat",
  "theme": "dark",
  "tags": [
    "typescript",
    "react",
    "websockets"
  ],
  "live": "https://reptilkombat.vercel.app",
  "source": "https://github.com/Alejostone1/ReptilKombat",
  "videoBorder": true,
  "description": "Videojuego de cartas por turnos con 40 reptiles reales y 8 afinidades tipo piedra-papel-tijera.<br/><br/>Incluye un sistema de balance de juego y una arena de combate multijugador en tiempo real entre dispositivos distintos.",
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
        "src": "https://reptilkombat.vercel.app",
        "caption": "Jugar en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "40 reptiles reales con estadísticas",
          "8 afinidades con ventajas cruzadas",
          "Combate multijugador en tiempo real",
          "Sistema de balance del juego"
        ]
      }
    }
  ]
} as const satisfies ProjectContent;
