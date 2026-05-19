export const social = [
  { url: "mailto:john.piedrahita@ucp.edu.co", name: "mail" },
  { url: "https://github.com/Alejostone1", name: "github" },
  { url: "https://www.linkedin.com/in/john-alejandro-piedrahita-muñoz/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
