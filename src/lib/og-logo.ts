import { readFile } from "node:fs/promises";
import path from "node:path";

let logoDataUrl: string | null = null;

/** Inline logo.svg for next/og ImageResponse (Satori does not load /public paths directly). */
export async function getLogoDataUrl(): Promise<string> {
  if (logoDataUrl) return logoDataUrl;

  const svg = await readFile(path.join(process.cwd(), "public", "logo.svg"), "utf8");
  logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return logoDataUrl;
}
