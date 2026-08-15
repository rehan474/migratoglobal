import {
  Briefcase,
  GraduationCap,
  Plane,
  Users,
  FileCheck2,
  Building2,
  ArrowUpRight,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n";

function buildServices(t: (en: string, ar: string) => string) {
  return [
    {
      id: "work-visa",
      icon: Briefcase,
      title: t("Europe Work Visa & Work Permit", "تأشيرة عمل أوروبا وتصريح العمل"),
      text: t(
        "Employer-sponsored work permits, seasonal permits and EU Blue Card applications with verified job offers.",
        "تصاريح عمل بكفالة صاحب العمل، وتصاريح موسمية، وطلبات البطاقة الزرقاء الأوروبية بعروض عمل موثقة.",
      ),
    },
    {
      id: "tourist-visa",
      icon: Plane,
      title: t("Schengen Visit & Tourist Visa", "تأشيرة زيارة وسياحة شنغن"),
      text: t(
        "Short-stay Schengen visa filing, appointment booking, cover letters, insurance and itinerary support.",
        "تقديم طلبات تأشيرة شنغن قصيرة الأمد، وحجز المواعيد، وخطابات التغطية، والتأمين، ودعم برنامج الرحلة.",
      ),
    },
    {
      id: "student-visa",
      icon: GraduationCap,
      title: t("Student Visa for Europe", "تأشيرة طالب لأوروبا"),
      text: t(
        "University admissions, blocked accounts, national D visas and post-study work pathways.",
        "القبول الجامعي، والحسابات المصرفية المجمدة، وتأشيرات D الوطنية، ومسارات العمل بعد التخرج.",
      ),
    },
    {
      id: "family-visa",
      icon: Users,
      title: t("Family & Dependent Visa", "تأشيرة الأسرة والمعالين"),
      text: t(
        "Spouse, child and family reunification visas with full civil-document legalisation.",
        "تأشيرات الزوج/الزوجة والأبناء ولمّ شمل الأسرة مع توثيق كامل للوثائق المدنية.",
      ),
    },
    {
      id: "business-visa",
      icon: Building2,
      title: t("Business & Investor Visa", "تأشيرة الأعمال والمستثمرين"),
      text: t(
        "Business visit visas, company registration and residence-by-investment routes across the EU.",
        "تأشيرات زيارة الأعمال، وتسجيل الشركات، ومسارات الإقامة عبر الاستثمار في دول الاتحاد الأوروبي.",
      ),
    },
    {
      id: "documentation",
      icon: FileCheck2,
      title: t("Documentation & Attestation", "الوثائق والتصديق"),
      text: t(
        "MOFA attestation, translations, apostille, CV formatting and interview preparation.",
        "تصديق وزارة الخارجية، والترجمات، والأبوستيل، وتنسيق السيرة الذاتية، والتحضير للمقابلات.",
      ),
    },
  ];
}

export function Services() {
  const t = useT();
  const services = buildServices(t);

  return (
    <section id="services" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Visa services", "خدمات التأشيرات")}</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t("Every visa type for Schengen and European countries", "كل أنواع التأشيرات لدول شنغن وأوروبا")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t(
              "From work permits in Germany and Malta to Schengen tourist visas from Riyadh, Jeddah and Dammam — one team manages your file from assessment to arrival.",
              "من تصاريح العمل في ألمانيا ومالطا إلى تأشيرات شنغن السياحية من الرياض وجدة والدمام — فريق واحد يدير ملفك من التقييم حتى الوصول.",
            )}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal as="li" key={service.title} delay={index * 70}>
              <article
                id={service.id}
                className="group h-full scroll-mt-28 rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lift"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-soft transition-colors group-hover:bg-brand">
                  <service.icon
                    className="size-6 text-brand transition-colors group-hover:text-brand-foreground"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-6 flex items-start justify-between gap-3 text-lg font-semibold text-foreground">
                  {service.title}
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
