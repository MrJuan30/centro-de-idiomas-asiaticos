import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WHY_JAPANESE } from "@/data/content";
import { img } from "@/lib/images";

export function WhyJapanese() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} id="por-que-japones" className="relative overflow-hidden bg-ink py-24 lg:py-36" aria-labelledby="por-que-title">
      {/* Parallax backdrop */}
      <motion.div className="absolute inset-0" style={{ y }} aria-hidden="true">
        <img src={img.shibuyaNight} alt="" className="h-[116%] w-full object-cover opacity-[0.16]" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              dark
              kicker="¿Por qué japonés?"
              jp="なぜ日本語か"
              title="Un idioma, mil puertas abiertas"
            />
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="max-w-md leading-relaxed text-paper/70 lg:pb-2">
              Aprender japonés no es un pasatiempo: es una decisión estratégica.
              Estas son las razones que traen cada año a cientos de colombianos a
              nuestras aulas.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_JAPANESE.map((item, i) => (
            <StaggerItem key={item.title} className="group relative bg-ink p-8 transition-colors duration-700 hover:bg-[#262626] lg:p-10">
              <span className="font-jp text-xs tracking-[0.3em] text-gold-soft/70" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-[1.35rem] text-paper">{item.title}</h3>
              <span className="mt-4 block h-px w-8 bg-aka transition-all duration-700 group-hover:w-16" aria-hidden="true" />
              <p className="mt-4 text-[15px] leading-relaxed text-paper/65">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
