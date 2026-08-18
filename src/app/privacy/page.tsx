import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { PRIVACY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Union Vet collects, uses, protects and discloses your personal information, including our SMS messaging program and your privacy rights.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy · Union Vet", url: "/privacy" },
  twitter: { title: "Privacy Policy · Union Vet" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      crumbLabel="Privacy Policy"
      crumbHref="/privacy"
      updated={PRIVACY.updated}
      intro="How Union Vet collects, uses and protects your information — and the privacy rights you have."
      blocks={PRIVACY.blocks}
    />
  );
}
