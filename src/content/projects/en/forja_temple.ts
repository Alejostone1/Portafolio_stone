import show from "../../../assets/images/projects/forja_temple-showcase.webp";
import seccion from "../../../assets/images/projects/forja_temple-seccion.webp";
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
  "description": "Virtual heat-transfer lab: pick the metal and the medium, and watch the piece lose or gain heat.<br/><br/>The simulator computes the constant <b>k</b> from real physical properties and works through the math step by step, with charts, analysis and scenarios like furnace and cryogenics.<br/><br/>Academic project built as a team with Daniel Colorado and Sebastián Patiño.",
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
        "src": "https://ley-enfriamiento.vercel.app",
        "caption": "Live demo",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "k computed from real physical properties",
          "Step-by-step mathematical derivation",
          "Temperature-over-time charts",
          "Furnace, quenching and cryogenics scenarios"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Parallel experiments",
        "caption": "Parallel experiments"
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
