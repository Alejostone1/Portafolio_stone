import t_electrolab3d from "../../../assets/thumbnails/electrolab3d.webp";
import t_market_ucp from "../../../assets/thumbnails/market_ucp.webp";
import t_atacknimal from "../../../assets/thumbnails/atacknimal.webp";
import t_adi_estilos from "../../../assets/thumbnails/adi_estilos.webp";
import t_forja_temple from "../../../assets/thumbnails/forja_temple.webp";
import t_turnos_control from "../../../assets/thumbnails/turnos_control.webp";
import t_reptilkombat from "../../../assets/thumbnails/reptilkombat.webp";
import t_mathe_rest from "../../../assets/thumbnails/mathe_rest.webp";
import t_desarpro from "../../../assets/thumbnails/desarpro.webp";

import type { ProjectPreview } from "../../types";

export default [
  { title: "ElectroLab 3D", slug: "electrolab3d", thumbnail: t_electrolab3d, description: "Laboratorio virtual 3D de circuitos RLC" },
  { title: "Market UCP", slug: "market_ucp", thumbnail: t_market_ucp, description: "Marketplace de la comunidad UCP" },
  { title: "Atacknimal", slug: "atacknimal", thumbnail: t_atacknimal, description: "Juego táctico de cartas de animales" },
  { title: "Adi Estilos", slug: "adi_estilos", thumbnail: t_adi_estilos, description: "Gestión integral para tienda de ropa" },
  { title: "Forja & Temple", slug: "forja_temple", thumbnail: t_forja_temple, description: "Laboratorio de la Ley de Enfriamiento de Newton" },
  { title: "TurnosControl", slug: "turnos_control", thumbnail: t_turnos_control, description: "SaaS de turnos y nómina colombiana" },
  { title: "Reptil Kombat", slug: "reptilkombat", thumbnail: t_reptilkombat, description: "Juego de cartas multijugador en vivo" },
  { title: "MatheRest", slug: "mathe_rest", thumbnail: t_mathe_rest, description: "Derivadas e integrales paso a paso" },
  { title: "DesarPro", slug: "desarpro", thumbnail: t_desarpro, description: "Mi empresa de software a medida" },
] as const satisfies ProjectPreview[];
