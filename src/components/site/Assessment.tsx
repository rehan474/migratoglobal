import { type FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n";

function buildVisaTypes(t: ReturnType<typeof useT>) {
  return [
    t("Work visa & work permit", "تأشيرة عمل وتصريح عمل"),
    t("Schengen visit / tourist visa", "تأشيرة زيارة / سياحة شنغن"),
    t("Student visa", "تأشيرة طالب"),
    t("Family / dependent visa", "تأشيرة عائلية / تابعة"),
    t("Business or investor visa", "تأشيرة أعمال أو مستثمر"),
  ];
}

export function Assessment() {
  const t = useT();
  const visaTypes = buildVisaTypes(t);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      visaType: String(formData.get("visa") ?? "").trim(),
      country: String(formData.get("country") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.error || t("Something went wrong", "حدث خطأ ما"));
      }

      form.reset();
      toast.success(t("Request received", "تم استلام الطلب"), {
        description: t(
          "A Migrato Dream Jobs case manager will contact you within one business day.",
          "سيتواصل معك أحد مسؤولي الحالات في Migrato Dream Jobs خلال يوم عمل واحد.",
        ),
      });
    } catch (error) {
      toast.error(t("Failed to send", "فشل الإرسال"), {
        description:
          error instanceof Error
            ? error.message
            : t("Please try again or contact us on WhatsApp.", "يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب."),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="assessment" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-3xl border border-border bg-card shadow-lift lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative bg-gradient-brand p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-10 size-56 rounded-full bg-primary-foreground/10 blur-2xl animate-float"
            />
            <div className="relative">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                {t("Free visa eligibility assessment", "تقييم مجاني لأهلية التأشيرة")}
              </h2>
              <p className="mt-4 max-w-sm text-primary-foreground/85">
                {t(
                  "Tell us your profile and preferred destination. We reply with the European routes you qualify for, realistic timelines and a full cost breakdown.",
                  "أخبرنا بملفك الشخصي والوجهة المفضلة لديك. سنرد عليك بالمسارات الأوروبية التي تستوفي شروطها، مع جدول زمني واقعي وتفصيل كامل للتكاليف.",
                )}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-primary-foreground/90">
                {[
                  t("No advance payment required", "لا حاجة لدفعة مقدمة"),
                  t("Response within one business day", "الرد خلال يوم عمل واحد"),
                  t("Arabic and English case managers", "مسؤولو حالات يتحدثون العربية والإنجليزية"),
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-primary-foreground" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Reveal className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">{t("Full name", "الاسم الكامل")}</Label>
                <Input id="name" name="name" required placeholder={t("Ahmed Al-Otaibi", "أحمد العتيبي")} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">{t("Phone / WhatsApp", "الهاتف / واتساب")}</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="+966 5X XXX XXXX" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="email">{t("Email address", "البريد الإلكتروني")}</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="visa">{t("Visa type", "نوع التأشيرة")}</Label>
                <Select name="visa" defaultValue="Work visa & work permit">
                  <SelectTrigger id="visa">
                    <SelectValue placeholder={t("Select visa type", "اختر نوع التأشيرة")} />
                  </SelectTrigger>
                  <SelectContent>
                    {visaTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">{t("Preferred country", "الدولة المفضلة")}</Label>
                <Input id="country" name="country" placeholder={t("Germany, Malta, Portugal…", "ألمانيا، مالطا، البرتغال…")} />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message">{t("Your background", "خلفيتك المهنية")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t(
                    "Qualification, years of experience, current visa status…",
                    "المؤهل، سنوات الخبرة، حالة التأشيرة الحالية…",
                  )}
                />
              </div>
              <Button
                type="submit"
                variant="brand"
                size="xl"
                disabled={loading}
                className="sm:col-span-2"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="size-4" aria-hidden="true" />
                )}
                {loading ? t("Sending…", "جارٍ الإرسال…") : t("Get my free assessment", "احصل على تقييمي المجاني")}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
