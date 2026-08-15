import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n";

function buildCountries(t: (en: string, ar: string) => string) {
  return [
    { name: t("Germany", "ألمانيا"), code: "DE", note: t("EU Blue Card · Skilled worker", "البطاقة الزرقاء الأوروبية · عامل ماهر") },
    { name: t("Malta", "مالطا"), code: "MT", note: t("Work permit · 12 weeks", "تصريح عمل · 12 أسبوعًا") },
    { name: t("Netherlands", "هولندا"), code: "NL", note: t("Highly skilled migrant", "مهاجر ذو مهارة عالية") },
    { name: t("Portugal", "البرتغال"), code: "PT", note: t("Job seeker · D visa", "باحث عن عمل · تأشيرة D") },
    { name: t("Italy", "إيطاليا"), code: "IT", note: t("Decreto Flussi quota", "حصة ديكريتو فلوسي") },
    { name: t("Spain", "إسبانيا"), code: "ES", note: t("Work & digital nomad", "عمل وترحال رقمي") },
    { name: t("France", "فرنسا"), code: "FR", note: t("Talent passport", "جواز الموهبة") },
    { name: t("Sweden", "السويد"), code: "SE", note: t("Work permit", "تصريح عمل") },
    { name: t("Czechia", "التشيك"), code: "CZ", note: t("Employee card", "بطاقة الموظف") },
    { name: t("Austria", "النمسا"), code: "AT", note: t("Red-White-Red card", "بطاقة أحمر-أبيض-أحمر") },
    { name: t("Hungary", "المجر"), code: "HU", note: t("Work & residence", "عمل وإقامة") },
    { name: t("Lithuania", "ليتوانيا"), code: "LT", note: t("National D visa", "تأشيرة D الوطنية") },
  ];
}

export function Countries() {
  const t = useT();
  const countries = buildCountries(t);
  const marquee = [...countries, ...countries];

  return (
    <section id="countries" className="scroll-mt-24 overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("Destinations", "الوجهات")}</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t("Work permits across all 29 Schengen & European countries", "تصاريح عمل في جميع دول شنغن وأوروبا الـ29")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t(
              "We match your profile, qualifications and budget with the European country where approval is fastest and most realistic.",
              "نطابق ملفك الشخصي ومؤهلاتك وميزانيتك مع الدولة الأوروبية التي تمنح الموافقة الأسرع والأكثر واقعية.",
            )}
          </p>
        </Reveal>

        <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countries.slice(0, 8).map((country) => (
            <div
              key={country.name}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft font-display text-sm font-bold tracking-wide text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                {country.code}
              </span>
              <div>
                <p className="font-semibold text-foreground">{country.name}</p>
                <p className="text-xs text-muted-foreground">{country.note}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="relative mt-12 flex overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {marquee.map((country, index) => (
            <span
              key={`${country.name}-${index}`}
              className="whitespace-nowrap rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-muted-foreground"
            >
              {country.code} · {country.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
