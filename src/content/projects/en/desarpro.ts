import img0 from "../../../assets/images/projects/desarpro-banner.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "DesarPro",
  "theme": "dark",
  "tags": [
    "react",
    "nodejs",
    "prisma",
    "postgresql"
  ],
  "live": "https://github.com/Alejostone1/Desarpro",
  "source": "https://github.com/Alejostone1/Desarpro",
  "videoBorder": true,
  "description": "DesarPro is the software development company I co-founded in Pereira. We build custom software, mobile apps, SaaS platforms and AI, cybersecurity and infrastructure solutions for companies in Colombia and Latin America.<br/><br/>The project includes the corporate platform with a multilingual CMS plus admin and client portals.",
  "components": [
    {
      "type": "list",
      "props": {
        "title": "What it includes",
        "items": [
          "Public corporate site",
          "Multilingual CMS",
          "Admin portal",
          "Client portal"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": img0,
        "alt": "DesarPro",
        "caption": "DesarPro"
      }
    }
  ]
} as const satisfies ProjectContent;
