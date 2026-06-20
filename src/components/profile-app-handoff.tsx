"use client";

import { useEffect } from "react";

import { buildProfileAppSchemeUrl } from "@/lib/profile-links";

type Props = {
  username: string;
};

/** On mobile, attempt to hand off to the native app before showing store buttons. */
export function ProfileAppHandoff({ username }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
    if (!isMobile) return;

    const schemeUrl = buildProfileAppSchemeUrl(username);
    window.location.href = schemeUrl;
  }, [username]);

  return null;
}
