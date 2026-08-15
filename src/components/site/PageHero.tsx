import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  const t = useT();

  return (
    <section className="relative overflow-hidden bg-gradient-ink pb-20 pt-32 lg:pb-24 lg:pt-40">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 size-96 rounded-full bg-brand/25 blur-[130px] animate-float"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-medium text-primary-foreground/60"
          >
            <Link to="/" className="transition-colors hover:text-brand">
              {t("Home", "الرئيسية")}
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-primary-foreground/90">{eyebrow}</span>
          </nav>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] text-primary-foreground sm:text-5xl">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
