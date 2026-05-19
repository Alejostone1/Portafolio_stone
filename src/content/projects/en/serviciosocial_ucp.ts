import videoPokedex from "../../../assets/videos/pokedex.mp4";
import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Social Service Manager UCP",
  theme: "dark",
  tags: ["php", "javascript", "mysql", "css"],
  live: "https://github.com/Alejostone1/Serviciosocial_ucp",
  source: "https://github.com/Alejostone1/Serviciosocial_ucp",
  videoBorder: true,
  description:
    "An academic web application developed for Universidad Católica de Pereira (UCP) to manage and track students' mandatory social service hours.<br/><br/>It provides dedicated dashboards for administrators and students, simplifying hours recording, scheduling, and generating secure digital certificates.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Social Service Management Platform",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Student Dashboard",
        caption: "Main Student Dashboard View",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Hours Register",
        caption: "Hours Registration Module",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Admin Panel",
        caption: "UCP Administration Console",
      },
    },
  ],
} as const satisfies ProjectContent;
