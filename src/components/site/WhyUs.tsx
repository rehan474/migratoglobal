import { Clock, HandCoins, MapPin, ScrollText } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n";

function buildReasons(t: (en: string, ar: string) => string) {
  return [
    {
      icon: ScrollText,
      title: t("Licensed & compliant", "مرخّص وملتزم بالأنظمة"),
      text: t(
        "Registered immigration advisory in Saudi Arabia, filing only genuine employer-backed applications.",
        "استشارات هجرة مسجّلة في المملكة العربية السعودية، نقدّم فقط طلبات حقيقية مدعومة من أصحاب عمل فعليين.",
      ),
    },
    {
      icon: HandCoins,
      title: t("Transparent fees", "رسوم شفافة"),
      text: t(
        "Milestone-based pricing with no hidden charges — you always know what you pay and when.",
        "تسعير على أساس المراحل دون أي رسوم خفية — تعرف دائمًا ماذا تدفع ومتى.",
      ),
    },
    {
      icon: Clock,
      title: t("Faster processing", "معالجة أسرع"),
      text: t(
        "Pre-checked files and direct employer channels cut typical work-permit timelines by weeks.",
        "الملفات المدققة مسبقًا وقنوات التواصل المباشرة مع أصحاب العمل تختصر مدة تصاريح العمل بأسابيع.",
      ),
    },
    {
      icon: MapPin,
      title: t("Arabic & English support", "دعم بالعربية والإنجليزية"),
      text: t(
        "A dedicated case manager in Riyadh keeps you updated on WhatsApp at every stage of the file.",
        "يتابع معك مدير حالة مخصص في الرياض عبر واتساب في كل مرحلة من مراحل ملفك.",
      ),
    },
  ];
}

export function WhyUs() {
  const t = useT();
  const reasons = buildReasons(t);

  return (
    <section className="relative overflow-hidden bg-gradient-ink py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute -left-20 top-1/3 size-96 rounded-full bg-brand/20 blur-[130px] animate-float"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Why Migrato Dream Jobs", "لماذا ميغراتو دريم جوبز")}</p>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            {t("Your route, our expertise.", "طريقك، وخبرتنا.")}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/70">
            {t(
              "We are a Saudi-based immigration consultancy specialising in European work permits and Schengen visas for professionals, graduates and skilled workers across the Gulf.",
              "نحن شركة استشارات هجرة سعودية متخصصة في تصاريح العمل الأوروبية وتأشيرات شنغن للمهنيين والخريجين والعمالة الماهرة في الخليج.",
            )}
          </p>
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <Reveal as="li" key={reason.title} delay={index * 90}>
              <div className="h-full rounded-2xl border border-primary-foreground/12 bg-primary-foreground/6 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <reason.icon className="size-6 text-brand" aria-hidden="true" />
                <h3 className="mt-5 text-base font-semibold text-primary-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
