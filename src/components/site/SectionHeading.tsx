import { MaskReveal, Reveal } from "./Reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  jp?: string;
  dark?: boolean;
  align?: "left" | "center";
}

/** Editorial section header: letterspaced kicker, serif display title, optional kanji */
export function SectionHeading({ kicker, title, jp, dark = false, align = "left" }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={center ? "text-center" : ""}>
      <Reveal>
        <p
          className={`flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.32em] ${
            dark ? "text-gold-soft" : "text-aka"
          } ${center ? "justify-center" : ""}`}
        >
          <span className={`h-px w-10 ${dark ? "bg-gold/60" : "bg-aka/60"}`} aria-hidden="true" />
          {kicker}
          {jp && (
            <span className={`font-jp text-sm normal-case tracking-widest ${dark ? "text-paper/50" : "text-ink-mute"}`}>
              {jp}
            </span>
          )}
        </p>
      </Reveal>
      <MaskReveal delay={0.08}>
        <h2
          className={`mt-6 font-display text-4xl leading-[1.12] text-balance sm:text-5xl lg:text-[3.4rem] ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </MaskReveal>
    </div>
  );
}
