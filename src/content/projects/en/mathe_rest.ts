import img0 from "../../../assets/images/projects/mathe_rest-cover.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "MatheRest",
  "theme": "dark",
  "tags": [
    "python",
    "javascript"
  ],
  "live": "https://mathe-rest.vercel.app",
  "source": "https://github.com/Alejostone1/MatheRest",
  "videoBorder": true,
  "description": "Web math assistant, final project for Differential and Integral Calculus. It parses an expression, detects the solving method automatically and explains the derivation or integration step by step.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://mathe-rest.vercel.app",
        "caption": "Live demo",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "Automatic method detection",
          "Step-by-step explanation",
          "Derivatives and integrals",
          "Python backend"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img0,
        "alt": "MatheRest",
        "caption": "MatheRest"
      }
    }
  ]
} as const satisfies ProjectContent;
