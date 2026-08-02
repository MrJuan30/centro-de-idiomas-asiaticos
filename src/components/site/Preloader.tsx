import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const LETTERS = "CENTRO DE IDIOMAS ASIÁTICOS".split("");

/**
 * Cinematic opening: a red line grows to full height, the academy name
 * reveals letter by letter, then the curtain lifts.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 2300);
    const t2 = setTimeout(onDone, 3100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink"
      role="status"
      aria-label="Cargando sitio"
      initial={{ y: 0 }}
      animate={phase === "out" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      {/* growing red line */}
      <motion.span
        className="absolute left-1/2 top-0 w-px bg-aka"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.1, ease }}
        aria-hidden="true"
      />
      <div className="relative px-6 text-center">
        <motion.p
          className="font-jp text-sm tracking-[0.5em] text-gold-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          アジア言語センター
        </motion.p>
        <h1 className="mt-5 font-display text-xl tracking-[0.28em] text-paper sm:text-2xl md:text-3xl" aria-hidden="true">
          {LETTERS.map((l, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, scale: 1.25 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.045, duration: 0.5, ease }}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </h1>
        <span className="sr-only">Centro de Idiomas Asiáticos</span>
        <motion.p
          className="mt-5 text-[11px] uppercase tracking-[0.4em] text-paper/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          Bogotá · Colombia
        </motion.p>
      </div>
    </motion.div>
  );
}
