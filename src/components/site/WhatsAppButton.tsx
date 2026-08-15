import { MessageCircle } from "lucide-react";

import { useT } from "@/i18n";

const WHATSAPP_NUMBER = "966553961233";

export function WhatsAppButton() {
  const t = useT();
  const WHATSAPP_MESSAGE = encodeURIComponent(
    t(
      "Hi Migrato Dream Jobs, I would like to know more about your visa and job opportunities.",
      "مرحبًا Migrato Dream Jobs، أرغب في معرفة المزيد عن خدمات التأشيرات وفرص العمل لديكم.",
    ),
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("Chat with us on WhatsApp", "تواصل معنا عبر واتساب")}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:right-6 sm:bottom-6 sm:px-4"
    >
      <MessageCircle className="size-5 fill-current sm:size-6" />
      <span className="hidden text-sm font-semibold sm:inline">{t("WhatsApp Us", "راسلنا عبر واتساب")}</span>
    </a>
  );
}
