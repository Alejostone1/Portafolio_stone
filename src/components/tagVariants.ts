export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "php"
  | "mysql"
  | "react-native"
  | "expo"
  | "firebase"
  | "android"
  | "ios"
  | "nodejs"
  | "express"
  | "mongodb"
  | "bootstrap"
  | "ejs"
  | "dark-mode";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  php: "PHP",
  mysql: "MySQL",
  "react-native": "React Native",
  expo: "Expo",
  firebase: "Firebase",
  android: "Android",
  ios: "iOS",
  nodejs: "Node.js",
  express: "Express",
  mongodb: "MongoDB",
  bootstrap: "Bootstrap",
  ejs: "EJS",
  "dark-mode": "Dark Mode",
} as const satisfies Record<TagVariant, string>;
