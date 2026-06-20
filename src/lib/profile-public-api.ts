import { authApiUrl } from "@/lib/site-config";

export type PublicProfilePreview = {
  username: string;
  profile_photo?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  followers_count?: number;
  following_count?: number;
  is_private?: boolean;
};

type PublicProfileResponse = {
  message: string;
  data: PublicProfilePreview;
};

export function formatProfileLocation(profile: PublicProfilePreview): string | null {
  const parts = [profile.city, profile.state, profile.country]
    .map((part) => (part ?? "").trim())
    .filter(Boolean);
  return parts.length > 0 ? parts.join(", ") : null;
}

export async function fetchPublicProfile(username: string): Promise<PublicProfilePreview | null> {
  const handle = username.trim();
  if (!handle) return null;

  try {
    const res = await fetch(`${authApiUrl}/public/profile/${encodeURIComponent(handle)}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as PublicProfileResponse;
    return json.data ?? null;
  } catch {
    return null;
  }
}
