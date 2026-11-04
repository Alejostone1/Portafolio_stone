import img0 from "../../../assets/images/projects/forja-inicio.webp";
import img1 from "../../../assets/images/projects/forja-experimentos.webp";
import img2 from "../../../assets/images/projects/forja-grafica.webp";
import img3 from "../../../assets/images/projects/forja-matematica.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Forja & Temple",
  "theme": "dark",
  "tags": [
    "javascript",
    "html",
    "css"
  ],
  "live": "https://ley-enfriamiento.vercel.app",
  "source": "https://github.com/Alejostone1/Quizz_Ley_Enfriamiento",
  "videoBorder": true,
  "description": "Laboratorio virtual de transferencia de calor: eliges el metal y el medio, y observas cómo la pieza pierde o gana calor.<br/><br/>El simulador calcula la constante <b>k</b> a partir de propiedades físicas reales y desarrolla la matemática paso a paso, con gráficas, análisis y escenarios como horno y criogenia.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://ley-enfriamiento.vercel.app",
        "caption": "Demo en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "Constante k calculada con propiedades reales",
          "Desarrollo matemático paso a paso",
          "Gráficas de temperatura en el tiempo",
          "Escenarios de horno, temple y criogenia"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img0,
        "alt": "Inicio",
        "caption": "Inicio"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img1,
        "alt": "Experimentos",
        "caption": "Experimentos"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img2,
        "alt": "Gráfica de enfriamiento",
        "caption": "Gráfica de enfriamiento"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img3,
        "alt": "Desarrollo matemático",
        "caption": "Desarrollo matemático"
      }
    }
  ]
} as const satisfies ProjectContent;
