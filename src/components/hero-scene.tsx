"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroScene() {
  return (
    <div className="flex justify-center lg:justify-end">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[17.5rem] sm:max-w-[19rem] lg:max-w-[20.5rem]"
      >
        <div
          className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-70 blur-2xl"
          style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 70%)" }}
        />

        <div className="relative rounded-[2rem] border border-(--border-strong) bg-[#050705] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:rounded-[2.25rem] sm:p-2.5">
          <div className="absolute left-1/2 top-2.5 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-(--border-strong)" aria-hidden />

          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.5rem] bg-[#0a0e09] sm:rounded-[1.65rem]">
            <Image
              src="/ride-screen.png"
              alt="INAZU active ride screen with live route map, distance, and session controls"
              fill
              priority
              sizes="(max-width: 640px) 280px, 328px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-(--text-muted)">
          Active ride · live GPS route & session stats
        </p>
      </motion.div>
    </div>
  );
}
