import { STATS } from "@/data/content";
import { Stagger, StaggerItem } from "@/components/site/Reveal";

export function Stats() {
  return (
    <section className="washi border-b rule-ink bg-paper" aria-label="Cifras de la academia">
      <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-6 py-16 sm:px-10 lg:grid-cols-4 lg:py-20">
        {STATS.map((s) => (
          <StaggerItem key={s.label} className="flex flex-col items-center gap-3 px-4 py-6 text-center">
            <span className="font-display text-4xl text-ink sm:text-5xl">
              {s.value}
            </span>
            <span className="h-px w-8 bg-aka" aria-hidden="true" />
            <span className="text-[13px] leading-snug tracking-wide text-ink-mute">{s.label}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
