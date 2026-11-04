// Toma capturas reales de las demos en vivo para el portafolio.
// Uso: node scripts/screenshots.mjs  (requiere Playwright con Chromium)
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const OUT = "screens";
const SITES = [
  { id: "electrolab3d", url: "https://electrolab3d.vercel.app", wait: 9000 },
  { id: "market_ucp", url: "https://market-ucp.vercel.app", wait: 5000 },
  { id: "adi_estilos", url: "https://adiestilos-full.vercel.app", wait: 5000 },
  { id: "turnos_control", url: "https://turnos-control.vercel.app", wait: 5000 },
  { id: "reptilkombat", url: "https://reptilkombat.vercel.app", wait: 7000 },
  { id: "mathe_rest", url: "https://mathe-rest.vercel.app", wait: 5000 },
  { id: "atacknimal", url: "https://atacknimal.vercel.app", wait: 8000 },
  { id: "forja_temple", url: "https://ley-enfriamiento.vercel.app", wait: 5000 },
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
});

for (const s of SITES) {
  for (const [kind, viewport, scale] of [
    ["desktop", { width: 1600, height: 900 }, 1],
    ["mobile", { width: 390, height: 844 }, 2],
  ]) {
    const ctx = await browser.newContext({ viewport, deviceScaleFactor: scale, locale: "es-CO", colorScheme: "light" });
    const page = await ctx.newPage();
    try {
      await page.goto(s.url, { waitUntil: "networkidle", timeout: 60000 });
    } catch (e) {
      console.log(`[${s.id}] aviso al cargar: ${e.message}`);
    }
    await page.waitForTimeout(s.wait);
    await page.screenshot({ path: `${OUT}/${s.id}-${kind}.png` });
    if (kind === "desktop") {
      await page.mouse.wheel(0, 900);
      await page.waitForTimeout(2500);
      await page.screenshot({ path: `${OUT}/${s.id}-desktop-2.png` });
    }
    console.log(`[${s.id}] ${kind} listo`);
    await ctx.close();
  }
}
await browser.close();
