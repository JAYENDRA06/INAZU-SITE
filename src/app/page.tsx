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
import { appStoreUrl } from "@/lib/site-config";
import { homePageJsonLdGraph } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "INAZU — Home for Bike & Car Enthusiasts",
  description:
    "Built for bike and car enthusiasts. Track rides with GPS, save recaps, manage your garage, and follow progress. Download INAZU free on the App Store.",
  path: "/",
  ogImageAlt: "INAZU for bike and car enthusiasts",
});

const workflow = [
  {
    step: "01",
    title: "Start tracking",
    description: "Pick a vehicle from your garage and start from the Ride tab. GPS records your session—including in the background while your screen is off.",
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
                Now on the App Store · iPhone
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl font-display text-4xl font-bold leading-[1.05] text-(--text-strong) sm:text-5xl lg:text-[3.4rem]">
                One home for
                <span className="text-(--accent)"> bike & car enthusiasts</span>
              </h1>
              <p className="max-w-lg text-base leading-7 text-(--text-muted) sm:text-lg">
                Track every ride with GPS, live stats, and your garage in one place. Save recaps, follow weekly
                progress, share your profile, and connect with other riders—the first step toward one home for bikes and cars.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download on the App Store
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#capabilities" className="btn-ghost">
                Explore features
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
            description="GPS ride tracking, saved session recaps, your garage, and progress views—built for how you actually ride."
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
                <p className="label-xs">Download</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-(--text-strong) sm:text-4xl">
                  Get INAZU on iPhone
                </h2>
                <p className="mt-4 text-base leading-7 text-(--text-muted)">
                  Track rides, save recaps, and manage your garage—free on the App Store. Built for bike and car
                  enthusiasts who want one home for their sessions.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3">
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary min-w-52"
                >
                  Download on the App Store
                </a>
                <p className="text-center text-xs text-(--text-muted)">Free · iPhone · Requires iOS 15.1+</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SiteFooter />
    </main>
  );
}
