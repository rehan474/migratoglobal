import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, CheckCircle2, Clock, GraduationCap, MapPin, ShieldCheck, Wallet } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useT } from "@/i18n";

const title = "EU Blue Card Guide 2026 | Apply from Saudi Arabia";
const description =
  "EU Blue Card guide for Saudi residents: eligibility, Germany and Netherlands salary thresholds, documents and application steps.";

const salaryThresholds = [
  { country: "Germany", shortage: "€45,908", standard: "€58,400", note: "IT, STEM, doctors, engineers often qualify for lower shortage threshold." },
  { country: "Netherlands", shortage: "€46,268", standard: "€66,956", note: "30% ruling may apply for highly skilled migrants in specific roles." },
  { country: "France", shortage: "N/A", standard: "€53,836", note: "Lower threshold exists for recent graduates and shortage occupations." },
  { country: "Austria", shortage: "€43,470", standard: "€58,434", note: "Regulated professions and STEM profiles are prioritized." },
];

const faqs = [
  {
    q: "What is the EU Blue Card?",
    a: "The EU Blue Card is a residence and work permit for highly qualified non-EU professionals who want to live and work in most EU member states.",
  },
  {
    q: "Can I apply for an EU Blue Card from Saudi Arabia?",
    a: "Yes. Saudi residents apply through the embassy or consulate of the EU country where they have a qualified job offer, usually via VFS Global.",
  },
  {
    q: "How long does the EU Blue Card process take?",
    a: "Most applications are processed within 8 to 12 weeks, depending on the country, document completeness and workload at the embassy.",
  },
  {
    q: "Does the EU Blue Card lead to permanent residency?",
    a: "Yes. After 33 months of legal employment — or 21 months with sufficient language skills — Germany allows conversion to a settlement permit.",
  },
];

export const Route = createFileRoute("/eu-blue-card")({
  component: EuBlueCardPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "eu blue card, eu blue card germany, eu blue card netherlands, eu blue card requirements, eu blue card saudi arabia, apply eu blue card, europe work visa highly skilled",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/eu-blue-card" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/eu-blue-card" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          author: { "@type": "Organization", name: "Migrato Dream Jobs" },
          publisher: {
            "@type": "Organization",
            name: "Migrato Dream Jobs",
            logo: { "@type": "ImageObject", url: "https://migratoglobals.com/favicon.png" },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://migratoglobals.com/eu-blue-card" },
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

function useEligibility(t: (en: string, ar: string) => string) {
  return [
    {
      icon: GraduationCap,
      title: t("University degree", "شهادة جامعية"),
      text: t(
        "A recognised bachelor's degree or higher related to the job offer. Some countries accept 5+ years of professional experience as equivalent.",
        "شهادة بكالوريوس معترف بها أو أعلى ذات صلة بعرض العمل. تقبل بعض الدول أكثر من 5 سنوات من الخبرة المهنية كبديل.",
      ),
    },
    {
      icon: Briefcase,
      title: t("Qualified job offer", "عرض عمل مؤهِّل"),
      text: t(
        "A binding employment contract or firm offer for a highly qualified role, usually lasting at least one year.",
        "عقد عمل ملزم أو عرض ثابت لوظيفة عالية التأهيل، عادةً لمدة سنة واحدة على الأقل.",
      ),
    },
    {
      icon: Wallet,
      title: t("Minimum gross salary", "الحد الأدنى للراتب الإجمالي"),
      text: t(
        "Your salary must meet or exceed the national EU Blue Card threshold, with lower rates for shortage occupations.",
        "يجب أن يساوي راتبك أو يتجاوز الحد الوطني للبطاقة الزرقاء الأوروبية، مع حدود أقل للمهن ذات النقص.",
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Valid passport & documents", "جواز سفر ووثائق سارية"),
      text: t(
        "A passport valid for at least 3 months beyond travel, plus attested degree, employment contract and health insurance.",
        "جواز سفر ساري لمدة 3 أشهر على الأقل بعد السفر، بالإضافة إلى شهادة مصدقة وعقد عمل وتأمين صحي.",
      ),
    },
  ];
}

function useSteps(t: (en: string, ar: string) => string) {
  return [
    {
      step: "01",
      title: t("Credential evaluation", "تقييم المؤهلات"),
      text: t(
        "Get your Saudi degree and professional qualifications recognised by the target country's authority (e.g. ZAB for Germany, IDW for the Netherlands).",
        "احصل على اعتراف بشهادتك ومؤهلاتك المهنية السعودية من جهة الدولة المستهدفة (مثل ZAB لألمانيا وIDW لهولندا).",
      ),
    },
    {
      step: "02",
      title: t("Secure a job offer", "الحصول على عرض عمل"),
      text: t(
        "Sign an employment contract that meets the EU Blue Card salary and qualification requirements for your destination.",
        "وقّع عقد عمل يستوفي متطلبات الراتب والمؤهلات للبطاقة الزرقاء الأوروبية في وجهتك.",
      ),
    },
    {
      step: "03",
      title: t("Prepare your documents", "تجهيز وثائقك"),
      text: t(
        "Attest your degree at the Saudi Ministry of Foreign Affairs, obtain a police clearance, translate documents and arrange health insurance.",
        "صدّق شهادتك في وزارة الخارجية السعودية، واحصل على شهادة حسن سيرة وسلوك، وترجم الوثائق ورتّب التأمين الصحي.",
      ),
    },
    {
      step: "04",
      title: t("Submit visa application", "تقديم طلب التأشيرة"),
      text: t(
        "Apply at the destination country's embassy or consulate in Riyadh. Germany and the Netherlands both accept applications via VFS Global in Saudi Arabia.",
        "قدّم الطلب في سفارة أو قنصلية الدولة المستهدفة في الرياض. تقبل كل من ألمانيا وهولندا الطلبات عبر VFS Global في السعودية.",
      ),
    },
    {
      step: "05",
      title: t("Travel and collect residence permit", "السفر واستلام تصريح الإقامة"),
      text: t(
        "Once approved, enter the EU country and register with local authorities to receive your EU Blue Card residence permit.",
        "بعد الموافقة، ادخل إلى دولة الاتحاد الأوروبي وسجّل لدى السلطات المحلية لاستلام تصريح إقامة البطاقة الزرقاء الأوروبية.",
      ),
    },
  ];
}

function useFaqs(t: (en: string, ar: string) => string) {
  return [
    {
      q: t("What is the EU Blue Card?", "ما هي البطاقة الزرقاء الأوروبية؟"),
      a: t(
        "The EU Blue Card is a residence and work permit for highly qualified non-EU professionals who want to live and work in most EU member states.",
        "البطاقة الزرقاء الأوروبية هي تصريح إقامة وعمل للمهنيين المؤهلين تأهيلاً عالياً من خارج الاتحاد الأوروبي الراغبين في العيش والعمل في معظم دول الاتحاد.",
      ),
    },
    {
      q: t("Can I apply for an EU Blue Card from Saudi Arabia?", "هل يمكنني التقديم على البطاقة الزرقاء الأوروبية من السعودية؟"),
      a: t(
        "Yes. Saudi residents apply through the embassy or consulate of the EU country where they have a qualified job offer, usually via VFS Global.",
        "نعم. يقدم المقيمون في السعودية عبر سفارة أو قنصلية دولة الاتحاد الأوروبي التي لديهم فيها عرض عمل مؤهِّل، وعادةً عبر VFS Global.",
      ),
    },
    {
      q: t("How long does the EU Blue Card process take?", "كم يستغرق إجراء البطاقة الزرقاء الأوروبية؟"),
      a: t(
        "Most applications are processed within 8 to 12 weeks, depending on the country, document completeness and workload at the embassy.",
        "تتم معالجة معظم الطلبات خلال 8 إلى 12 أسبوعاً، حسب الدولة واكتمال الوثائق وحجم العمل في السفارة.",
      ),
    },
    {
      q: t("Does the EU Blue Card lead to permanent residency?", "هل تؤدي البطاقة الزرقاء الأوروبية إلى إقامة دائمة؟"),
      a: t(
        "Yes. After 33 months of legal employment — or 21 months with sufficient language skills — Germany allows conversion to a settlement permit.",
        "نعم. بعد 33 شهراً من العمل القانوني — أو 21 شهراً مع مهارات لغوية كافية — تسمح ألمانيا بالتحويل إلى تصريح استقرار دائم.",
      ),
    },
  ];
}

function EuBlueCardPage() {
  const t = useT();
  const eligibility = useEligibility(t);
  const steps = useSteps(t);
  const faqItems = useFaqs(t);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={t("EU Blue Card", "البطاقة الزرقاء الأوروبية")}
          title={t(
            "EU Blue Card: complete guide for Saudi Arabia residents",
            "البطاقة الزرقاء الأوروبية: دليل شامل لمقيمي السعودية",
          )}
          description={t(
            "A step-by-step resource for highly skilled professionals who want to work in Germany, the Netherlands and other EU countries using the EU Blue Card route.",
            "مصدر خطوة بخطوة للمهنيين ذوي المهارات العالية الراغبين في العمل في ألمانيا وهولندا ودول أوروبية أخرى عبر مسار البطاقة الزرقاء الأوروبية.",
          )}
        />

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.4fr]">
              <div className="prose prose-lg max-w-none text-foreground/90">
                <p className="lead text-xl leading-relaxed">
                  {t(
                    "The EU Blue Card is one of the fastest residence routes for highly qualified non-EU workers. If you live in Saudi Arabia and hold a university degree, this guide explains the exact requirements, salary thresholds and application steps for top destinations like Germany and the Netherlands.",
                    "تُعد البطاقة الزرقاء الأوروبية من أسرع مسارات الإقامة للعمال المؤهلين تأهيلاً عالياً من خارج الاتحاد الأوروبي. إذا كنت تعيش في السعودية وتحمل شهادة جامعية، يشرح هذا الدليل المتطلبات الدقيقة وحدود الرواتب وخطوات التقديم لأبرز الوجهات مثل ألمانيا وهولندا.",
                  )}
                </p>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-foreground">{t("What is the EU Blue Card?", "ما هي البطاقة الزرقاء الأوروبية؟")}</h2>
                <p>
                  {t(
                    "The EU Blue Card is a combined work and residence permit for educated professionals from outside the European Union. It is designed to attract talent in fields such as engineering, information technology, healthcare, finance and science. Holders can bring family members, move between EU countries under certain conditions, and in many cases convert the card into permanent residency.",
                    "البطاقة الزرقاء الأوروبية هي تصريح عمل وإقامة مشترك للمهنيين المتعلمين من خارج الاتحاد الأوروبي. صُممت لجذب المواهب في مجالات مثل الهندسة وتقنية المعلومات والرعاية الصحية والتمويل والعلوم. يمكن لحاملي البطاقة إحضار أفراد أسرهم، والتنقل بين دول الاتحاد الأوروبي وفق شروط معينة، وفي كثير من الحالات تحويل البطاقة إلى إقامة دائمة.",
                  )}
                </p>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-foreground">{t("EU Blue Card eligibility criteria", "معايير أهلية البطاقة الزرقاء الأوروبية")}</h2>
                <p>
                  {t(
                    "Every EU member state applies the same core rules, but local salary thresholds and shortage lists differ. Before applying, make sure you meet the following baseline requirements.",
                    "تطبق كل دولة عضو في الاتحاد الأوروبي القواعد الأساسية نفسها، لكن حدود الرواتب المحلية وقوائم المهن النادرة تختلف. قبل التقديم، تأكد من استيفائك للمتطلبات الأساسية التالية.",
                  )}
                </p>
              </div>

              <aside className="hidden lg:block">
                <Card className="border-border/60 bg-muted/40 sticky top-28">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t("On this page", "في هذه الصفحة")}</h3>
                    <ul className="mt-4 space-y-2.5 text-sm">
                      <li><a href="#eligibility" className="text-foreground/70 hover:text-brand">{t("Eligibility criteria", "معايير الأهلية")}</a></li>
                      <li><a href="#salary" className="text-foreground/70 hover:text-brand">{t("Salary thresholds 2026", "حدود الرواتب 2026")}</a></li>
                      <li><a href="#steps" className="text-foreground/70 hover:text-brand">{t("Application steps", "خطوات التقديم")}</a></li>
                      <li><a href="#faq" className="text-foreground/70 hover:text-brand">{t("Frequently asked questions", "الأسئلة الشائعة")}</a></li>
                    </ul>
                    <Button variant="brand" size="lg" className="mt-6 w-full" asChild>
                      <a href="https://wa.me/966553961233?text=Hi%20Migrato%20Dream%20Jobs,%20I%20want%20to%20apply%20for%20the%20EU%20Blue%20Card" target="_blank" rel="noopener noreferrer">
                        {t("Ask about EU Blue Card", "اسأل عن البطاقة الزرقاء الأوروبية")}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div id="eligibility" className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 scroll-mt-28">
              {eligibility.map((item) => (
                <Card key={item.title} className="border-border/60 bg-background">
                  <CardContent className="p-6">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <item.icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div id="salary" className="mt-20 scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{t("EU Blue Card salary thresholds for 2026", "حدود رواتب البطاقة الزرقاء الأوروبية لعام 2026")}</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                {t(
                  "Salary limits are updated every year. The figures below reflect the 2026 minimum gross annual salary required for a standard EU Blue Card application. Shortage occupations — typically IT, engineering, natural sciences and medicine — often qualify for a reduced threshold.",
                  "تُحدَّث حدود الرواتب كل عام. تعكس الأرقام أدناه الحد الأدنى للراتب السنوي الإجمالي المطلوب لعام 2026 لطلب البطاقة الزرقاء الأوروبية القياسي. غالباً ما تستوفي المهن النادرة — عادةً تقنية المعلومات والهندسة والعلوم الطبيعية والطب — حداً أدنى مخفضاً.",
                )}
              </p>

              <div className="mt-8 overflow-hidden rounded-xl border border-border/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/60 text-muted-foreground">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">{t("Country", "الدولة")}</th>
                      <th className="px-5 py-3.5 font-semibold">{t("Shortage threshold", "حد المهن النادرة")}</th>
                      <th className="px-5 py-3.5 font-semibold">{t("Standard threshold", "الحد القياسي")}</th>
                      <th className="px-5 py-3.5 font-semibold">{t("Notes", "ملاحظات")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 bg-background">
                    {salaryThresholds.map((row) => (
                      <tr key={row.country}>
                        <td className="px-5 py-4 font-medium text-foreground">
                          {t(
                            row.country,
                            row.country === "Germany" ? "ألمانيا" : row.country === "Netherlands" ? "هولندا" : row.country === "France" ? "فرنسا" : "النمسا",
                          )}
                        </td>
                        <td className="px-5 py-4 text-foreground/80">{row.shortage}</td>
                        <td className="px-5 py-4 text-foreground/80">{row.standard}</td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {t(
                            row.note,
                            row.country === "Germany"
                              ? "غالباً ما تكون تقنية المعلومات والتخصصات العلمية والأطباء والمهندسون مؤهلين للحد الأدنى للمهن النادرة."
                              : row.country === "Netherlands"
                              ? "قد ينطبق نظام خصم 30% على المهاجرين ذوي المهارات العالية في وظائف معينة."
                              : row.country === "France"
                              ? "يوجد حد أدنى منخفض للخريجين الجدد والمهن النادرة."
                              : "الأولوية للمهن المنظمة وتخصصات العلوم والتقنية والهندسة والرياضيات.",
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-lg border border-brand/20 bg-brand/5 p-4 text-sm text-foreground/80">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                <p>
                  {t(
                    "Germany and the Netherlands remain the most popular EU Blue Card destinations for Saudi applicants because of strong labour demand, clear English-language application portals and well-defined shortage occupation lists.",
                    "تظل ألمانيا وهولندا الوجهتين الأكثر شعبية للبطاقة الزرقاء الأوروبية للمتقدمين السعوديين بسبب الطلب القوي على العمالة، وبوابات التقديم الواضحة باللغة الإنجليزية، وقوائم المهن النادرة المحددة بوضوح.",
                  )}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div id="steps" className="mt-20 scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{t("How to apply for the EU Blue Card from Saudi Arabia", "كيفية التقديم على البطاقة الزرقاء الأوروبية من السعودية")}</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                {t(
                  "The application process is straightforward when documents are prepared correctly. Most delays happen because of incomplete attestation or mismatched job titles, so follow each step carefully.",
                  "إجراء التقديم بسيط عند تجهيز الوثائق بشكل صحيح. تحدث معظم التأخيرات بسبب نقص التصديق أو عدم تطابق المسميات الوظيفية، لذا اتبع كل خطوة بعناية.",
                )}
              </p>

              <div className="mt-10 space-y-6">
                {steps.map((s, idx) => (
                  <div key={s.step} className="relative flex gap-6">
                    <div className="flex flex-col items-center">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-primary-foreground">
                        {s.step}
                      </span>
                      {idx < steps.length - 1 && <span className="mt-2 h-full w-px bg-border" aria-hidden="true" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-2 text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div id="faq" className="mt-20 scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{t("EU Blue Card frequently asked questions", "الأسئلة الشائعة حول البطاقة الزرقاء الأوروبية")}</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {faqItems.map((faq) => (
                  <Card key={faq.q} className="border-border/60 bg-background">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                        <div>
                          <h3 className="font-semibold text-foreground">{faq.q}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-20 rounded-2xl bg-gradient-ink p-8 lg:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <Clock className="mx-auto size-10 text-brand" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-bold text-primary-foreground sm:text-3xl">{t("Ready to start your EU Blue Card application?", "هل أنت جاهز لبدء طلب البطاقة الزرقاء الأوروبية؟")}</h2>
                <p className="mt-4 text-primary-foreground/75">
                  {t(
                    "Migrato Dream Jobs is the only done-base immigration agency in Saudi Arabia. We guide you through credential recognition, job matching, document preparation and embassy submission — with no advance payment required.",
                    "ميغراتو دريم جوبز هي الوكالة الوحيدة للهجرة في السعودية التي تعمل دون دفعات مقدمة. نرشدك خلال اعتماد المؤهلات، ومطابقة الوظائف، وتجهيز الوثائق، وتقديم الطلب في السفارة — دون الحاجة لأي دفعة مقدمة.",
                  )}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button variant="brand" size="lg" asChild>
                    <a href="https://wa.me/966553961233?text=Hi%20Migrato%20Dream%20Jobs,%20I%20want%20to%20apply%20for%20the%20EU%20Blue%20Card" target="_blank" rel="noopener noreferrer">
                      {t("Message us on WhatsApp", "راسلنا عبر واتساب")}
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link to="/jobs">{t("Browse current openings", "تصفح الشواغر الحالية")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
