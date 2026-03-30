import {
  Activity,
  ArrowRight,
  Gauge,
  Heart,
  Radio,
  Target,
  Zap,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { FeatureExplorer } from "@/components/feature-explorer";
import { HeroScene } from "@/components/hero-scene";
import { ScrollRoad } from "@/components/scroll-road";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

const capabilities = [
  {
    icon: Gauge,
    title: "Offline + background tracking",
    description:
      "Track rides even with limited network and keep recording safely while the app runs in background.",
  },
  {
    icon: Activity,
    title: "Ride recap with garage stats",
    description:
      "Save every session and instantly update ride stats, selected vehicle stats, and your overall profile numbers.",
  },
  {
    icon: Radio,
    title: "Weekly/monthly progress + friends",
    description:
      "Follow your momentum with weekly/monthly summaries and connect with others through friend requests.",
  },
];

const rideModes = [
  {
    icon: Heart,
    title: "Casual ride memories",
    description: "Record and save your favorite rides, then quickly revisit clean stats and highlights.",
    tone: "bg-[color-mix(in_srgb,var(--accent)_18%,transparent)]",
  },
  {
    icon: Target,
    title: "Pure performance focus",
    description: "Push speed, distance, and consistency while tracking progress across weeks and months.",
    tone: "bg-[color-mix(in_srgb,var(--sky)_18%,transparent)]",
  },
];

const formats = [
  {
    title: "Track rides anytime",
    description: "Offline-ready tracking with background support for bikes and cars.",
  },
  {
    title: "Garage-linked performance",
    description: "Each saved ride updates stats for your selected vehicle and your overall profile.",
  },
  {
    title: "Ride previews + progress",
    description: "Open any saved session, review key details, and track weekly/monthly momentum.",
  },
];

const heroHighlights = [
  {
    icon: Gauge,
    title: "Track in any condition",
    description: "Offline-ready recording with stable background tracking for longer sessions.",
  },
  {
    icon: Activity,
    title: "Review every saved ride",
    description: "Get ride recap details instantly after saving each session.",
  },
  {
    icon: Radio,
    title: "See progress over time",
    description: "Weekly and monthly snapshots keep your momentum visible and actionable.",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-15 sm:px-6 lg:px-8">
        <SiteHeader />

        <section className="grid flex-1 items-center gap-16 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:py-20">
          {/* Left column: content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-(--border-strong) bg-(--surface-soft) px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-(--accent)">
              <Zap className="h-4 w-4" />
              Built for bikes and cars
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl font-display text-3xl uppercase leading-[1.1] text-(--text-strong) sm:text-4xl lg:text-5xl">
                Track every ride. Grow every week.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-(--text-muted) sm:text-lg">
                INAZU helps bike and car enthusiasts track rides offline or in background, save clean ride recaps, update garage-linked stats, and stay
                consistent with weekly/monthly progress.
              </p>
            </div>

            <div className="rounded-3xl border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface-soft)_88%,transparent)] p-3"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-(--border-strong) bg-(--surface-soft)">
                        <Icon className="h-4 w-4 text-(--accent)" />
                      </span>
                      <p className="mt-2 font-display text-sm uppercase text-(--text-strong)">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-(--text-muted)">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--accent) px-5 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-(--background) transition hover:scale-[1.02] hover:bg-(--accent-strong)"
              >
                Request early access
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-full border border-(--border-strong) bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-(--text-strong) transition hover:border-(--accent) hover:text-(--accent)"
              >
                Explore the platform
              </a>
            </div>
          </div>

          <HeroScene />
        </section>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col px-4 pb-8 sm:px-6 lg:px-8">
        <ScrollRoad />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-24 sm:px-6 lg:px-8">
        <AnimatedSection id="modes" className="grid gap-6 lg:grid-cols-2" delay={0.05}>
          {rideModes.map((mode) => {
            const Icon = mode.icon;

            return (
              <article
                key={mode.title}
                className="rounded-4xl border border-(--border-soft) bg-[linear-gradient(145deg,color-mix(in_srgb,var(--surface)_90%,transparent),color-mix(in_srgb,var(--surface-elevated)_92%,transparent))] p-6 sm:p-8"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border-strong) ${mode.tone}`}>
                  <Icon className="h-5 w-5 text-(--text-strong)" />
                </div>
                <h3 className="mt-5 font-display text-2xl uppercase text-(--text-strong)">{mode.title}</h3>
                <p className="mt-3 text-sm leading-6 text-(--text-muted)">{mode.description}</p>
              </article>
            );
          })}
        </AnimatedSection>
        <AnimatedSection id="capabilities" className="grid gap-8" delay={0.1}>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything you need to track, review, and improve"
            description="Clear ride recaps, vehicle-aware stats, and progress views that help casual riders and performance-focused users at a glance."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.8rem] border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border-strong) bg-(--surface-soft) text-(--accent)">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl uppercase leading-tight text-(--text-strong)">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-(--text-muted)">{item.description}</p>
                </article>
              );
            })}
          </div>
        </AnimatedSection>

        

        <AnimatedSection id="roadmap" className="grid gap-8" delay={0.2}>
          <div className="rounded-4xl border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] p-6 sm:p-10">
            <SectionHeading
              eyebrow="Now + next"
              title="Built for today, evolving for community riding"
              description="INAZU already covers reliable tracking and recap workflows, while the next wave focuses on groups, laps, and social activity."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {formats.map((format, index) => (
                <div
                  key={format.title}
                  className="relative flex items-start gap-4 rounded-[1.4rem] border border-(--border-soft) bg-(--surface-soft) p-5"
                >
                  <span className="lg:flex hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] font-display text-sm uppercase text-(--accent)">
                    {index + 1}
                  </span>
                  <span className="lg:hidden block absolute opacity-50 text-(--accent) text-2xl top-5 right-5">{index + 1}</span>
                  <div>
                    <h3 className="font-display text-lg uppercase text-(--text-strong)">{format.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-(--text-muted)">{format.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FeatureExplorer />
        </AnimatedSection>

        <AnimatedSection id="download" delay={0.25}>
          <div className="overflow-hidden rounded-[2.4rem] border border-(--border-strong) bg-[linear-gradient(135deg,color-mix(in_srgb,var(--surface)_92%,transparent),color-mix(in_srgb,var(--surface-elevated)_96%,transparent))] p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col items-start gap-8 lg:items-center">
              <div className="flex flex-col items-start lg:items-center">
                <h2 className="mt-4 font-display text-3xl uppercase leading-none text-(--text-strong) lg:text-4xl lg:text-center">
                  Ready to track smarter with <span className="text-(--accent)">INAZU?</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-(--text-muted) sm:text-lg lg:text-center">
                  {"Join early access and help shape the next generation of bike and car ride tracking."}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:min-w-72">
                <a
                  href="mailto:hello@inazu.app"
                  className="inline-flex items-center justify-center rounded-full bg-(--accent) px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-(--background) transition hover:scale-[1.02] hover:bg-(--accent-strong)"
                >
                  hello@inazu.app
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
