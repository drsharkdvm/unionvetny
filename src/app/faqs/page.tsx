import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/cta-band";
import { SITE, ACTIONS } from "@/lib/site";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Union Vet in Oakland Gardens, Queens — hours, emergency care, booking, new patients, prescriptions and more.",
  alternates: { canonical: "/faqs" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="FAQs"
        eyebrowIcon="MessageSquare"
        title="Frequently asked questions."
        intro="Everything you need to know about visiting Union Vet — from hours and emergencies to booking, new patients and prescriptions. Can't find your answer? Just call us."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQs", href: "/faqs" }]}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          {/* Accordion */}
          <Accordion multiple className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={String(i)}
                className="overflow-hidden rounded-xl border border-hairline bg-white px-5 shadow-[var(--shadow-card)] transition-colors not-last:border-b sm:px-6 data-open:border-blue/40"
              >
                <AccordionTrigger className="items-center py-5 text-base font-bold text-navy hover:no-underline sm:text-lg **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[0.98rem] leading-relaxed text-slate">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Help aside */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-hairline bg-navy p-7 text-white shadow-[var(--shadow-float)]">
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-red text-white">
                <Icon name="PhoneCall" className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-xl tracking-tight">Still have questions?</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Our team is happy to help. Call or text us during clinic hours, or send a
                message and we&apos;ll get right back to you.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Cta href={SITE.phone.href} variant="primary" size="md" icon="PhoneCall" iconPosition="start" className="w-full">
                  {SITE.phone.display}
                </Cta>
                <Cta href="/contact-us" variant="outlineWhite" size="md" icon="ArrowRight" className="w-full">
                  Contact us
                </Cta>
                <Cta href={ACTIONS.book.href} external variant="secondary" size="md" icon="CalendarCheck" iconPosition="start" className="w-full">
                  Book an appointment
                </Cta>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
