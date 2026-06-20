export type LandingPageSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type LandingPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  sections: LandingPageSection[];
  relatedSlugs: string[];
};

export const landingPages: Record<string, LandingPage> = {
  "motorcycle-ride-tracker": {
    slug: "motorcycle-ride-tracker",
    eyebrow: "For riders",
    title: "Motorcycle Ride Tracker for iPhone",
    description:
      "Track motorcycle rides on iPhone with INAZU. GPS route on the map, live speed and distance, saved recaps, and a garage for your bikes. Free on the App Store.",
    keywords: [
      "motorcycle ride tracker",
      "motorcycle ride tracker iphone",
      "track motorcycle rides",
      "inazu motorcycle",
      "gps motorcycle tracker",
      "motorcycle trip logger",
      "motorbike ride tracker app",
    ],
    intro:
      "INAZU is built for motorcycle enthusiasts who want a clean ride log—not clutter. Record every session with GPS, review your route and stats after you save, and keep your bikes organized in one garage.",
    sections: [
      {
        title: "Live tracking on the road",
        body: "Start from the Ride tab, pick your bike, and ride. INAZU shows your route on the map with live distance, speed, and duration. Background tracking keeps the session going when your screen is off—during an active ride only.",
        bullets: [
          "GPS route on the map while you ride",
          "Live distance, speed, and elapsed time",
          "Pause, resume, finish, and save with notes",
          "Emergency contacts quick access while riding",
        ],
      },
      {
        title: "Recaps worth reopening",
        body: "Every saved ride includes your full path, session stats, a speed vs distance chart, and any notes you added. Build a history of favorite loops and long hauls without treating every ride like a leaderboard.",
      },
      {
        title: "Your garage, your bikes",
        body: "Add each motorcycle to your profile garage and choose the right bike before every session. Vehicle-linked stats update when you save so your profile reflects the rides that matter to you.",
      },
    ],
    relatedSlugs: ["bike-ride-tracker", "ride-tracking", "vehicle-garage"],
  },
  "car-trip-tracker": {
    slug: "car-trip-tracker",
    eyebrow: "For drivers",
    title: "Car Trip Tracker for iPhone",
    description:
      "Log car trips with INAZU on iPhone. GPS tracking, live stats, saved route recaps, and a garage for your cars. Free ride companion for enthusiasts.",
    keywords: [
      "car trip tracker",
      "car trip tracker iphone",
      "drive tracker app",
      "inazu car tracker",
      "gps car trip logger",
      "road trip tracker app",
      "vehicle trip recorder iphone",
    ],
    intro:
      "Whether you are logging a scenic drive, a regular commute, or a weekend run, INAZU gives car enthusiasts the same focused tracking experience as riders—GPS sessions, saved recaps, and a garage that stays in sync.",
    sections: [
      {
        title: "Track every drive with GPS",
        body: "Pick a car from your garage and start a session from the Ride tab. INAZU records your route and shows live distance, speed, and duration on the map.",
        bullets: [
          "Full route visible during the session",
          "Background tracking during an active drive",
          "Save with a title and notes when you finish",
          "Weekly distance and progress stats",
        ],
      },
      {
        title: "Trip history you can review",
        body: "Saved drives include route details, max speed, distance, movement time, and a speed vs distance chart. Edit or delete your own activities anytime.",
      },
      {
        title: "One profile for bikes and cars",
        body: "INAZU is a home for enthusiasts on two wheels and four. Keep cars and bikes in the same garage and track whichever you are taking out today.",
      },
    ],
    relatedSlugs: ["motorcycle-ride-tracker", "ride-tracking", "vehicle-garage"],
  },
  "bike-ride-tracker": {
    slug: "bike-ride-tracker",
    eyebrow: "For cyclists",
    title: "Bike Ride Tracker for iPhone",
    description:
      "Track bicycle rides with INAZU on iPhone. GPS route recording, live stats, saved recaps, and weekly progress. Free app for bike enthusiasts.",
    keywords: [
      "bike ride tracker",
      "bike ride tracker iphone",
      "cycling tracker app",
      "inazu cycling",
      "bicycle ride logger",
      "gps bike tracker free",
      "cycle ride tracking app",
    ],
    intro:
      "INAZU helps cyclists record every ride with GPS, follow live stats on the map, and save clean recaps when the session is done—without the noise of a generic fitness app.",
    sections: [
      {
        title: "Start riding, start tracking",
        body: "Choose your bike from the garage and tap start. INAZU records your GPS path and updates distance, speed, and duration in real time on the map.",
        bullets: [
          "Works for road, gravel, and city loops",
          "Live route and stats during the session",
          "Save rides with notes and custom titles",
          "Location used only during an active ride",
        ],
      },
      {
        title: "Progress over time",
        body: "Weekly and monthly views show your distance and activity momentum. Whether you ride for memories or to push pace, your history stays organized in one place.",
      },
      {
        title: "Connect with other riders",
        body: "Public profiles, follow other riders, and search for users. Prefer privacy? Hide your stats and activities with a private profile option.",
      },
    ],
    relatedSlugs: ["motorcycle-ride-tracker", "ride-tracking", "vehicle-garage"],
  },
  "ride-tracking": {
    slug: "ride-tracking",
    eyebrow: "Core feature",
    title: "GPS Ride Tracking App for iPhone",
    description:
      "INAZU is a GPS ride tracking app for bikes and cars on iPhone. Live stats, route on the map, background recording during active rides, and saved session recaps.",
    keywords: [
      "gps ride tracker",
      "ride tracking app iphone",
      "inazu ride tracker",
      "inazu app",
      "track rides iphone",
      "live gps ride tracking",
      "ride recorder app",
    ],
    intro:
      "Ride tracking is the foundation of INAZU. Start a session, see your route and stats live on the map, and save a full recap when you are done—built for bike and car enthusiasts who want reliability first.",
    sections: [
      {
        title: "How ride tracking works",
        body: "Open the Ride tab, select a vehicle from your garage, and go. INAZU uses GPS during the active session to record your path and surface live distance, speed, and duration.",
        bullets: [
          "Route on the map while the session is active",
          "Pause and resume without losing the ride",
          "Background tracking when your screen is off",
          "No location tracking outside an active ride",
        ],
      },
      {
        title: "What you get when you save",
        body: "Finished rides become saved recaps with your path, stats, speed vs distance chart, and notes. Garage and profile totals update automatically on save.",
      },
      {
        title: "Available now on the App Store",
        body: "INAZU is free for iPhone and requires iOS 15.1 or later. Download today and start with focused ride tracking—more social and group features are on the way.",
      },
    ],
    relatedSlugs: ["motorcycle-ride-tracker", "car-trip-tracker", "bike-ride-tracker"],
  },
  "vehicle-garage": {
    slug: "vehicle-garage",
    eyebrow: "Core feature",
    title: "Vehicle Garage App for Bikes & Cars",
    description:
      "Manage bikes and cars in your INAZU garage. Pick a vehicle before each ride, keep stats linked, and show your fleet on your public profile.",
    keywords: [
      "vehicle garage app",
      "bike garage app",
      "car garage tracker",
      "inazu garage",
      "motorcycle garage app",
      "bike and car garage",
      "vehicle profile app iphone",
    ],
    intro:
      "Your garage is the home for every bike and car you ride with INAZU. Add your vehicles once, pick the right one before each session, and keep your activity history tied to the rides that matter.",
    sections: [
      {
        title: "Add bikes and cars to your profile",
        body: "Build a garage that reflects how you actually ride—sport bikes, daily drivers, bicycles, weekend cars, or all of the above. Each vehicle stays linked to the sessions you record with it.",
        bullets: [
          "Add multiple bikes and cars",
          "Choose a vehicle before each ride",
          "Garage visible on public profiles",
          "Stats update when you save a session",
        ],
      },
      {
        title: "Garage-linked stats",
        body: "When you finish and save a ride, vehicle and profile totals update. Review weekly distance and progress across your riding history without manual spreadsheets.",
      },
      {
        title: "Built for enthusiasts",
        body: "INAZU treats your garage as part of your identity as a rider or driver—not an afterthought. Share your profile from the app today; ride sharing is on the roadmap next.",
      },
    ],
    relatedSlugs: ["ride-tracking", "motorcycle-ride-tracker", "car-trip-tracker"],
  },
};

export const landingPageSlugs = Object.keys(landingPages);

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages[slug];
}
