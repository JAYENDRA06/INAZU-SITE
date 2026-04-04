import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

export default function PrivacyPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-15 sm:px-6 lg:px-8">
      <SiteHeader />
      <div className="mx-auto mt-12 max-w-7xl">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy Policy"
          description="How INAZU collects, uses, shares, and protects your information."
        />
        <div className="mt-3 text-sm text-(--text-muted)">Last updated: April 04, 2026</div>

        <div className="mt-8 space-y-8 text-(--text-muted)">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">1. Overview</h2>
            <p>
              This Privacy Policy explains how INAZU ("we," "us," or "our") may access,
              collect, store, use, and share your personal information when you use our
              services, including our mobile application.
            </p>
            <p>
              INAZU is a ride tracking application that can use device location while riding
              to track route, speed, distance, duration, and related ride metrics. Users may
              choose whether activities are public or private.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">2. Information We Collect</h2>
            <p>Depending on how you use the app, we may collect:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Account details such as name, username, email address, and password.</li>
              <li>Profile and contact details, such as phone number and preferences.</li>
              <li>Ride and activity data, such as route, speed, time, and distance.</li>
              <li>Precise geolocation data used to provide ride tracking features.</li>
              <li>Device and usage data, such as app interaction and technical diagnostics.</li>
            </ul>
            <p>
              You are responsible for ensuring any information you provide is accurate and up
              to date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">3. How We Use Your Information</h2>
            <p>We process personal information to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Create and manage your account.</li>
              <li>Deliver ride tracking, activity history, and statistics features.</li>
              <li>Provide support, communicate service updates, and respond to requests.</li>
              <li>Maintain app security, prevent fraud, and troubleshoot issues.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">4. Legal Bases</h2>
            <p>
              Where required by applicable law, we rely on one or more legal bases for
              processing, including consent, performance of a contract, legal obligations,
              legitimate interests, and protection of vital interests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">5. Sharing Of Information</h2>
            <p>We may share information in limited situations, such as:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>With service providers helping us operate and secure the app.</li>
              <li>In business transfers such as merger, acquisition, or asset sale.</li>
              <li>When required by law or to protect rights, safety, and security.</li>
            </ul>
            <p>
              We do not sell your personal information. We also do not knowingly collect
              personal information from third parties for this service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">6. Data Retention</h2>
            <p>
              We keep personal information only for as long as needed for the purposes
              described in this policy, including while your account remains active, unless a
              longer period is required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">7. Data Security</h2>
            <p>
              We use reasonable technical and organizational safeguards to protect data.
              However, no method of transmission or storage is completely secure, so absolute
              security cannot be guaranteed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">8. Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect data from children under 18. If we learn that
              information from a minor has been collected, we will take reasonable steps to
              delete it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">9. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have rights such as access, correction,
              deletion, portability, restriction, objection, and withdrawal of consent.
            </p>
            <p>
              To exercise your rights, contact us using the details below. We may need to
              verify your identity before processing requests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">10. US State Privacy Rights</h2>
            <p>
              If you are a resident of certain US states, you may have specific rights under
              applicable state privacy laws, including rights to know, access, correct,
              delete, and appeal certain decisions related to your personal data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">11. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. If material changes are
              made, we will update the "Last updated" date and, where required, provide
              additional notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">12. Contact Us</h2>
            <p>
              If you have questions or concerns about this policy, contact us at
              support@inazu.app.
            </p>
            <p>Organization: INAZU</p>
          </section>
        </div>
      </div>
    </main>
  );
}
