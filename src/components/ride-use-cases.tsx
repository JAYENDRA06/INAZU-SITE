import { Camera, Gauge } from "lucide-react";

const useCases = [
  {
    icon: Camera,
    title: "Ride memories",
    description:
      "Track a scenic run or a favorite loop and save it for later—your path, notes, and session summary without treating every ride like a leaderboard.",
  },
  {
    icon: Gauge,
    title: "Performance tracking",
    description:
      "Watch max speed, distance, movement time, and trends across weeks and months. Garage-linked stats update when you save so your vehicle and profile stay in sync.",
  },
];

export function RideUseCases() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {useCases.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="surface-card flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface-soft))] text-(--accent)">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-(--text-strong) sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-(--text-muted) sm:text-base">{item.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
