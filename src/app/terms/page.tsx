import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { TERMS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Union Vet, including our SMS messaging program opt-in, opt-out, message frequency and support details.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms and Conditions · Union Vet", url: "/terms" },
  twitter: { title: "Terms and Conditions · Union Vet" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      crumbLabel="Terms and Conditions"
      crumbHref="/terms"
      updated={TERMS.updated}
      intro="The terms that govern our SMS messaging program and your use of the Union Vet website."
      blocks={TERMS.blocks}
    />
  );
}
