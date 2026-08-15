import { createFileRoute } from "@tanstack/react-router";

import { Assessment } from "@/components/site/Assessment";
import { Countries } from "@/components/site/Countries";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WhyUs } from "@/components/site/WhyUs";
import { useT } from "@/i18n";

const title = "29 Schengen Work Permit Countries | Migrato Dream Jobs";
const description =
  "Compare work permit routes for Germany, Malta, Netherlands, Portugal, Italy and more, and find the fastest country for your profile.";

export const Route = createFileRoute("/countries")({
  component: CountriesPage,
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
    links: [{ rel: "canonical", href: "/countries" }],
  }),
});

function CountriesPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={t("Countries", "الدول")}
            title={t(
              "Work permits across all 29 Schengen & European countries",
              "تصاريح عمل في جميع دول شنغن والدول الأوروبية الـ29",
            )}
          description={t(
            "We match your profile, qualifications and budget with the European country where approval is fastest, most affordable and most realistic.",
            "نطابق ملفك ومؤهلاتك وميزانيتك مع الدولة الأوروبية التي تكون فيها الموافقة الأسرع والأقل تكلفة والأكثر واقعية.",
          )}
        />
        <Countries />
        <WhyUs />
        <Assessment />
      </main>
      <SiteFooter />
    </div>
  );
}
