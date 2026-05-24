import { LineChart, MapPin, NotebookPen, Timer } from "lucide-react";

const recapItems = [
  {
    icon: MapPin,
    title: "Path taken",
    description: "Your full route on the map—the shape of the ride at a glance.",
  },
  {
    icon: Timer,
    title: "Session stats",
    description: "Max speed, distance, total time, and movement time in one recap view.",
  },
  {
    icon: LineChart,
    title: "Speed vs distance",
    description: "See how pace shifted across the ride, right next to your core numbers.",
  },
  {
    icon: NotebookPen,
    title: "Ride notes",
    description: "Notes you added stay on the session so you can remember why the ride mattered.",
  },
];

export function SavedRideRecap() {
  return (
    <div className="surface-card rounded-3xl p-6 sm:p-8">
      <p className="label-xs">After you save</p>
      <h3 className="mt-2 font-display text-2xl font-bold text-(--text-strong) sm:text-3xl">
        Your session recap, ready to open
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-(--text-muted) sm:text-base">
        Finish a ride and get the path, the numbers, the chart, and your notes—everything in one place when you come
        back to it.
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {recapItems.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.title}
              className="flex gap-3 rounded-2xl border border-(--border-soft) bg-(--surface-soft) p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-(--surface) text-(--accent)">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <h4 className="font-semibold text-(--text-strong)">{item.title}</h4>
                <p className="mt-1 text-sm leading-6 text-(--text-muted)">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
