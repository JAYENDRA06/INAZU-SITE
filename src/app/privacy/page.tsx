import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SiteHeader />
      <div className="mx-auto mt-12 max-w-2xl">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy Policy"
          description="How we protect your data and respect your privacy."
        />
        <div className="mt-8 space-y-6 text-(--text-muted)">
          <p>Your privacy is important to us. INAZU does not sell your data. We only collect information necessary to provide ride tracking, social features, and app improvements. You control what you share and can delete your account at any time.</p>
          <p>We use secure storage and never share your rides or personal information without your consent. For questions, contact us at hello@inazu.app.</p>
        </div>
      </div>
    </main>
  );
}
