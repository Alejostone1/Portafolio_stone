import show from "../../../assets/images/projects/market_ucp-showcase.webp";
import seccion from "../../../assets/images/projects/market_ucp-seccion.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Market UCP",
  "theme": "dark",
  "tags": [
    "next",
    "typescript",
    "prisma",
    "postgresql",
    "socketio"
  ],
  "live": "https://market-ucp.vercel.app",
  "source": "https://github.com/Alejostone1/Market_ucp",
  "videoBorder": true,
  "description": "Digital commerce platform for the Universidad Católica de Pereira community: students, faculty and staff can post, buy, sell and trade within campus.<br/><br/>It includes user roles, real-time buyer-seller chat, favorites, listing reports and an admin panel with user management.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": show,
        "alt": "Desktop and mobile view",
        "caption": "Desktop and mobile view"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "embed",
        "src": "https://market-ucp.vercel.app",
        "caption": "Live demo",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "Multi-role architecture (user, seller, admin)",
          "Real-time chat with Socket.io",
          "Favorites, reports and moderation",
          "Next.js 15, Prisma and PostgreSQL on Neon"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Featured listings",
        "caption": "Featured listings"
      }
    }
  ]
} as const satisfies ProjectContent;
