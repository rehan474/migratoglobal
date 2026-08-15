import { DoneBaseBadge } from "@/components/site/DoneBaseBadge";
import { Reveal } from "@/components/site/Reveal";

export function DoneBaseBanner() {
  return (
    <section className="bg-background py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <DoneBaseBadge variant="banner" />
        </Reveal>
      </div>
    </section>
  );
}
