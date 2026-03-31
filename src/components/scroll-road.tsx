"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Clock, Route, Timer } from "lucide-react";

const pathD =
  "M -10 200 L 120 155 L 240 175 L 370 95 L 500 130 L 630 55 L 760 90 L 900 40";

const mapPins = [
  { id: "pin-1", x: 240, y: 175 },
  { id: "pin-2", x: 370, y: 95 },
  { id: "pin-3", x: 630, y: 55 },
  { id: "pin-4", x: 760, y: 90 },
];

export function ScrollRoad() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [marker, setMarker] = useState({ x: -10, y: 200 });
  const [routeStats, setRouteStats] = useState({ progress: 0, distance: 0, speed: 0, duration: 0 });
  const maxSpeed = 72;
  const speedProgress = Math.min(routeStats.speed / maxSpeed, 1);
  const needleRotate = -120 + speedProgress * 240;
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    const point = path.getPointAtLength(value * length);
    const progress = Math.min(100, Math.max(0, value * 100));
    const distance = 8 + value * 28;
    const speed = 32 + value * 28;
    const duration = 12 + value * 24;
    setMarker({ x: point.x, y: point.y });
    setRouteStats({ progress, distance, speed, duration });
  });

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div className="rounded-[2.2rem] border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] px-6 py-8 sm:px-8">

        {/* Top row: text + gauge/stats */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">Ride Insights</p>
            <h3 className="mt-2 font-display text-2xl uppercase text-(--text-strong)">
              Saved rides, clear stats, quick decisions
            </h3>
            <p className="mt-2 text-sm leading-6 text-(--text-muted)">
              Open any saved session to review speed, distance, and time in seconds—then keep improving with weekly and monthly trends.
            </p>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-[1fr_1.2fr] lg:w-105 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-(--border-strong) bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] px-4 py-3 text-center">
              <div className="relative h-20 w-20">
                <svg viewBox="0 0 120 120" className="h-full w-full">
                  <defs>
                    <linearGradient id="speedGlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--sky)" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="46" stroke="var(--border-soft)" strokeWidth="10" fill="none" />
                  <motion.circle
                    cx="60" cy="60" r="46"
                    stroke="url(#speedGlow)" strokeWidth="10" fill="none" strokeLinecap="round"
                    strokeDasharray="289"
                    strokeDashoffset={289 - 289 * speedProgress}
                    transform="rotate(-220 60 60)"
                  />
                  <g transform={`rotate(${needleRotate} 60 60)`}>
                    <line x1="60" y1="60" x2="60" y2="18" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="60" cy="60" r="5" fill="var(--accent)" />
                  </g>
                </svg>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-(--text-muted)">Speed</p>
                <p className="font-display text-2xl uppercase text-(--text-strong)">{routeStats.speed.toFixed(0)}</p>
              </div>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-(--text-muted)">Max {maxSpeed} km/h</p>
            </div>
            <div className="flex h-full flex-col justify-between gap-2">
              <div className="flex items-center gap-3 rounded-xl border border-(--border-strong) bg-(--surface-soft) px-3 py-2.5 text-xs uppercase tracking-[0.3em] text-(--text-strong)">
                <Route className="h-4 w-4 text-(--accent)" />
                {routeStats.progress.toFixed(0)}% preview
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-(--border-strong) bg-(--surface-soft) px-3 py-2.5 text-xs uppercase tracking-[0.3em] text-(--text-strong)">
                <Timer className="h-4 w-4 text-(--accent)" />
                {routeStats.distance.toFixed(1)} km
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-(--border-strong) bg-(--surface-soft) px-3 py-2.5 text-xs uppercase tracking-[0.3em] text-(--text-strong)">
                <Clock className="h-4 w-4 text-(--accent)" />
                {routeStats.duration.toFixed(0)} min
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: SVG left (2/3) + info panel right (1/3) */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="overflow-hidden rounded-2xl">
            <svg
              viewBox="-10 20 910 200"
              className="h-36 w-full"
              role="img"
              aria-label="Map polyline with animated route"
            >
              <defs>
                <linearGradient id="routeGlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--sky)" stopOpacity="0.4" />
                </linearGradient>
                <pattern id="mesh" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="1.2" fill="var(--border-strong)" />
                </pattern>
              </defs>
              <rect x="-10" y="20" width="920" height="200" fill="url(#mesh)" />

              <path
                d={pathD}
                ref={pathRef}
                fill="none"
                stroke="var(--border-strong)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#routeGlow)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength }}
              />
              {mapPins.map((pin) => (
                <g key={pin.id}>
                  <circle cx={pin.x} cy={pin.y} r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
                  <circle cx={pin.x} cy={pin.y} r="3" fill="var(--accent)" />
                </g>
              ))}
              <motion.g style={{ x: marker.x - 12, y: marker.y - 12 }}>
                <circle cx="12" cy="12" r="12" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="var(--accent)" />
                <rect x="7" y="-7" width="10" height="7" rx="2" fill="var(--accent)" />
              </motion.g>
            </svg>
          </div>

          {/* Right panel aligned with SVG */}
          <div className="flex flex-col justify-between gap-3 rounded-2xl border border-(--border-strong) bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] px-5 py-4">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.35em] text-(--accent)">Session summary</p>
              <p className="mt-2 font-display text-lg uppercase text-(--text-strong)">Preview any saved ride</p>
              <p className="mt-1 text-xs leading-5 text-(--text-muted)">Session recap, garage-linked stats, and progress snapshots—all in one clean view.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-(--border-strong) bg-(--surface-soft) px-3 py-2 text-center">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-(--text-muted)">Avg Speed</p>
                <p className="mt-1 font-display text-base uppercase text-(--text-strong)">30 km/h</p>
              </div>
              <div className="rounded-xl border border-(--border-strong) bg-(--surface-soft) px-3 py-2 text-center">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-(--text-muted)">Top Speed</p>
                <p className="mt-1 font-display text-base uppercase text-(--text-strong)">60 km/h</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
