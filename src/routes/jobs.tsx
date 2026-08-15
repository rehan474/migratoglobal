import { createFileRoute } from "@tanstack/react-router";

import { Assessment } from "@/components/site/Assessment";
import { JobListings } from "@/components/site/JobListings";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WhyUs } from "@/components/site/WhyUs";
import { useT } from "@/i18n";

const title = "Migrato Dream Jobs | Overseas Jobs & Recruitment in Europe";
const description =
  "Apply for verified Europe jobs with Migrato Dream Jobs — welders, drivers, home care and more. No advance payment required.";

export const Route = createFileRoute("/jobs")({
  component: JobsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "overseas jobs, work abroad, Europe jobs for foreigners, international recruitment, welding jobs Europe, truck driver jobs Europe, home care jobs Europe, Malta jobs, Lithuania jobs",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/jobs" }],
  }),
});

function JobsPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={t("Migrato Dream Jobs", "ميغراتو دريم جوبز")}
          title={t("Verified overseas jobs across Europe", "وظائف موثقة في الخارج عبر أوروبا")}
          description={t(
            "Skilled worker vacancies across Europe, managed end to end by Migrato Dream Jobs from Saudi Arabia.",
            "شواغر عمالة ماهرة في جميع أنحاء أوروبا، بإدارة كاملة من ميغراتو دريم جوبز من السعودية.",
          )}
        />
        <JobListings />
        <WhyUs />
        <Assessment />
      </main>
      <SiteFooter />
    </div>
  );
}
