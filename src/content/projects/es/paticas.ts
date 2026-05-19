import videoCubewar from "../../../assets/videos/cubewar.mp4";
import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Paticas Pet App",
  theme: "dark",
  tags: ["react-native", "expo", "firebase", "android", "ios"],
  live: "https://github.com/Alejostone1/paticas",
  source: "https://github.com/Alejostone1/paticas",
  videoBorder: true,
  description:
    "Una aplicación móvil nativa diseñada en React Native para conectar a hogares adoptantes con refugios de mascotas desamparadas (perros y gatos).<br/><br/>Implementa geolocalización, perfiles detallados de animales, historias de éxito, pasarela de donaciones para el sostenimiento de albergues y un sistema de filtros avanzado por raza, tamaño y edad.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubewar,
        caption: "Paticas App Móvil",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Catálogo de Mascotas",
        caption: "Búsqueda y Filtros de Mascotas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Ficha de Adopción",
        caption: "Información Detallada de la Mascota",
      },
    },
  ],
} as const satisfies ProjectContent;
