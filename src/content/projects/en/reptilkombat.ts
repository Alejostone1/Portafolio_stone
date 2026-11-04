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
  "description": "Turn-based card game with 40 real reptiles and 8 rock-paper-scissors style affinities.<br/><br/>It includes a game balance system and a real-time multiplayer combat arena across different devices.",
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
        "src": "https://reptilkombat.vercel.app",
        "caption": "Play live",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "40 real reptiles with stats",
          "8 affinities with cross advantages",
          "Real-time multiplayer combat",
          "Game balance system"
        ]
      }
    }
  ]
} as const satisfies ProjectContent;
