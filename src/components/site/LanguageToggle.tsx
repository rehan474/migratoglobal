import { Languages } from "lucide-react";

import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  onDark?: boolean;
  className?: string;
  iconOnly?: boolean;
};

export function LanguageToggle({ onDark = false, className, iconOnly = false }: LanguageToggleProps) {
  const { lang, setLang } = useI18n();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border transition-colors",
        iconOnly
          ? "size-10 justify-center p-0"
          : "px-3 py-1.5 text-sm font-semibold",
        onDark
          ? "border-primary-foreground/25 text-primary-foreground hover:border-brand hover:text-brand"
          : "border-border text-foreground hover:border-brand hover:text-brand",
        className,
      )}
    >
      <Languages className={cn("text-brand", iconOnly ? "size-5" : "size-4")} aria-hidden="true" />
      {!iconOnly && (lang === "en" ? "العربية" : "English")}
    </button>
  );
}

