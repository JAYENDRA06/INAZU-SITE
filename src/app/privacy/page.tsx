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
          description="How INAZU collects, uses, discloses, and safeguards your information."
        />
        <div className="mt-3 text-sm text-(--text-muted)">Last updated: April 27, 2026</div>

        <div className="mt-8 space-y-8 text-(--text-muted)">
          <section className="space-y-3">
            <p>
              Inazu (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Inazu mobile application (the &quot;App&quot;).
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our App. By using Inazu, you agree to the terms of this
              Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">1. Information We Collect</h2>
            <h3 className="text-base font-medium text-(--text-main)">a. Information You Provide</h3>
            <p>We may collect the following information when you use the App:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Email address (for authentication via OTP)</li>
              <li>Username and password (if you choose this login method)</li>
              <li>Optional profile details such as: name, vehicle information, profile preferences</li>
            </ul>
            <p>Providing profile details is optional.</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-medium text-(--text-main)">b. Location Data (Mandatory)</h3>
            <p>
              Inazu requires access to your device&apos;s location to provide core ride tracking
              functionality. We collect:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Real-time GPS location during active rides</li>
              <li>Route and movement data</li>
              <li>Speed and distance metrics</li>
            </ul>
            <p>This data is essential for the functioning of the App.</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-medium text-(--text-main)">c. Automatically Collected Information</h3>
            <p>We may collect limited technical data such as:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Device type and OS version</li>
              <li>App usage logs (for debugging and performance)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Provide ride tracking and analytics</li>
              <li>Authenticate users securely (OTP / password login)</li>
              <li>Maintain and improve app performance</li>
              <li>Ensure safety, prevent abuse, and debug issues</li>
            </ul>
            <p>We do <strong>not</strong> use your data for advertising or marketing purposes.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">3. Data Sharing</h2>
            <p>
              We do <strong>not sell, rent, or trade your personal data</strong>. We may share data
              only:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>With infrastructure/service providers (e.g., hosting, email delivery for OTPs)</li>
              <li>If required by law or legal process</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">4. Data Retention</h2>
            <p>
              We retain your data only as long as necessary to: provide services, comply with
              legal obligations. You may request deletion at any time (see Section 6).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">5. Security</h2>
            <p>We implement industry-standard security practices, including:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Secure authentication mechanisms</li>
              <li>Encrypted communication (HTTPS)</li>
              <li>Access control for internal systems</li>
            </ul>
            <p>However, no system is 100% secure.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Update your profile information</li>
              <li>Change your password</li>
              <li>Control profile visibility (privacy settings)</li>
              <li>Request deletion of your account and associated data</li>
            </ul>
            <p>Upon deletion, your data will be permanently removed within a reasonable timeframe.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">7. Children&apos;s Privacy</h2>
            <p>
              Inazu is not intended for users under the age of 13 (or applicable minimum age in
              your region). We do not knowingly collect data from children.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">8. Third-Party Services</h2>
            <p>We may use third-party services for:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Email delivery (OTP)</li>
              <li>Cloud infrastructure</li>
            </ul>
            <p>These providers only access data necessary for their function.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be reflected with
              an updated &quot;Effective Date.&quot;
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-main)">10. Contact Us</h2>
            <p>If you have questions, contact us at:</p>
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
