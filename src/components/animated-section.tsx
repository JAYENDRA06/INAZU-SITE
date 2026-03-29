"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
