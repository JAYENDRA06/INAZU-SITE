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
  const speedProgress = Math.min(routeStats.speed / 72, 1);
  const needleRotate = -120 + speedProgress * 240;
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    const point = path.getPointAtLength(value * length);
    setMarker({ x: point.x, y: point.y });
    setRouteStats({
      progress: value * 100,
      distance: 8 + value * 28,
      speed: 32 + value * 28,
      duration: 12 + value * 24,
    });
  });

  return (
    <section ref={containerRef} id="live-tracking" className="relative scroll-mt-24">
      <div className="surface-card overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <p className="label-xs">While you ride</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-(--text-strong) sm:text-3xl">
              Live route, updating as you move
            </h3>
            <p className="mt-2 text-sm leading-7 text-(--text-muted)">
              During an active session, INAZU follows your GPS path and surfaces distance, pace, and time in real time.
              Scroll to see an example route draw in—like an active session on the map.
            </p>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-[1fr_1.2fr] lg:w-96">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-(--border-soft) bg-(--surface-soft) px-4 py-4">
              <div className="relative h-20 w-20">
                <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
                  <circle cx="60" cy="60" r="46" stroke="var(--border-soft)" strokeWidth="10" fill="none" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="46"
                    stroke="var(--accent)"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
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
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-(--text-muted)">Live pace</p>
              <p className="font-display text-2xl font-bold text-(--text-strong)">{routeStats.speed.toFixed(0)} km/h</p>
            </div>

            <div className="flex flex-col justify-between gap-2">
              {[
                { icon: Route, label: "Route drawn", value: `${routeStats.progress.toFixed(0)}%` },
                { icon: Timer, label: "Distance", value: `${routeStats.distance.toFixed(1)} km` },
                { icon: Clock, label: "Elapsed", value: `${routeStats.duration.toFixed(0)} min` },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-(--border-soft) bg-(--surface-soft) px-3 py-2.5"
                  >
                    <span className="flex items-center gap-2 text-xs text-(--text-muted)">
                      <Icon className="h-3.5 w-3.5 text-(--accent)" />
                      {stat.label}
                    </span>
                    <span className="font-mono text-sm text-(--text-strong)">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-(--border-soft) bg-(--surface-soft)">
          <svg viewBox="-10 20 910 200" className="h-36 w-full sm:h-40" role="img" aria-label="Example of a live route being drawn">
            <defs>
              <linearGradient id="routeGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--sky)" stopOpacity="0.5" />
              </linearGradient>
              <pattern id="mesh" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="1" fill="var(--border-strong)" opacity="0.5" />
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
            </motion.g>
          </svg>
        </div>

        <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.1em] text-(--text-muted)">
          Scroll to follow the example path
        </p>
      </div>
    </section>
  );
}
