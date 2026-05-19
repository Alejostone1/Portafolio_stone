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
    "A native mobile application developed in React Native designed to connect pet adoptants with animal shelters for homeless dogs and cats.<br/><br/>Features geolocalisation, comprehensive pet profiles, shelter donation gateways, and advanced filtering options by breed, size, and age.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubewar,
        caption: "Paticas Mobile App",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Pet Catalog",
        caption: "Pet Search & Filtration Module",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Adoption Details",
        caption: "Detailed Animal Profile Sheet",
      },
    },
  ],
} as const satisfies ProjectContent;
