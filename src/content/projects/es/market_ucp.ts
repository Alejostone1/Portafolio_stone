import videoQuibbo from "../../../assets/videos/quibbo.mp4";
import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Market UCP",
  theme: "dark",
  tags: ["html", "javascript", "css", "mysql", "bootstrap"],
  live: "https://github.com/Alejostone1/Market_ucp",
  source: "https://github.com/Alejostone1/Market_ucp",
  videoBorder: true,
  description:
    "Una aplicación web de mercado (marketplace) interno para estudiantes y personal de la Universidad Católica de Pereira.<br/><br/>Permite a la comunidad publicar artículos para la venta o intercambio, contactar a los vendedores y categorizar productos de manera rápida y segura dentro del entorno educativo.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "Market UCP App",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Catálogo de Productos",
        caption: "Vista de Productos Disponibles",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Detalle de Artículo",
        caption: "Vista Detallada del Producto",
      },
    },
  ],
} as const satisfies ProjectContent;
