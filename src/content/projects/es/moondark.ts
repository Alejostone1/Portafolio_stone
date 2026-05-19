import videoParticles from "../../../assets/videos/particles.mp4";
import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MoonDark & Luna",
  theme: "dark",
  tags: ["javascript", "html", "css", "dark-mode"],
  live: "https://github.com/Alejostone1/MoonDark",
  source: "https://github.com/Alejostone1/MoonDark",
  videoBorder: true,
  description:
    "El 'Universo Moon' abarca proyectos interactivos de alta fidelidad visual en modo oscuro e iluminación neón, como **MoonDark**, **ProyectoFinalMoon** y **cafe-luna-oscura**.<br/><br/>Se enfoca en crear interfaces inmersivas con transiciones sumamente fluidas, efectos espaciales interactivos y micro-animaciones premium inspiradas en la luna y el cosmos.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "MoonDark Universe",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "Interfaz Lunar",
        caption: "Estilo Visual MoonDark",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "Menú Interactivo",
        caption: "Carta Temática de Café Luna Oscura",
      },
    },
  ],
} as const satisfies ProjectContent;
