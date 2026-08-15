import { ShieldCheck, BadgePercent } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n";

type DoneBaseBadgeProps = {
  variant?: "pill" | "card" | "inline" | "banner";
  className?: string;
};

export function DoneBaseBadge({ variant = "pill", className }: DoneBaseBadgeProps) {
  const t = useT();

  if (variant === "banner") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-2xl border border-brand/30 bg-gradient-brand px-6 py-5 text-center shadow-lift sm:flex-row sm:gap-4 sm:text-left",
          className,
        )}
      >
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
          <BadgePercent className="size-6 text-primary-foreground" aria-hidden="true" />
        </span>
        <div>
          <p className="text-lg font-bold text-primary-foreground">
            {t("Done Base — No Advance Payment Required", "بلا دفع مسبق — لا حاجة لدفع أي مبلغ مقدم")}
          </p>
          <p className="mt-1 text-sm text-primary-foreground/85">
            {t(
              "The only done-base immigration agency in Saudi Arabia. You pay only after your file reaches the next confirmed milestone.",
              "الوكالة الوحيدة في السعودية التي تعمل بنظام عدم الدفع المسبق. تدفع فقط بعد وصول ملفك إلى المرحلة التالية المؤكدة.",
            )}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "h-full rounded-2xl border border-brand/30 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lift",
          className,
        )}
      >
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft">
          <ShieldCheck className="size-5 text-brand" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-base font-semibold text-foreground">{t("Done Base — no advance", "بلا دفع مسبق")}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t(
            "We are the only done-base agency in Saudi Arabia. No advance payment is required; fees are settled after milestone confirmation.",
            "نحن الوكالة الوحيدة في السعودية التي تعمل بنظام عدم الدفع المسبق. لا يُطلب أي دفع مقدم؛ تُسدَّد الرسوم بعد تأكيد المرحلة.",
          )}
        </p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand",
          className,
        )}
      >
        <ShieldCheck className="size-3.5" aria-hidden="true" />
        {t("Done Base — no advance payment", "بلا دفع مسبق")}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/90 backdrop-blur",
        className,
      )}
    >
      <ShieldCheck className="size-4 text-brand" aria-hidden="true" />
      {t("Done Base — no advance payment required", "بلا دفع مسبق — لا حاجة لدفع أي مبلغ مقدم")}
    </span>
  );
}
