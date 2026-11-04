import img0 from "../../../assets/images/projects/electrolab3d-cover.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "ElectroLab 3D",
  "theme": "dark",
  "tags": [
    "typescript",
    "three",
    "webgl",
    "rk4"
  ],
  "live": "https://electrolab3d.vercel.app",
  "source": "https://github.com/Alejostone1/Electrolab3d",
  "videoBorder": true,
  "description": "Simulador 3D interactivo de un circuito RLC en serie. Resuelve en tiempo real la ecuación diferencial de segundo orden <b>L q'' + R q' + q/C = E(t)</b> con el método de Runge-Kutta de orden 4 y la convierte en algo que se puede ver y manipular.<br/><br/>Muestra el flujo de cargas, los regímenes de amortiguamiento, un osciloscopio multicanal y el espacio de estados, para conectar la matemática con el comportamiento físico del circuito.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://electrolab3d.vercel.app",
        "caption": "Demo en vivo",
        "alt": "Abrir demo en vivo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Características",
        "items": [
          "Integración numérica RK4 en tiempo real",
          "Escena 3D con Three.js y WebGL",
          "Osciloscopio digital y espacio de estados",
          "Regímenes sub, críticamente y sobreamortiguado"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img0,
        "alt": "ElectroLab 3D",
        "caption": "ElectroLab 3D"
      }
    }
  ]
} as const satisfies ProjectContent;
