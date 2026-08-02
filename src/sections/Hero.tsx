import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { whatsappUrl } from "@/data/content";
import { img } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative flex min-h-svh items-end overflow-hidden bg-ink">
      {/* Cinematic backdrop */}
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden="true">
        <motion.img
          src={img.heroKyoto}
          alt=""
          className="h-[115%] w-full object-cover"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 6.5, ease }}
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" aria-hidden="true" />

      {/* Vertical Japanese accent */}
      <motion.p
        lang="ja"
        className="writing-vertical absolute right-6 top-28 hidden font-jp text-sm tracking-[0.5em] text-paper/70 md:block lg:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.9, duration: 1.2 }}
      >
        言葉は、世界への扉。
      </motion.p>

      {/* Content */}
      <motion.div style={{ opacity: fade }} className="relative z-10 w-full px-6 pb-24 pt-40 sm:px-10 lg:px-24 lg:pb-28">
        <div className="max-w-4xl">
          <motion.p
            className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.34em] text-gold-soft"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.75, duration: 0.8, ease }}
          >
            <span className="h-px w-12 bg-gold/70" aria-hidden="true" />
            Academia de idiomas asiáticos · Bogotá
          </motion.p>

          <h1 className="mt-7 font-display text-[2.55rem] leading-[1.08] text-paper sm:text-6xl lg:text-[4.6rem]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 2.85, duration: 1.05, ease }}
              >
                Aprende japonés con
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 2.98, duration: 1.05, ease }}
              >
                profesores <em className="not-italic text-gold-soft">apasionados</em>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 3.11, duration: 1.05, ease }}
              >
                por el idioma y la cultura.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.35, duration: 0.9, ease }}
          >
            Quince años formando hispanohablantes que hoy estudian, trabajan y
            viven en Japón. Grupos de máximo diez personas, profesores nativos y
            una comunidad que celebra la cultura asiática cada semana.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.9, ease }}
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 bg-aka px-8 py-4 text-sm font-medium tracking-[0.14em] text-paper transition-colors duration-500 hover:bg-aka-deep"
            >
              Agendar información
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden="true">→</span>
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-paper/35 px-8 py-4 text-sm font-medium tracking-[0.14em] text-paper transition-all duration-500 hover:border-paper hover:bg-paper hover:text-ink"
            >
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-paper/55">Desliza</span>
        <span className="relative h-12 w-px overflow-hidden bg-paper/20">
          <span className="absolute inset-x-0 h-full animate-scroll-hint bg-gold-soft" />
        </span>
      </motion.div>
    </section>
  );
}
