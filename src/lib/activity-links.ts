import { siteUrl } from "@/lib/site-config";

export function buildActivityWebUrl(rideId: string): string {
  return `${siteUrl}/a/${encodeURIComponent(rideId.trim())}`;
}

export function buildActivityAppSchemeUrl(rideId: string): string {
  return `inazu://a/${encodeURIComponent(rideId.trim())}`;
}
