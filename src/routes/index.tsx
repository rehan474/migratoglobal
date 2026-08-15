import { createFileRoute } from "@tanstack/react-router";

import { Assessment } from "@/components/site/Assessment";
import { Countries } from "@/components/site/Countries";
import { DoneBaseBanner } from "@/components/site/DoneBaseBanner";
import { Faq, faqs } from "@/components/site/Faq";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WhyUs } from "@/components/site/WhyUs";

const title = "Europe Work & Schengen Visas | Migrato Dream Jobs";
const description =
  "The only done-base immigration agency in Saudi Arabia for Europe work visas and Schengen visas. No advance payment required.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "europe work visa, schengen visa, work permit europe, europe work visa from saudi arabia, immigration consultants saudi arabia, student visa europe, family visa europe",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Migrato Dream Jobs",
          description,
          slogan: "Your route, our expertise.",
          areaServed: "Europe",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Panerių g. 51",
            postalCode: "03202",
            addressLocality: "Vilnius",
            addressCountry: "LT",
          },
          telephone: "+966553961233",
          email: "info@migratoglobals.com",
          serviceType: [
            "Europe work visa",
            "Schengen visa",
            "Work permit",
            "Student visa",
            "Family visa",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <DoneBaseBanner />
        <Services />
        <Countries />
        <Process />
        <WhyUs />
        <Faq />
        <Assessment />
      </main>
      <SiteFooter />
    </div>
  );
}
