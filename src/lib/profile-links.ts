import { siteUrl } from "@/lib/site-config";

export function buildProfileWebUrl(username: string): string {
  return `${siteUrl}/u/${encodeURIComponent(username.trim())}`;
}

export function buildProfileAppSchemeUrl(username: string): string {
  return `inazu://u/${encodeURIComponent(username.trim())}`;
}
