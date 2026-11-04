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
  "description": "Asistente matemático web, trabajo final de Cálculo Diferencial e Integral. Analiza una expresión, detecta automáticamente el método de solución y explica paso a paso la derivación o integración.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://mathe-rest.vercel.app",
        "caption": "Demo en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "Detección automática del método",
          "Explicación paso a paso",
          "Derivadas e integrales",
          "Backend en Python"
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
