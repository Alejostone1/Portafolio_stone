import show from "../../../assets/images/projects/formacion360-showcase.webp";
import seccion from "../../../assets/images/projects/formacion360-seccion.webp";

import type { ProjectContent } from "../../types";

export default {
  "title": "Formación 360",
  "theme": "dark",
  "tags": [
    "next",
    "typescript",
    "express",
    "postgresql",
    "tailwind"
  ],
  "live": "https://formation360.vercel.app",
  "source": "https://github.com/Alejostone1/Formation360",
  "videoBorder": true,
  "description": "Full e-learning platform: students unlock courses with a code, progress through modules and videos, and get a certificate when they finish. Admins manage categories, courses, videos, users and certificates, with activity analytics.<br/><br/>Next.js frontend and Express backend. I migrated it from MySQL to PostgreSQL (Supabase), and files are stored in Vercel Blob.<br/><br/><b>Demo account:</b> estudiante@formacion360.co · Estudiante360",
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
        "src": "https://formation360.vercel.app",
        "caption": "Live demo",
        "alt": "Open live demo"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Features",
        "items": [
          "Courses by modules and videos with progress",
          "Course activation by code",
          "Code-verifiable certificates",
          "Admin panel with analytics",
          "Next.js 14, Express, PostgreSQL and Vercel Blob"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": seccion,
        "alt": "Why Formación 360",
        "caption": "Why Formación 360"
      }
    }
  ]
} as const satisfies ProjectContent;
