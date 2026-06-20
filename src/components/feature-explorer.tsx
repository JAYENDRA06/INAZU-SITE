"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  BarChart3,
  CalendarRange,
  Flag,
  Newspaper,
  Save,
  Share2,
  Signal,
  TimerReset,
  UserPlus,
  Users,
  UsersRound,
} from "lucide-react";

const liveFeatures = [
  {
    key: "gps-tracking",
    icon: Signal,
    title: "GPS ride tracking",
    description: "Live stats and your route on the map. Background tracking during an active ride.",
  },
  {
    key: "save-and-stats",
    icon: Save,
    title: "Saved ride recaps",
    description: "Path, stats, chart, and notes on every saved session.",
  },
  {
    key: "garage-stats",
    icon: BarChart3,
    title: "Garage-linked stats",
    description: "Vehicle and profile totals update when you save.",
  },
  {
    key: "period-stats",
    icon: CalendarRange,
    title: "Weekly & monthly insights",
    description: "Progress snapshots across your riding history.",
  },
  {
    key: "friends",
    icon: UserPlus,
    title: "Friend requests",
    description: "Connect with other riders in INAZU.",
  },
  {
    key: "profile-sharing",
    icon: Share2,
    title: "Profile sharing",
    description: "Share your profile link from the app—friends open it in INAZU or on inazu.app.",
  },
];

const plannedFeatures = [
  {
    key: "ride-sharing",
    icon: Share2,
    title: "Ride sharing",
    description: "Share saved ride recaps with friends and family.",
  },
  {
    key: "crew-groups",
    icon: Users,
    title: "Crew groups",
    description: "Private circles for plans, goals, and local crews.",
  },
  {
    key: "group-rides",
    icon: UsersRound,
    title: "Group rides",
    description: "Organize and ride together with your crew.",
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
    description: "Kart sessions with performance comparisons.",
  },
  {
    key: "feed",
    icon: Newspaper,
    title: "User feed",
    description: "Activity and milestones from people you follow.",
  },
];

export function FeatureExplorer() {
  const [activeTab, setActiveTab] = useState<"live" | "next">("live");

  const items = useMemo(() => {
    return activeTab === "live" ? liveFeatures : plannedFeatures;
  }, [activeTab]);

  return (
    <div className="overflow-hidden rounded-3xl border border-(--border-soft) bg-(--surface)">
      <div className="border-b border-(--border-soft) px-5 py-5 sm:px-6">
        <p className="label-xs">Roadmap</p>
        <h3 className="mt-1 font-display text-xl font-bold text-(--text-strong) sm:text-2xl">
          Available now & coming soon
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-(--surface-soft) p-1">
          {(["live", "next"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-(--accent) text-(--accent-ink) shadow-sm"
                  : "text-(--text-muted) hover:text-(--text-strong)"
              }`}
            >
              {tab === "live" ? "Live now" : "Coming next"}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid gap-px bg-(--border-soft) sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.key}
                className="flex items-start gap-3 bg-(--surface) px-4 py-3.5 sm:px-5 sm:py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--surface-soft) text-(--accent)">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold leading-snug text-(--text-strong)">{item.title}</h4>
                  <p className="mt-0.5 text-xs leading-5 text-(--text-muted)">{item.description}</p>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
