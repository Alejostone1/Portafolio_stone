import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Servicio Social UCP",
    slug: "serviciosocial_ucp",
    thumbnail: thumbnailPokedex,
    description: "Gestión de Servicio Social Universitario",
  },
  {
    title: "Market UCP",
    slug: "market_ucp",
    thumbnail: thumbnailQuibbo,
    description: "Marketplace Estudiantil de la UCP",
  },
  {
    title: "Adi Estilos",
    slug: "adi_estilos",
    thumbnail: thumbnailSharkie,
    description: "Gestión de Turnos y Estilistas",
  },
  {
    title: "MoonDark",
    slug: "moondark",
    thumbnail: thumbnailCubeWar,
    description: "Experiencia Interactiva Moon Dark",
  },
  {
    title: "Paticas",
    slug: "paticas",
    thumbnail: thumbnailStreakon,
    description: "Plataforma de Adopción de Mascotas",
  },
] as const satisfies ProjectPreview[];
