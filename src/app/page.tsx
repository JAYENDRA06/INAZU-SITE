import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { AnimatedSection } from "@/components/animated-section";
import { CapabilityBento } from "@/components/capability-bento";
import { FeatureExplorer } from "@/components/feature-explorer";
import { HeroScene } from "@/components/hero-scene";
import { LiveStats } from "@/components/live-stats";
import { ProgressShowcase } from "@/components/progress-showcase";
import { RideUseCases } from "@/components/ride-use-cases";
import { SavedRideRecap } from "@/components/saved-ride-recap";
import { ScrollRoad } from "@/components/scroll-road";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildPageMetadata } from "@/lib/seo";
import { homePageJsonLdGraph } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "INAZU — Ride Tracking App for Bikes & Cars",
  description:
    "Track bike and car rides with INAZU. Offline and background GPS, saved session recaps with stats and charts, garage-linked vehicle data, and weekly progress. Join early access at inazu.app.",
  path: "/",
  ogImageAlt: "INAZU ride tracking app for bikes and cars",
});

const workflow = [
  {
    step: "01",
    title: "Start tracking",
    description: "Begin a session with offline-ready GPS—recording continues in the background when needed.",
  },
  {
    step: "02",
    title: "Ride live",
    description: "Follow your route on the map with distance, pace, and elapsed time updating during the session.",
  },
  {
    step: "03",
    title: "Save & review",
    description:
      "Finish and save to get your path, stats, speed vs distance chart, and notes. Garage and profile totals update on save.",
  },
];

export default function Home() {
  return (
    <main id="top" className="section-shell relative overflow-x-hidden" aria-label="INAZU homepage">
      <JsonLd data={homePageJsonLdGraph()} />
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-(--border-soft) bg-(--surface) px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-(--text-muted)">
                Bikes & cars · Early access
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl font-display text-4xl font-bold leading-[1.05] text-(--text-strong) sm:text-5xl lg:text-[3.4rem]">
                Your rides,
                <span className="text-(--accent)"> tracked & remembered</span>
              </h1>
              <p className="max-w-lg text-base leading-7 text-(--text-muted) sm:text-lg">
                INAZU records sessions offline or in the background, saves clean recaps, syncs stats to your garage,
                and surfaces weekly and monthly progress along the way.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#download" className="btn-primary">
                Request early access
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#live-tracking" className="btn-ghost">
                See it in action
              </a>
            </div>

            <LiveStats />
          </div>

          <div className="min-w-0 lg:pt-4">
            <HeroScene />
          </div>
        </section>

        <div className="mt-16 space-y-10 sm:mt-20">
          <ScrollRoad />
          <SavedRideRecap />
        </div>

        <AnimatedSection id="use-cases" className="mt-24 scroll-mt-24" delay={0.05}>
          <SectionHeading
            eyebrow="How riders use INAZU"
            title="Memories, performance—or both"
            description="There aren’t separate modes. Use it however you ride: save a favorite loop, chase pace, or do a bit of each."
          />
          <div className="mt-10">
            <RideUseCases />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16" delay={0.08}>
          <ProgressShowcase />
        </AnimatedSection>

        <AnimatedSection id="capabilities" className="mt-24 scroll-mt-24" delay={0.1}>
          <SectionHeading
            eyebrow="Core features"
            title="Built for real rides"
            description="Offline tracking, saved session recaps, garage-linked stats, and progress views that match how you actually use the app."
          />
          <div className="mt-10">
            <CapabilityBento />
          </div>
        </AnimatedSection>

        <AnimatedSection id="roadmap" className="mt-24 grid scroll-mt-24 gap-8" delay={0.15}>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              eyebrow="How it works"
              title="From live tracking to saved recap"
              description="Start a session, ride with a live map, then save to get your recap and updated stats."
            />
            <ol className="grid gap-3">
              {workflow.map((item) => (
                <li
                  key={item.step}
                  className="surface-card flex gap-4 rounded-2xl p-5 transition hover:border-(--accent)"
                >
                  <span className="font-mono text-sm font-medium text-(--accent)">{item.step}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-(--text-strong)">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-(--text-muted)">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <FeatureExplorer />
        </AnimatedSection>

        <AnimatedSection id="download" className="mt-24 scroll-mt-24" delay={0.2}>
          <div className="relative overflow-hidden rounded-3xl border border-(--border-soft) bg-(--surface) px-6 py-12 sm:px-10 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background: "radial-gradient(ellipse 70% 80% at 100% 0%, var(--accent-glow), transparent 55%)",
              }}
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="label-xs">Early access</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-(--text-strong) sm:text-4xl">
                  Help shape INAZU before launch
                </h2>
                <p className="mt-4 text-base leading-7 text-(--text-muted)">
                  We&apos;re onboarding riders who want reliable tracking and clear recaps. Reach out if that sounds
                  like you.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3">
                <a href="mailto:hello@inazu.app" className="btn-primary min-w-52">
                  hello@inazu.app
                </a>
                <p className="text-center text-xs text-(--text-muted)">Beta · iOS focus · Bikes & cars</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SiteFooter />
    </main>
  );
}
