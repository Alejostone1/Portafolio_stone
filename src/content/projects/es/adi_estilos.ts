import videoSharkie from "../../../assets/videos/sharkie.mp4";
import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Adi Estilos",
  theme: "dark",
  tags: ["nodejs", "express", "mongodb", "css", "ejs"],
  live: "https://github.com/Alejostone1/Adi_Estilos",
  source: "https://github.com/Alejostone1/Adi_Estilos",
  videoBorder: true,
  description:
    "Plataforma completa de administración y marketing digital para peluquerías y estilistas independientes.<br/><br/>Permite a los profesionales de la belleza gestionar sus agendas de turnos, llevar un registro detallado de clientes, promocionar servicios y agilizar la comunicación de manera moderna.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "Adi Estilos Plataforma",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Calendario de Turnos",
        caption: "Gestor Visual de Turnos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Perfil del Estilista",
        caption: "Panel de Personalización del Salón",
      },
    },
  ],
} as const satisfies ProjectContent;
