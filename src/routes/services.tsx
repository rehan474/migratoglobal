import { createFileRoute } from "@tanstack/react-router";

import { Assessment } from "@/components/site/Assessment";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { useT } from "@/i18n";

const title = "Europe Visa Services & Work Permits | Migrato Dream Jobs";
const description =
  "Visa services in Saudi Arabia: work visas, Schengen tourist visas, student, family and business visas for all European countries.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
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
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={t("Visa Services", "خدمات التأشيرات")}
          title={t(
            "Every European visa category, handled end to end",
            "جميع فئات التأشيرات الأوروبية، بإدارة كاملة من البداية للنهاية",
          )}
          description={t(
            "From employer-sponsored work permits to Schengen tourist visas, student admissions and family reunification — one team manages your file from assessment to arrival.",
            "من تصاريح العمل المدعومة من صاحب العمل إلى تأشيرات شنغن السياحية، والقبول الدراسي، ولمّ شمل الأسرة — فريق واحد يدير ملفك من التقييم وحتى الوصول.",
          )}
        />
        <Services />
        <Process />
        <Assessment />
      </main>
      <SiteFooter />
    </div>
  );
}
