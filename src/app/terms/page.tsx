import { SectionHeading } from "@/components/section-heading";

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <SectionHeading 
        eyebrow="Terms"
        title="Terms & Conditions"
        description="The rules and guidelines for using INAZU."
      />
      <div className="mt-8 space-y-6 text-(--text-muted)">
        <p>By using INAZU, you agree to use the app responsibly and respect other users. Do not use the app for illegal activities or unsafe driving/riding.</p>
        <p>INAZU is not liable for any accidents or misuse. Features and data are provided as-is and may change over time. For questions, contact hello@inazu.app.</p>
      </div>
    </main>
  );
}
