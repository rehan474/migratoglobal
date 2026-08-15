import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/migrato-logo-tp.png.asset.json";
import logoGreen from "@/assets/migrato-logo-tp-white.png.asset.json";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/site/LanguageToggle";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n";

function buildLinks(t: ReturnType<typeof useT>) {
  return [
    { label: t("Visa Services", "خدمات التأشيرات"), to: "/services" as const },
    { label: t("Countries", "الدول"), to: "/countries" as const },
    { label: t("Jobs", "الوظائف"), to: "/jobs" as const },
    { label: t("Process", "آلية العمل"), to: "/process" as const },
    { label: t("About Us", "من نحن"), to: "/about" as const },
  ];
}

export function SiteHeader() {
  const t = useT();
  const links = buildLinks(t);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center" aria-label={t("Migrato Dream Jobs home", "الصفحة الرئيسية لـ Migrato Dream Jobs")}>
          <img
            src={scrolled ? logo.url : logoGreen.url}
            alt="Migrato Dream Jobs logo"
            className="h-11 w-auto transition-opacity duration-300"
            width={932}
            height={362}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t("Main", "الرئيسية")}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/75 hover:text-primary-foreground",
              )}
              activeProps={{ className: "after:w-full" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>


        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle onDark={!scrolled} />
          <a
            href="tel:+966553961233"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70",
              scrolled ? "text-foreground" : "text-primary-foreground",
            )}
          >
            <Phone className="size-4 text-brand" aria-hidden="true" />
            <span dir="ltr">+966 55 396 1233</span>
          </a>
          <Button variant="brand" size="lg" asChild>
            <a href="#assessment">{t("Free Eligibility Check", "تحقق مجاني من الأهلية")}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle iconOnly onDark={!scrolled} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-lg border",
              scrolled
                ? "border-border text-foreground"
                : "border-primary-foreground/30 text-primary-foreground",
            )}
            aria-label={open ? t("Close menu", "إغلاق القائمة") : t("Open menu", "فتح القائمة")}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label={t("Mobile", "الجوال")}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button variant="brand" size="lg" className="mt-5 w-full" asChild>
            <a href="#assessment" onClick={() => setOpen(false)}>
              {t("Free Eligibility Check", "تحقق مجاني من الأهلية")}
            </a>
          </Button>

          <LanguageToggle className="mt-4 w-full justify-center" />
        </div>
      ) : null}
    </header>
  );
}
