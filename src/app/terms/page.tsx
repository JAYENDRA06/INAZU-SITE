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
        <div className="mt-8 space-y-6 text-(--text-muted)">
          <p>By using INAZU, you agree to use the app responsibly and respect other users. Do not use the app for illegal activities or unsafe driving/riding.</p>
          <p>INAZU is not liable for any accidents or misuse. Features and data are provided as-is and may change over time. For questions, contact support@inazu.app.</p>
        </div>
      </div>
    </main>
  );
}
