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
  "description": "Turn-based animal card game where <i>instinct decides and strategy wins</i>. Every animal has its own stats and abilities, and matches are played on themed boards.<br/><br/>It was built in documented phases: analysis, game design document (GDD), concept art, UI and combat engine.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://atacknimal.vercel.app",
        "caption": "Play live",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "Phaser game engine inside React",
          "Node.js backend with PostgreSQL",
          "Phase-based documented design (GDD)",
          "Original concept art and storyboard"
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
