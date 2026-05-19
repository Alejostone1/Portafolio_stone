import videoPokedex from "../../../assets/videos/pokedex.mp4";
import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Servicio Social UCP",
  theme: "dark",
  tags: ["php", "javascript", "mysql", "css"],
  live: "https://github.com/Alejostone1/Serviciosocial_ucp",
  source: "https://github.com/Alejostone1/Serviciosocial_ucp",
  videoBorder: true,
  description:
    "Plataforma académica diseñada para la Universidad Católica de Pereira (UCP). Permite la gestión, asignación y seguimiento de horas de servicio social obligatorio de los estudiantes.<br/><br/>Cuenta con paneles interactivos para administradores y estudiantes, optimizando el registro de horas y generación de certificados digitales de forma segura.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Plataforma de Servicio Social",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Panel de Estudiante",
        caption: "Vista Principal del Estudiante",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Registro de Horas",
        caption: "Módulo de Registro de Horas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Panel Administrativo",
        caption: "Consola de Administración de UCP",
      },
    },
  ],
} as const satisfies ProjectContent;
