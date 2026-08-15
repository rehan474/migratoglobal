import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n";

function buildSteps(t: (en: string, ar: string) => string) {
  return [
    {
      step: "01",
      title: t("Free eligibility assessment", "تقييم مجاني للأهلية"),
      text: t(
        "We review your profile, qualifications and travel history and shortlist the European routes you actually qualify for.",
        "نراجع ملفك الشخصي ومؤهلاتك وسجل سفرك ونحدد المسارات الأوروبية التي تستوفي شروطها فعليًا.",
      ),
    },
    {
      step: "02",
      title: t("Job offer & work permit", "عرض عمل وتصريح عمل"),
      text: t(
        "Our EU employer network issues a verified contract, and we file the work permit with the labour authority.",
        "تصدر شبكة أصحاب العمل الأوروبيين لدينا عقدًا موثقًا، ونتولى تقديم طلب تصريح العمل لدى جهة العمل المختصة.",
      ),
    },
    {
      step: "03",
      title: t("Documentation & appointment", "الوثائق والموعد"),
      text: t(
        "Attestation, translations, insurance, financials and your VFS or embassy appointment — prepared and booked.",
        "التصديق، والترجمات، والتأمين، والمستندات المالية، وحجز موعدك لدى مركز VFS أو السفارة — كل ذلك يتم تجهيزه وحجزه.",
      ),
    },
    {
      step: "04",
      title: t("Visa stamped & relocation", "ختم التأشيرة والانتقال"),
      text: t(
        "Interview coaching, visa collection, flight and first-month accommodation guidance in your destination city.",
        "تدريب على المقابلة، واستلام التأشيرة، وإرشادك في حجز الطيران والسكن للشهر الأول في مدينتك الجديدة.",
      ),
    },
  ];
}

export function Process() {
  const t = useT();
  const steps = buildSteps(t);

  return (
    <section id="process" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("How it works", "كيف تعمل الخدمة")}</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t("Four transparent steps to your European visa", "أربع خطوات واضحة للحصول على تأشيرتك الأوروبية")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t(
              "A dedicated case manager keeps your file moving, with fees settled only after each milestone is confirmed.",
              "يتابع مدير حالة مخصص ملفك باستمرار، وتُسدَّد الرسوم فقط بعد تأكيد كل مرحلة.",
            )}
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute left-0 top-7 hidden h-px w-full bg-gradient-to-r from-brand/10 via-brand/50 to-brand/10 lg:block"
          />
          {steps.map((step, index) => (
            <Reveal as="li" key={step.step} delay={index * 100} className="relative">
              <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-brand font-display text-lg font-bold text-primary-foreground shadow-soft">
                {step.step}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
