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
  "description": "Interactive 3D simulator of a series RLC circuit. It solves the second-order differential equation <b>L q'' + R q' + q/C = E(t)</b> in real time with 4th-order Runge-Kutta and turns it into something you can see and play with.<br/><br/>It shows charge flow, damping regimes, a multichannel oscilloscope and the state space, linking the math to the circuit's physical behavior.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://electrolab3d.vercel.app",
        "caption": "Live demo",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "Real-time RK4 numerical integration",
          "3D scene built with Three.js and WebGL",
          "Digital oscilloscope and state space view",
          "Under, critically and over-damped regimes"
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
