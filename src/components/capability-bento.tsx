"use client";

import { motion } from "framer-motion";
import { Activity, Gauge, Radio, type LucideIcon } from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    icon: Gauge,
    title: "Offline + background tracking",
    description:
      "Keep recording when signal drops or when you switch apps—built for longer rides on bikes and in cars.",
  },
  {
    icon: Activity,
    title: "Ride recaps on save",
    description:
      "Path, max speed, distance, movement time, speed vs distance chart, and your notes—ready when you open the session.",
  },
  {
    icon: Radio,
    title: "Progress you can scan",
    description: "Weekly and monthly snapshots show your momentum at a glance.",
  },
];

export function CapabilityBento() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {capabilities.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group surface-card flex flex-col gap-4 rounded-3xl p-6"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-(--surface-soft) text-(--accent) transition group-hover:bg-[color-mix(in_srgb,var(--accent)_14%,var(--surface-soft))]">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold leading-snug text-(--text-strong)">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-(--text-muted)">{item.description}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
