import { ArrowUpRight, Briefcase, Calendar, CheckCircle2, Clock, Globe2, MapPin, Phone, Users } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n";

function buildPrograms(t: ReturnType<typeof useT>) {
  return [
    {
      country: t("Spain / Finland", "إسبانيا / فنلندا"),
      code: "ES / FI",
      title: t("Welder & Helper", "لحّام ومساعد"),
      highlights: [
        t("Welder & Helper positions", "وظائف لحّام ومساعد"),
        t("Up to 12-hour shifts with overtime", "نوبات تصل إلى 12 ساعة مع عمل إضافي"),
        t("Overseas experience preferred", "يُفضل وجود خبرة عمل بالخارج"),
      ],
      processingTime: t("3–4 months", "3-4 أشهر"),
      openTo: t("All nationalities", "جميع الجنسيات"),
    },
    {
      country: t("Malta", "مالطا"),
      code: "MT",
      title: t("Multiple Vacancies", "وظائف متعددة"),
      highlights: [
        t("Open to all nationalities", "متاح لجميع الجنسيات"),
        t("Multiple vacancies available", "شواغر متعددة متاحة"),
        t("Air ticket included", "تذكرة الطيران مشمولة"),
      ],
      processingTime: null,
      openTo: t("All nationalities", "جميع الجنسيات"),
    },
    {
      country: t("Bulgaria", "بلغاريا"),
      code: "BG",
      title: t("Truck Driver & Industrial Roles", "سائق شاحنة ووظائف صناعية"),
      highlights: [
        t("Open to all nationalities", "متاح لجميع الجنسيات"),
        t("Video interview", "مقابلة عبر الفيديو"),
        t(
          "Truck Driver, Power Coating, Metal Fitter, Cleaning Staff",
          "سائق شاحنة، طلاء بالطاقة، فني تركيب معادن، عامل نظافة",
        ),
      ],
      processingTime: t("4–5 months", "4-5 أشهر"),
      openTo: t("All nationalities", "جميع الجنسيات"),
    },
    {
      country: t("Lithuania", "ليتوانيا"),
      code: "LT",
      title: t("Data Center Installation — Cabling", "تركيب مراكز البيانات — تمديد الكابلات"),
      highlights: [
        t("Cabling Technician roles", "وظائف فني تمديد كابلات"),
        t("Open for Philippines & Vietnam candidates", "متاح للمرشحين من الفلبين وفيتنام"),
        t("Head office location", "موقع المكتب الرئيسي"),
      ],
      processingTime: null,
      openTo: t("Philippines & Vietnam", "الفلبين وفيتنام"),
    },
    {
      country: t("Switzerland", "سويسرا"),
      code: "CH",
      title: t("Driver & Home Care", "سائق ورعاية منزلية"),
      highlights: [
        t("Driver: Pakistan candidates via video call interview", "سائق: مرشحون من باكستان عبر مقابلة فيديو"),
        t("Home Care: India & Pakistan candidates", "رعاية منزلية: مرشحون من الهند وباكستان"),
        t("Recruitment starts after the 25th of this month", "يبدأ التوظيف بعد الخامس والعشرين من هذا الشهر"),
      ],
      processingTime: null,
      openTo: t("Pakistan, India", "باكستان، الهند"),
    },
  ];
}

function buildBenefits(t: ReturnType<typeof useT>) {
  return [
    {
      icon: Globe2,
      title: t("Genuine Overseas Opportunities", "فرص حقيقية للعمل بالخارج"),
      text: t(
        "Verified employers across Europe with real contract offers and legal work permits.",
        "أصحاب عمل موثوقون في جميع أنحاء أوروبا مع عروض عقود حقيقية وتصاريح عمل قانونية.",
      ),
    },
    {
      icon: Users,
      title: t("Professional Recruitment Support", "دعم توظيف احترافي"),
      text: t(
        "From CV formatting to interview prep, we guide you through every hiring stage.",
        "من تنسيق السيرة الذاتية إلى التحضير للمقابلة، نرافقك في كل مرحلة من مراحل التوظيف.",
      ),
    },
    {
      icon: CheckCircle2,
      title: t("Transparent Process", "إجراءات شفافة"),
      text: t(
        "Clear timelines, realistic eligibility checks and no hidden costs.",
        "جداول زمنية واضحة، وفحوصات أهلية واقعية، ودون أي تكاليف خفية.",
      ),
    },
    {
      icon: Briefcase,
      title: t("End-to-End Documentation Assistance", "مساعدة كاملة في الأوراق والمستندات"),
      text: t(
        "Work permits, visa filing, attestations and pre-departure support handled in one place.",
        "تصاريح العمل، تقديم طلبات التأشيرة، التصديقات، والدعم قبل السفر، كل ذلك في مكان واحد.",
      ),
    },
  ];
}

export function JobListings() {
  const t = useT();
  const programs = buildPrograms(t);
  const benefits = buildBenefits(t);

  return (
    <>
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Active recruitment", "توظيف نشط")}</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              {t("Current international job openings", "الوظائف الدولية الشاغرة حاليًا")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t(
                "Migrato Dream Jobs connects skilled workers with verified employers across Europe. Browse active programs and apply through our recruitment desk.",
                "تربط Migrato Dream Jobs العمالة الماهرة بأصحاب عمل موثوقين في جميع أنحاء أوروبا. تصفح البرامج النشطة وقدّم طلبك عبر مكتب التوظيف لدينا.",
              )}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {programs.map((program, index) => (
              <Reveal key={program.title} delay={index * 80}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft font-display text-sm font-bold tracking-wide text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                        {program.code}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{program.country}</p>
                        <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>

                  <ul className="mt-6 space-y-3">
                    {program.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 font-medium">
                      <Users className="size-3.5" aria-hidden="true" />
                      {program.openTo}
                    </span>
                    {program.processingTime ? (
                      <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 font-medium">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {program.processingTime}
                      </span>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Why apply with us", "لماذا تقدّم معنا")}</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t("A recruitment partner that handles the full journey", "شريك توظيف يتولى الرحلة كاملة")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t(
                  "We do more than share vacancies. Migrato Dream Jobs manages employer matching, documentation, work permits and relocation guidance so you can focus on your new role.",
                  "نحن نقدم أكثر من مجرد إعلانات الوظائف. تتولى Migrato Dream Jobs مطابقة أصحاب العمل، والأوراق الرسمية، وتصاريح العمل، وإرشادات الانتقال، حتى تتفرغ أنت لدورك الجديد.",
                )}
              </p>
            </Reveal>

            <ul className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Reveal as="li" key={benefit.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft">
                      <benefit.icon className="size-5 text-brand" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Apply today", "قدّم اليوم")}</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              {t("Ready to start your dream job abroad?", "هل أنت مستعد لبدء وظيفة أحلامك بالخارج؟")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t(
                "Send your CV and preferred country on WhatsApp. Our recruitment team will assess your profile and reply with the next steps.",
                "أرسل سيرتك الذاتية والدولة المفضلة عبر واتساب. سيقوم فريق التوظيف لدينا بتقييم ملفك والرد بالخطوات التالية.",
              )}
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-lift lg:p-12">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                  <MapPin className="size-5 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t("Head Office", "المكتب الرئيسي")}</p>
                  <p className="font-semibold text-foreground">
                    {t("Panerių g. 51, 03202 Vilnius, Lithuania", "Panerių g. 51, 03202 Vilnius, Lithuania")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                  <Phone className="size-5 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t("Phone / WhatsApp", "الهاتف / واتساب")}</p>
                  <a
                    href="tel:+966553961233"
                    className="font-semibold text-foreground transition-colors hover:text-brand"
                  >
                    <span dir="ltr">+966 55 396 1233</span>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                  <Calendar className="size-5 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t("Processing time", "مدة المعالجة")}</p>
                  <p className="font-semibold text-foreground">{t("3–5 months average", "3-5 أشهر بمعدل متوسط")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                  <Globe2 className="size-5 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t("Coverage", "التغطية")}</p>
                  <p className="font-semibold text-foreground">{t("Europe & Schengen", "أوروبا ومنطقة شنغن")}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="brand" size="xl" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/966553961233" target="_blank" rel="noopener noreferrer">
                  {t("Apply on WhatsApp", "قدّم عبر واتساب")}
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
                <a href="tel:+966553961233">{t("Call", "اتصل على")} <span dir="ltr">+966 55 396 1233</span></a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
