import { rideApiUrl } from "@/lib/site-config";

export type PublicActivityPreview = {
  id: string;
  activity_title?: string;
  activityTitle?: string;
  activity_type?: string;
  activityType?: string;
  distance_m?: number;
  distanceM?: number;
  duration_sec?: number;
  durationSec?: number;
  started_at?: string;
  startedAt?: string;
  polyline_image_dark?: string;
  polylineImageDark?: string;
};

type PublicActivityResponse = {
  message: string;
  data: PublicActivityPreview;
};

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function normalizeRideId(rideId: string): string | null {
  try {
    const decoded = decodeURIComponent(rideId).trim();
    if (!decoded || !UUID_RE.test(decoded)) return null;
    return decoded;
  } catch {
    const trimmed = rideId.trim();
    if (!trimmed || !UUID_RE.test(trimmed)) return null;
    return trimmed;
  }
}

function pickTitle(activity: PublicActivityPreview): string {
  return (activity.activityTitle ?? activity.activity_title ?? "").trim() || "Activity";
}

function pickType(activity: PublicActivityPreview): string {
  return (activity.activityType ?? activity.activity_type ?? "").trim() || "Ride";
}

function pickDistanceM(activity: PublicActivityPreview): number | null {
  const value = activity.distanceM ?? activity.distance_m;
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function pickDurationSec(activity: PublicActivityPreview): number | null {
  const value = activity.durationSec ?? activity.duration_sec;
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function pickStartedAt(activity: PublicActivityPreview): string | null {
  const value = activity.startedAt ?? activity.started_at;
  return typeof value === "string" && value.trim() ? value : null;
}

function pickMapPreview(activity: PublicActivityPreview): string | null {
  const value = activity.polylineImageDark ?? activity.polyline_image_dark;
  return typeof value === "string" && value.trim() ? value : null;
}

export type NormalizedPublicActivity = {
  id: string;
  activityTitle: string;
  activityType: string;
  distanceM: number | null;
  durationSec: number | null;
  startedAt: string | null;
  polylineImageDark: string | null;
};

export function normalizePublicActivity(
  activity: PublicActivityPreview,
): NormalizedPublicActivity {
  return {
    id: activity.id,
    activityTitle: pickTitle(activity),
    activityType: pickType(activity),
    distanceM: pickDistanceM(activity),
    durationSec: pickDurationSec(activity),
    startedAt: pickStartedAt(activity),
    polylineImageDark: pickMapPreview(activity),
  };
}

export function formatActivityDistance(distanceM: number | null): string | null {
  if (distanceM == null || distanceM <= 0) return null;
  const km = distanceM / 1000;
  if (km >= 10) return `${km.toFixed(1)} km`;
  if (km >= 1) return `${km.toFixed(2)} km`;
  return `${Math.round(distanceM)} m`;
}

export function formatActivityDuration(durationSec: number | null): string | null {
  if (durationSec == null || durationSec <= 0) return null;
  const hours = Math.floor(durationSec / 3600);
  const minutes = Math.floor((durationSec % 3600) / 60);
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes} min`;
}

export async function fetchPublicActivity(
  rideId: string,
): Promise<NormalizedPublicActivity | null> {
  const id = normalizeRideId(rideId);
  if (!id) return null;

  try {
    const res = await fetch(`${rideApiUrl}/public/rides/${encodeURIComponent(id)}`, {
      next: { revalidate: 300 },
    });
    if (res.status === 404 || res.status === 400) return null;
    if (!res.ok) return null;
    const json = (await res.json()) as PublicActivityResponse;
    if (!json.data?.id) return null;
    return normalizePublicActivity(json.data);
  } catch {
    return null;
  }
}
