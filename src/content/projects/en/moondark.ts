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
    "The 'Moon Universe' encompasses high-fidelity, interactive, dark-mode web projects with glowing neon styles such as **MoonDark**, **ProyectoFinalMoon**, and **cafe-luna-oscura**.<br/><br/>It focuses on creating immersive web layouts with extremely smooth transitions, interactive space/particle effects, and premium animations inspired by the moon and cosmos.",
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
        alt: "Lunar Interface",
        caption: "MoonDark Visual Art Style",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "Interactive Menu",
        caption: "Cafe Luna Oscura Themed Web Menu",
      },
    },
  ],
} as const satisfies ProjectContent;
