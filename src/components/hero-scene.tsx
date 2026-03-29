"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pulseCards = [
  { label: "Top speed", value: "141 km/h", tone: "var(--accent)" },
  { label: "Total distance", value: "70 km", tone: "var(--sky)" },
  { label: "Total time", value: `${(70/141).toFixed(0)} h ${((70/141)*60).toFixed(0)} m`, tone: "var(--success)" },
];

export function HeroScene() {
  return (
    <div className="relative isolate mx-auto flex w-full max-w-3xl flex-col gap-5">
      <motion.div
        className="absolute -left-12 top-20 h-40 w-40 rounded-full bg-(--accent-glow) blur-3xl"
        animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-6 bottom-8 h-52 w-52 rounded-full bg-(--sky-glow) blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-4xl border border-(--border-strong) bg-[linear-gradient(145deg,color-mix(in_srgb,var(--surface)_92%,transparent),color-mix(in_srgb,var(--surface-elevated)_92%,transparent))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-6"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]" />
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
          <Image
            src="/ride-screen.png"
            alt="Stylized performance route visualization"
            width={980}
            height={640}
            className="h-auto w-full rounded-[1.2rem]"
            priority
          />
          <div className="flex flex-col gap-4">
            {pulseCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[1.4rem] border border-(--border-soft) bg-(--surface-soft) p-4"
              >
                <p className="text-xs uppercase tracking-widest text-(--text-muted)">{card.label}</p>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <p className="font-display text-2xl uppercase text-(--text-strong)">{card.value}</p>
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: card.tone, boxShadow: `0 0 24px ${card.tone}` }}
                  />
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <Image
                src="/12weekgraph.png"
                alt="INAZU dashboard preview showing analytics cards"
                width={720}
                height={560}
                className="h-auto w-full rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
