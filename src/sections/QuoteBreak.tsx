import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";

/** Cinematic full-bleed parallax quote */
export function QuoteBreak() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative flex min-h-[70svh] items-center overflow-hidden" aria-label="Cita inspiradora">
      <motion.div className="absolute inset-0" style={{ y }} aria-hidden="true">
        <img src={img.sakuraRiver} alt="" className="h-[124%] w-full object-cover" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:px-10">
        <Reveal>
          <p className="font-jp text-lg tracking-[0.4em] text-gold-soft" lang="ja">
            継続は力なり
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <blockquote className="mt-6 font-display text-3xl leading-snug text-paper text-balance sm:text-4xl lg:text-[2.9rem]">
            «La constancia es poder: nadie aprende japonés en un día,
            pero cualquiera puede aprenderlo un día tras otro.»
          </blockquote>
        </Reveal>
        <Reveal delay={0.22}>
          <cite className="mt-8 block text-[12px] not-italic uppercase tracking-[0.34em] text-paper/70">
            Proverbio japonés · Filosofía de nuestra escuela
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
