import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

export default function TermsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-15 sm:px-6 lg:px-8">
      <SiteHeader />
      <div className="mx-auto mt-12 max-w-7xl">
        <SectionHeading
          eyebrow="Terms"
          title="Terms & Conditions"
          description="The rules and guidelines for using INAZU."
        />
        <div className="mt-3 text-sm text-(--text-muted)">Last updated: April 27, 2026</div>

        <div className="mt-8 space-y-8 text-(--text-muted)">
          <section className="space-y-3">
            <p>
              {`By using the Inazu application ("App"), you agree to these Terms and Conditions.`}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">1. Use of the App</h2>
            <p>Inazu provides ride tracking and performance analytics for vehicles.</p>
            <p>You agree to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Use the App only for lawful purposes</li>
              <li>Not misuse or attempt to disrupt the service</li>
              <li>Provide accurate account information</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">2. Account Responsibility</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities under your account</li>
            </ul>
            <p>We are not liable for unauthorized access caused by user negligence.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">3. Location Usage</h2>
            <p>The App requires continuous location access to function properly.</p>
            <p>By using Inazu, you consent to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Collection of your location data during rides</li>
              <li>Processing of this data for analytics and tracking</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">4. Privacy Controls</h2>
            <p>You can:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Enable/disable profile visibility features</li>
              <li>Control whether others can view your activities and stats</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">5. Account Deletion</h2>
            <p>You may delete your account at any time.</p>
            <p>Upon deletion:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Your personal data and ride history will be permanently removed</li>
              <li>Some residual data may remain temporarily in backups</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">6. No Fees (Current Version)</h2>
            <p>The App is currently free to use.</p>
            <p>We reserve the right to introduce paid features in the future, with prior notice.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">7. Disclaimer of Liability</h2>
            <p>{`Inazu is provided "as is."`}</p>
            <p>We are not responsible for:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>GPS inaccuracies</li>
              <li>Data loss</li>
              <li>Injuries, accidents, or damages arising from use of the App</li>
            </ul>
            <p>Users should always prioritize safety while riding.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">8. Service Availability</h2>
            <p>
              We do not guarantee uninterrupted service. The App may be modified, suspended, or
              discontinued at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">9. Termination</h2>
            <p>We may suspend or terminate accounts that:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Violate these terms</li>
              <li>Abuse the platform</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the App implies
              acceptance of the updated Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">11. Governing Law</h2>
            <p>These Terms shall be governed by the laws of India.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">12. Contact</h2>
            <p>For support or legal inquiries:</p>
            <p>
              <a href="mailto:support@inazu.app" className="text-blue-400 hover:underline">
                support@inazu.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
