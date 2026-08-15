import { createFileRoute } from "@tanstack/react-router";

import { Assessment } from "@/components/site/Assessment";
import { Faq } from "@/components/site/Faq";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Process";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { useT } from "@/i18n";

const title = "Our Visa Application Process | Migrato Dream Jobs";
const description =
  "Four transparent steps to your European visa, with milestone-based fees from Migrato Dream Jobs in Saudi Arabia.";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
});

function ProcessPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={t("Process", "الإجراءات")}
          title={t(
            "How your Europe visa application moves forward",
            "كيف يتقدم طلب تأشيرتك الأوروبية",
          )}
          description={t(
            "A structured, documented workflow with a dedicated case manager in Riyadh keeping you updated at every stage of your file.",
            "سير عمل منظم وموثق مع مدير حالة مخصص في الرياض يبقيك على اطلاع في كل مرحلة من مراحل ملفك.",
          )}
        />
        <Process />
        <Faq />
        <Assessment />
      </main>
      <SiteFooter />
    </div>
  );
}
