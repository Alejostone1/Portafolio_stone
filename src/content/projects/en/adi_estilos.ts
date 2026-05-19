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
    "A full business management and digital booking platform built for independent hair stylists and beauty salons.<br/><br/>It enables beauty professionals to manage appointments, keep detailed customer records, promote special salon services, and improve business communication efficiently.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "Adi Estilos Platform",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Appointments Calendar",
        caption: "Visual Appointments Manager",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Stylist Profile",
        caption: "Salon Customization Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
