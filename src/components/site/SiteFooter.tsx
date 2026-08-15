import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import logoGreen from "@/assets/migrato-logo-tp-white.png";
import { useT } from "@/i18n";

function buildColumns(t: ReturnType<typeof useT>) {
  return [
    {
      title: t("Visa services", "خدمات التأشيرات"),
      links: [
        { label: t("Europe work visa", "تأشيرة عمل أوروبا"), to: "/services" as const, hash: "work-visa" },
        { label: t("Schengen tourist visa", "تأشيرة سياحية شنغن"), to: "/services" as const, hash: "tourist-visa" },
        { label: t("Student visa", "تأشيرة طالب"), to: "/services" as const, hash: "student-visa" },
        { label: t("Family visa", "تأشيرة عائلية"), to: "/services" as const, hash: "family-visa" },
        { label: t("Business & investor visa", "تأشيرة أعمال ومستثمرين"), to: "/services" as const, hash: "business-visa" },
        { label: t("EU Blue Card guide", "دليل البطاقة الزرقاء الأوروبية"), to: "/eu-blue-card" as const },
      ],
    },
    {
      title: t("Company", "الشركة"),
      links: [
        { label: t("Home", "الرئيسية"), to: "/" as const },
        { label: t("About us", "من نحن"), to: "/about" as const },
        { label: t("Our process", "آلية العمل"), to: "/process" as const },
        { label: t("Destinations", "الوجهات"), to: "/countries" as const },
        { label: t("Jobs", "الوظائف"), to: "/jobs" as const },
      ],
    },
  ];
}

export function SiteFooter() {
  const t = useT();
  const columns = buildColumns(t);

  return (
    <footer className="bg-gradient-ink pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logoGreen}
              alt="Migrato Dream Jobs"
              className="h-12 w-auto"
              width={200}
              height={64}
              loading="lazy"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
              {t(
                "Saudi-based immigration consultancy delivering work permits and all visa categories across Schengen and European countries.",
                "شركة استشارات هجرة مقرها السعودية، تقدم تصاريح العمل وجميع فئات التأشيرات عبر دول شنغن والدول الأوروبية.",
              )}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              {t("Done Base — no advance payment", "الدفع عند الإنجاز — دون دفعة مقدمة")}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      {...("hash" in link ? { hash: link.hash as string } : {})}
                      className="text-sm text-primary-foreground/65 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>



                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              {t("Contact", "تواصل معنا")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-primary-foreground">{t("Head Office", "المكتب الرئيسي")}</span>
                  {t("Panerių g. 51, 03202 Vilnius, Lithuania", "Panerių g. 51, 03202 Vilnius, Lithuania")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-primary-foreground">{t("Saudi Arabia Office", "مكتب المملكة العربية السعودية")}</span>
                  {t("Olaya Street, Riyadh, Saudi Arabia", "شارع العليا، الرياض، المملكة العربية السعودية")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <a href="tel:+966553961233" className="transition-colors hover:text-brand">
                  <span dir="ltr">+966 55 396 1233</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <a href="mailto:info@migratoglobals.com" className="transition-colors hover:text-brand">
                  info@migratoglobals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-primary-foreground/12 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Migrato Dream Jobs. {t("All rights reserved.", "جميع الحقوق محفوظة.")}</p>
          <p>{t("Your route, our expertise.", "طريقك، وخبرتنا.")}</p>
        </div>
      </div>
    </footer>
  );
}
