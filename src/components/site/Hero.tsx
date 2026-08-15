import { ArrowRight, BadgeCheck, ShieldCheck, Star } from "lucide-react";

import heroImage from "@/assets/hero-visa.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n";

function buildStats(t: (en: string, ar: string) => string) {
  return [
    { value: "12,000+", label: t("Visas processed", "تأشيرة تمت معالجتها") },
    { value: "29", label: t("Schengen countries", "دولة شنغن") },
    { value: "98%", label: t("Approval rate", "نسبة القبول") },
  ];
}

export function Hero() {
  const t = useT();
  const stats = buildStats(t);

  return (
    <section className="relative overflow-hidden bg-gradient-ink pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-10 size-[28rem] rounded-full bg-brand/25 blur-[120px] animate-float"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 size-96 rounded-full bg-brand/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Reveal delay={40}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
              <ShieldCheck className="size-3.5 text-brand" aria-hidden="true" />
              {t("THE ONLY DONE BASE AGENCY IN SAUDI ARABIA", "الوكالة الوحيدة العاملة بنظام عدم الدفع المسبق في السعودية")}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
              {t("Europe Work Visa & Schengen Visa Services", "خدمات تأشيرات العمل الأوروبية وتأشيرات شنغن")}
              <span className="block text-brand">{t("from Saudi Arabia", "من المملكة العربية السعودية")}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
              {t(
                "Migrato Dream Jobs handles work permits, employment contracts, appointments and documentation for all Schengen and European countries — end to end, with a transparent fee and a dedicated case manager.",
                "تتولى ميغراتو دريم جوبز إجراءات تصاريح العمل وعقود التوظيف والمواعيد والوثائق لجميع دول شنغن وأوروبا — من البداية إلى النهاية، برسوم واضحة ومدير حالة مخصص لك.",
              )}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="#assessment">
                  {t("Check your eligibility free", "تحقق من أهليتك مجانًا")}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="onDark" size="xl" asChild>
                <a href="#services">{t("Explore visa services", "استكشف خدمات التأشيرات")}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-primary-foreground lg:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-lift">
            <img
              src={heroImage}
              alt={t(
                "Professional travelling to Europe on a work visa arranged by Migrato Dream Jobs",
                "محترف يسافر إلى أوروبا بتأشيرة عمل تم ترتيبها عبر ميغراتو دريم جوبز",
              )}
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card p-4 shadow-lift sm:block">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft">
                <BadgeCheck className="size-5 text-brand" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{t("Work permit approved", "تمت الموافقة على تصريح العمل")}</p>
                <p className="text-xs text-muted-foreground">{t("Malta · 12 weeks processing", "مالطا · مدة المعالجة 12 أسبوعًا")}</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-8 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lift md:block">
            <div className="flex items-center gap-1 text-brand" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs font-medium text-foreground">{t("4.9/5 from 800+ clients", "4.9/5 من أكثر من 800 عميل")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
