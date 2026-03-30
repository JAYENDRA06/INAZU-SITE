"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  CalendarRange,
  Flag,
  Newspaper,
  Save,
  Signal,
  TimerReset,
  UserPlus,
  Users,
  UsersRound,
} from "lucide-react";

const liveFeatures = [
  {
    key: "offline-tracking",
    icon: Signal,
    title: "Offline + background tracking",
    description: "Keep ride tracking active even with weak network and while the app is in background.",
  },
  {
    key: "save-and-stats",
    icon: Save,
    title: "Saved ride recaps",
    description: "Each saved ride generates clean session stats and ride summary details.",
  },
  {
    key: "garage-stats",
    icon: BarChart3,
    title: "Garage-linked stats",
    description: "Stats update for the selected vehicle in your garage and your overall profile.",
  },
  {
    key: "period-stats",
    icon: CalendarRange,
    title: "Weekly/monthly insights",
    description: "Quick progress snapshots help you track consistency over time.",
  },
  {
    key: "friends",
    icon: UserPlus,
    title: "Friend requests",
    description: "Connect with other riders and build your network inside INAZU.",
  },
];

const plannedFeatures = [
  {
    key: "crew-groups",
    icon: Users,
    title: "Crew groups",
    description: "Private circles for ride plans, goals, and local communities.",
  },
  {
    key: "group-rides",
    icon: UsersRound,
    title: "Group rides",
    description: "Organize and experience rides together with your crew.",
  },
  {
    key: "lap-recording",
    icon: TimerReset,
    title: "Lap recording",
    description: "Lap-by-lap tracking for deeper session analysis.",
  },
  {
    key: "go-karting",
    icon: Flag,
    title: "Go-karting recording",
    description: "Capture kart sessions and compare performance with friends.",
  },
  {
    key: "feed",
    icon: Newspaper,
    title: "User feed",
    description: "Activity and milestone feed to keep the community engaged.",
  },
];

export function FeatureExplorer() {
  const [activeTab, setActiveTab] = useState<"live" | "next">("live");

  const items = useMemo(() => {
    return activeTab === "live" ? liveFeatures : plannedFeatures;
  }, [activeTab]);

  return (
    <div className="rounded-[1.8rem] border border-(--border-soft) bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_96%,transparent),color-mix(in_srgb,var(--surface-soft)_95%,transparent))] p-6">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("live")}
          className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition ${
            activeTab === "live"
              ? "border-(--accent) bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-(--text-strong)"
              : "border-(--border-strong) bg-(--surface-soft) text-(--text-muted) hover:text-(--text-strong)"
          }`}
        >
          Live now
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("next")}
          className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition ${
            activeTab === "next"
              ? "border-(--accent) bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-(--text-strong)"
              : "border-(--border-strong) bg-(--surface-soft) text-(--text-muted) hover:text-(--text-strong)"
          }`}
        >
          Coming next
        </button>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.key}
              className="rounded-xl border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] p-4 transition hover:border-(--accent)"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border-strong) bg-(--surface-soft)">
                  <Icon className="h-4 w-4 text-(--accent)" />
                </span>
                <h3 className="font-display text-sm uppercase text-(--text-strong)">{item.title}</h3>
              </div>
              <p className="mt-3 text-xs leading-5 text-(--text-muted)">{item.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
