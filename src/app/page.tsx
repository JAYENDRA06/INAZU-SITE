import {
  Activity,
  ArrowRight,
  Gauge,
  MapPinned,
  Radio,
  ShieldCheck,
  TimerReset,
  Trophy,
  Zap,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { HeroScene } from "@/components/hero-scene";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

const trustStats = [
  { value: "1pt/s", label: "precision-ready GPS sampling workflow" },
  { value: "99%", label: "signal confidence after noise filtering" },
  { value: "100%", label: "offline tracking support" },
  { value: "24/7", label: "background-safe tracking architecture" },
];

const capabilities = [
  {
    icon: Gauge,
    title: "Real-world route benchmarking",
    description:
      "Replay A to B efforts on the same roads and compare time, pace, and consistency against your past bests and future rivals.",
  },
  {
    icon: Activity,
    title: "Production-grade ride analytics",
    description:
      "Segment sessions, inspect sprint windows, and review ride history with storage strategies built for large event streams.",
  },
  {
    icon: Radio,
    title: "Live competition architecture",
    description:
      "The platform is designed for multiplayer rooms, live challenge syncing, and event-driven telemetry as the community grows.",
  },
];

const formats = [
  {
    title: "Casual rides & memory making",
    description: "Just want to enjoy the road? Record, tag, and share your favorite rides with friends or keep them private as your own digital scrapbook.",
  },
  {
    title: "Machine stats & garage",
    description: "Add your bikes and cars, then see lifetime stats, max speed, and total distance for each. Your garage, your story.",
  },
  {
    title: "Chase streaks & milestones",
    description: "Stay motivated with weekly/monthly streaks, personal bests, and ride challenges—whether you’re a casual explorer or a speed chaser.",
  },
];

const upcomingFeatures = [
  {
    key: "rider-groups",
    title: "Rider groups",
    detail: "Create private circles for your local crew and weekly goals.",
    eta: "Under development",
  },
  {
    key: "group-rides",
    title: "Group rides",
    detail: "Host rides, sync routes, and keep everyone paced in one flow.",
    eta: "Soon",
  },
  {
    key: "lap-recording",
    title: "Lap recording",
    detail: "Track each lap split with cleaner timing and easier comparisons.",
    eta: "Soon",
  },
  {
    key: "group-go-karting-recording",
    title: "Group go karting recording",
    detail: "Capture sessions together and compare laps with your full squad.",
    eta: "Planned",
  },
];

const pillars = [
  {
    icon: MapPinned,
    title: "Capture Every Moment",
    description: "Relive your favorite rides and drives—every journey is saved so you can look back and share the memories that matter most.",
  },
  {
    icon: ShieldCheck,
    title: "Connect With Your Crew",
    description: "Ride solo or with friends, and keep your adventures together in one place. Celebrate milestones and discover new routes as a community.",
  },
  {
    icon: TimerReset,
    title: "Your Machines, Your Story",
    description: "Add your bikes and cars, track their journeys, and see how far you’ve gone—every machine has a story to tell.",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <SiteHeader />

        <section className="grid flex-1 items-center gap-16 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:py-20">
          {/* Left column: content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-(--border-strong) bg-(--surface-soft) px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-(--accent)">
              <Zap className="h-4 w-4" />
              Built for riders by a rider
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl font-display text-3xl uppercase leading-[1.1] text-(--text-strong) sm:text-4xl lg:text-5xl">
                Performance tracking for machines that deserve more than fitness stats.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-(--text-muted) sm:text-lg">
                INAZU is a platform for bike and car enthusiasts, whether into casual ride tracking or competitive racing. Providing real-world speed,
                route benchmarking, competition, and analytics you can trust.
              </p>
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

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="metric-card rounded-[1.6rem] border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] p-4"
                >
                  <p className="font-display text-2xl uppercase text-(--text-strong)">{stat.value}</p>
                  <p className="mt-2 text-sm leading-5  text-(--text-muted)">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroScene />
        </section>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-24 sm:px-6 lg:px-8">
        <AnimatedSection id="capabilities" className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]" delay={0.1}>
          <SectionHeading
            eyebrow="Capabilities"
            title="Analytics engineered for riders and drivers chasing measurable improvement"
            description="INAZU focuses on the parts enthusiasts actually care about: trustworthy telemetry, competitive route data, and a platform that scales toward live performance gaming in the real world."
          />

          <div className="grid gap-5 sm:grid-cols-2">
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

        <AnimatedSection id="platform" className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]" delay={0.15}>
          <div className="rounded-4xl border border-(--border-soft) bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_92%,transparent),color-mix(in_srgb,var(--surface-elevated)_96%,transparent))] p-6 sm:p-10">
            <SectionHeading
              eyebrow="How It Works"
              title="Built for every ride, every time"
              description="INAZU is designed to be reliable, simple, and ready for your next adventure—no matter how many rides you take or how many friends join in. Your memories and stats are always safe, organized, and easy to revisit."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title} className="rounded-3xl border border-(--border-soft) bg-(--surface-soft) p-4">
                    <Icon className="h-5 w-5 text-(--accent)" />
                    <h3 className="mt-4 font-display leading-6 text-lg uppercase text-(--text-strong)">{pillar.title}</h3>
                    <p className="mt-3 text-xs leading-5 text-(--text-muted)">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="story-grid rounded-4xl border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] p-4 sm:p-8">
            <div className="rounded-[1.6rem] border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface-soft)_88%,transparent)] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">How INAZU Feels</p>
              <div className="mt-6 space-y-5">
                {[
                  "Record your rides and drives with a tap—no fuss, just memories.",
                  "Share your favorite moments and connect with fellow enthusiasts.",
                  "See your progress and celebrate every milestone, big or small.",
                  "Keep your machines’ stories alive, from first ride to latest adventure.",
                ].map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--border-strong) font-display text-sm text-(--text-strong)">
                      0{index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-(--text-muted)">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="roadmap" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]" delay={0.2}>
          <div className="rounded-4xl border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] p-6 sm:p-10">
            <SectionHeading
              eyebrow="Current and future roadmap"
              title="Every drive and ride becomes a measurable session"
              description="INAZU starts with the formats enthusiasts already use today, while leaving room for track-style experiences and synchronous competition later."
            />

            <div className="mt-10 grid gap-4">
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

          <div className="grid gap-5 sm:grid-cols-2">
            {upcomingFeatures.map((feature) => (
              <article
                key={feature.key}
                className="rounded-[1.8rem] border border-(--border-soft) bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_96%,transparent),color-mix(in_srgb,var(--surface-soft)_95%,transparent))] p-6"
              >
                <Trophy className="h-5 w-5 text-(--accent)" />
                <h3 className="mt-5 font-display text-2xl uppercase leading-tight text-(--text-strong)">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-(--text-muted)">
                  {feature.key === "rider-groups" && "Bring your friends together and set new goals as a team—riding is better with your crew."}
                  {feature.key === "group-rides" && "Plan, sync, and enjoy group rides—no one gets left behind, and every adventure is shared."}
                  {feature.key === "lap-recording" && "Break down your sessions lap by lap—see your progress and chase new personal bests every time."}
                  {feature.key === "group-go-karting-recording" && "Turn every go-kart session into a friendly rivalry—compare laps and relive the fun with your squad."}
                </p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="download" className="pb-8" delay={0.25}>
          <div className="overflow-hidden rounded-[2.4rem] border border-(--border-strong) bg-[linear-gradient(135deg,color-mix(in_srgb,var(--surface)_92%,transparent),color-mix(in_srgb,var(--surface-elevated)_96%,transparent))] p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col items-start gap-8 lg:items-center">
              <div className="flex flex-col items-start lg:items-center">
                <h2 className="mt-4 font-display text-3xl uppercase leading-none text-(--text-strong) sm:text-4xl lg:text-5xl lg:text-center">
                  Ready to enjoy your rides with <span className="text-(--accent)">INAZU?</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-(--text-muted) sm:text-lg lg:text-center">
                  {"Join your fellow riders and let's make every ride count."}
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
