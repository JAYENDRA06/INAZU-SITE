"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Tracking", value: "Offline + background" },
  { label: "Recaps", value: "Per saved session" },
  { label: "Garage", value: "Vehicle-linked stats" },
  { label: "Progress", value: "Weekly & monthly" },
  { label: "Social", value: "Friend requests" },
];

export function LiveStats() {
  const items = [...highlights, ...highlights];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-(--border-soft) bg-(--surface-soft) py-3">
      <div className="marquee-track px-3">
        {items.map((item, index) => (
          <motion.div
            key={`${item.label}-${index}`}
            className="flex shrink-0 items-center gap-3 rounded-xl border border-(--border-soft) bg-(--surface) px-4 py-2.5"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-(--accent)">
              {item.label}
            </span>
            <span className="text-sm font-medium text-(--text-strong)">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
