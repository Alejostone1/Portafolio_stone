import type { Locale } from "../../i18n/types";

export const projectIds = ["electrolab3d", "market_ucp", "atacknimal", "adi_estilos", "formacion360", "servicio_social", "forja_temple", "turnos_control", "reptilkombat", "mathe_rest", "desarpro"] as const;

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

export const projectModules = {
  es: simplifyModules(import.meta.glob("./es/*.ts", { eager: true })),
  en: simplifyModules(import.meta.glob("./en/*.ts", { eager: true })),
} as const satisfies Record<Locale, Record<string, any>>;
