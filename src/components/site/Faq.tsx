import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n";

export const faqs = [
  {
    q: "How can I get a work visa for Europe from Saudi Arabia?",
    a: "You need a verified job offer from a European employer, an approved work permit filed with that country's labour authority, and a national (type D) visa stamped at the embassy. Migrato Dream Jobs manages all three stages, including document attestation and appointment booking.",
  },
  {
    q: "Which European country gives work permits the fastest?",
    a: "Malta, Lithuania, Czechia and Hungary currently process employer-sponsored work permits fastest, typically in 6-12 weeks. Germany and the Netherlands take longer but offer higher salaries and faster permanent residence.",
  },
  {
    q: "What is the difference between a Schengen visa and a work permit?",
    a: "A Schengen visa is a short-stay visa valid up to 90 days for tourism or business in 29 countries. A work permit plus national D visa allows you to live and work legally long term in one specific country.",
  },
  {
    q: "Can my family join me on a European work visa?",
    a: "Yes. Most European countries allow family reunification once you hold a residence permit and meet income and accommodation requirements. We prepare dependent visa applications for spouses and children in parallel.",
  },
  {
    q: "How much does a Europe work visa cost?",
    a: "Total cost depends on the country, permit type and government fees. After your free assessment you receive one written quotation covering government, embassy, translation and service fees, with no hidden charges.",
  },
  {
    q: "Do you help if my Schengen visa was previously rejected?",
    a: "Yes. We review the refusal grounds, rebuild the documentation file, and prepare an appeal or a stronger fresh application addressing each objection raised by the consulate.",
  },
];

const faqsAr = [
  {
    q: "كيف يمكنني الحصول على تأشيرة عمل لأوروبا من السعودية؟",
    a: "تحتاج إلى عرض عمل موثق من صاحب عمل أوروبي، وتصريح عمل معتمد لدى جهة العمل في تلك الدولة، وتأشيرة وطنية (نوع D) مختومة من السفارة. تتولى ميغراتو دريم جوبز إدارة هذه المراحل الثلاث جميعها، بما في ذلك تصديق المستندات وحجز المواعيد.",
  },
  {
    q: "أي دولة أوروبية تمنح تصاريح العمل بأسرع وقت؟",
    a: "تُعد مالطا وليتوانيا والتشيك والمجر حاليًا الأسرع في معالجة تصاريح العمل المكفولة من صاحب العمل، وغالبًا خلال 6-12 أسبوعًا. أما ألمانيا وهولندا فتستغرقان وقتًا أطول لكنهما تقدمان رواتب أعلى وإقامة دائمة أسرع.",
  },
  {
    q: "ما الفرق بين تأشيرة شنغن وتصريح العمل؟",
    a: "تأشيرة شنغن هي تأشيرة قصيرة الأمد صالحة حتى 90 يومًا للسياحة أو الأعمال في 29 دولة. أما تصريح العمل مع التأشيرة الوطنية D فيتيح لك العيش والعمل بشكل قانوني لفترة طويلة في دولة واحدة محددة.",
  },
  {
    q: "هل يمكن لعائلتي الانضمام إليّ بتأشيرة العمل الأوروبية؟",
    a: "نعم. تسمح معظم الدول الأوروبية بلمّ شمل الأسرة بمجرد حصولك على تصريح الإقامة واستيفاء شروط الدخل والسكن. نقوم بإعداد طلبات تأشيرات المعالين للزوجة/الزوج والأبناء بالتوازي مع ملفك.",
  },
  {
    q: "كم تبلغ تكلفة تأشيرة العمل الأوروبية؟",
    a: "تعتمد التكلفة الإجمالية على الدولة ونوع التصريح والرسوم الحكومية. بعد التقييم المجاني، تحصل على عرض سعر واحد مكتوب يشمل الرسوم الحكومية ورسوم السفارة والترجمة والخدمة، دون أي رسوم خفية.",
  },
  {
    q: "هل تساعدون إذا رُفضت تأشيرة شنغن الخاصة بي سابقًا؟",
    a: "نعم. نراجع أسباب الرفض، ونعيد بناء ملف الوثائق، ونُعدّ استئنافًا أو طلبًا جديدًا أقوى يعالج كل اعتراض أثاره القنصلية.",
  },
];

export function Faq() {
  const { lang, t } = useI18n();
  const displayFaqs = lang === "ar" ? faqsAr : faqs;

  return (
    <section id="faq" className="scroll-mt-24 bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("FAQ", "الأسئلة الشائعة")}</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t("Europe visa questions, answered", "إجابات على أسئلتكم حول تأشيرات أوروبا")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t(
              "The questions our Riyadh office is asked every week about Schengen visas and European work permits.",
              "الأسئلة التي يتلقاها مكتبنا في الرياض أسبوعيًا حول تأشيرات شنغن وتصاريح العمل الأوروبية.",
            )}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {displayFaqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
