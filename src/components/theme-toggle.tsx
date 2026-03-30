"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "inazu-theme";

type ThemeMode = "light" | "dark";

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as ThemeMode | null;
    const resolved: ThemeMode =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    applyTheme(resolved);
    // defer state update out of effect body to avoid lint cascade warning
    queueMicrotask(() => {
      setTheme(resolved);
      setMounted(true);
    });
  }, []);

  const handleToggle = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border-strong) bg-(--surface-soft) text-(--text-strong) transition hover:border-(--accent) hover:text-(--accent)"
    >
      {mounted ? (
        theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
