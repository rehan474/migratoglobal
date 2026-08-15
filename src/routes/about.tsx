import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, Handshake, Target } from "lucide-react";

import { Assessment } from "@/components/site/Assessment";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WhyUs } from "@/components/site/WhyUs";
import { useT } from "@/i18n";

const title = "About Us | Migrato Dream Jobs, Saudi Arabia";
const description =
  "The only done-base immigration consultancy in Saudi Arabia — no advance payment. European work permits and Schengen visas.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
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
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function useValues(t: (en: string, ar: string) => string) {
  return [
    {
      icon: Target,
      title: t("Honest eligibility first", "الصراحة في تقييم الأهلية أولاً"),
      text: t(
        "We only take on files we believe can be approved, and we say so clearly when a route is not realistic for your profile.",
        "لا نتعامل إلا مع الملفات التي نرى أنها قابلة للموافقة، ونوضح بصراحة عندما لا يكون المسار واقعياً لملفك.",
      ),
    },
    {
      icon: Handshake,
      title: t("Verified employers only", "أصحاب عمل موثوقون فقط"),
      text: t(
        "Every work permit we file is backed by a genuine, contract-issuing European employer in our vetted network.",
        "كل تصريح عمل نقدمه مدعوم بصاحب عمل أوروبي حقيقي يصدر عقوداً ضمن شبكتنا المعتمدة.",
      ),
    },
    {
      icon: Globe2,
      title: t("Coverage across Europe", "تغطية في جميع أنحاء أوروبا"),
      text: t(
        "Active permit routes in all 29 Schengen states plus wider European destinations, updated as quotas and rules change.",
        "مسارات تصاريح فعالة في جميع دول شنغن الـ29 ووجهات أوروبية أخرى، محدّثة باستمرار مع تغير الحصص والأنظمة.",
      ),
    },
    {
      icon: Award,
      title: t("Accountable case handling", "متابعة ملف مسؤولة"),
      text: t(
        "One named case manager owns your file from first assessment to landing in your destination city.",
        "مدير حالة واحد مسؤول عن ملفك من التقييم الأول وحتى وصولك إلى مدينتك الوجهة.",
      ),
    },
  ];
}

function useMilestones(t: (en: string, ar: string) => string) {
  return [
    { year: "2016", text: t("Founded in Riyadh as a documentation and attestation practice.", "تأسست في الرياض كجهة متخصصة في التوثيق والتصديق.") },
    { year: "2019", text: t("First direct employer partnerships in Malta and Lithuania.", "أول شراكات مباشرة مع أصحاب عمل في مالطا وليتوانيا.") },
    { year: "2022", text: t("EU Blue Card and skilled-worker desk opened for Germany and the Netherlands.", "افتتاح قسم مختص بالبطاقة الزرقاء الأوروبية والعمالة الماهرة لألمانيا وهولندا.") },
    { year: "2025", text: t("12,000+ visa and permit files processed for clients across the Gulf.", "أكثر من 12,000 ملف تأشيرة وتصريح تمت معالجتها لعملاء في جميع أنحاء الخليج.") },
  ];
}

function AboutPage() {
  const t = useT();
  const values = useValues(t);
  const milestones = useMilestones(t);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={t("About Us", "من نحن")}
          title={t(
            "A Saudi immigration consultancy built around European work routes",
            "شركة استشارات هجرة سعودية مبنية على مسارات العمل الأوروبية",
          )}
          description={t(
            "Migrato Dream Jobs exists to make legal migration to Europe predictable — with verified employers, transparent fees and a case manager who answers.",
            "توجد ميغراتو دريم جوبز لجعل الهجرة القانونية إلى أوروبا واضحة ومضمونة — بأصحاب عمل موثوقين، رسوم شفافة، ومدير حالة يرد عليك دائماً.",
          )}
        />

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Who we are", "من نحن")}</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t("Your route, our expertise.", "مسارك، بخبرتنا.")}
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {t(
                  "Based in Riyadh and serving clients across Saudi Arabia and the wider Gulf, Migrato Globals specialises in employer-sponsored work permits, Schengen visas, student admissions and family reunification for European destinations.",
                  "ومقرها الرياض، تخدم ميغراتو غلوبالز عملاء في جميع أنحاء السعودية والخليج، وتتخصص في تصاريح العمل المدعومة من صاحب العمل، وتأشيرات شنغن، والقبول الدراسي، ولمّ شمل الأسرة للوجهات الأوروبية.",
                )}
              </p>
              <p>
                {t(
                  "Our team combines labour-market knowledge in Europe with hands-on documentation experience in the Gulf: MOFA attestation, legalisation, translations, financial evidence and consulate-ready application files.",
                  "يجمع فريقنا بين معرفة سوق العمل الأوروبي والخبرة العملية في التوثيق في الخليج: تصديق وزارة الخارجية، التصديقات، الترجمات، الإثباتات المالية، وملفات جاهزة للقنصليات.",
                )}
              </p>
              <p>
                {t(
                  "We work only with verified employers and file only genuine applications. That discipline is why our approval rate stays high and why most of our clients arrive through referrals.",
                  "نتعامل فقط مع أصحاب عمل موثوقين ونقدم طلبات حقيقية فقط. هذا الانضباط هو سبب بقاء نسبة الموافقات لدينا مرتفعة ولماذا يأتي معظم عملائنا عبر الترشيحات.",
                )}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Our values", "قيمنا")}</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t("What we hold ourselves to", "ما نلتزم به")}
              </h2>
            </Reveal>
            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <Reveal as="li" key={value.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lift">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-soft">
                      <value.icon className="size-6 text-brand" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Milestones", "محطات بارزة")}</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t("How Migrato Dream Jobs grew", "كيف نمت ميغراتو دريم جوبز")}
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-8 lg:grid-cols-4">
              {milestones.map((milestone, index) => (
                <Reveal as="li" key={milestone.year} delay={index * 100}>
                  <span className="inline-flex items-center justify-center rounded-xl bg-gradient-brand px-4 py-2 font-display text-sm font-bold text-primary-foreground shadow-soft">
                    {milestone.year}
                  </span>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{milestone.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <WhyUs />
        <Assessment />
      </main>
      <SiteFooter />
    </div>
  );
}
