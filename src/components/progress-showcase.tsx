"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProgressShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-(--border-soft)"
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-(--surface) p-6 sm:p-8">
          <p className="label-xs">Progress</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-(--text-strong) sm:text-3xl">
            Weekly & monthly momentum
          </h3>
          <p className="mt-3 text-sm leading-7 text-(--text-muted) sm:text-base">
            Activity counts, time, and distance roll up over time—whether you ride for memories or to push your pace.
          </p>
        </div>

        <div className="flex items-center justify-center bg-[#0a0e09] px-5 py-6 sm:px-8 sm:py-8 lg:min-h-[320px]">
          <Image
            src="/12weekgraph.png"
            alt="INAZU progress screen with weekly activity and 12-week distance chart"
            width={720}
            height={560}
            className="h-auto w-full max-w-[20rem] sm:max-w-[22rem]"
          />
        </div>
      </div>
    </motion.div>
  );
}
