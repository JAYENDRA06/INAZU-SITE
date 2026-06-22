"use client";

import { useEffect } from "react";

import { buildActivityAppSchemeUrl } from "@/lib/activity-links";

type Props = {
  rideId: string;
};

/** On mobile, attempt to hand off to the native app before showing store buttons. */
export function ActivityAppHandoff({ rideId }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
    if (!isMobile) return;

    const schemeUrl = buildActivityAppSchemeUrl(rideId);
    window.location.href = schemeUrl;
  }, [rideId]);

  return null;
}
