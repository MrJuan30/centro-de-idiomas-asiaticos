import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { METHOD_STEPS } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Method() {
  return (
    <section id="metodo" className="washi relative bg-paper-dim py-24 lg:py-36" aria-labelledby="metodo-title">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-24">
        <div className="max-w-2xl">
          <SectionHeading kicker="Nuestro método" jp="学び方" title="Seis pasos, un camino claro" />
          <Reveal delay={0.15}>
            <p className="mt-8 leading-relaxed text-ink-mute">
              Nada se deja al azar. Cada estudiante recorre una ruta diseñada,
              medida y acompañada — del primer saludo en japonés a la certificación
              internacional.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-16 lg:mt-20">
          {/* vertical ink line */}
          <motion.span
            className="absolute left-[27px] top-0 w-px origin-top bg-ink/20 md:left-1/2"
            style={{ height: "100%" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 2.2, ease }}
            aria-hidden="true"
          />

          {METHOD_STEPS.map((step, i) => {
            const left = i % 2 === 0;
            return (
              <li key={step.num} className="relative pb-14 last:pb-0 md:pb-20">
                {/* node */}
                <span
                  className="absolute left-0 top-1 flex h-14 w-14 items-center justify-center border border-aka bg-paper md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                >
                  <span className="font-jp text-lg text-aka" lang="ja">{step.jp}</span>
                </span>

                <div className={`pl-24 md:w-1/2 md:pl-0 ${left ? "md:pr-20 md:text-right" : "md:ml-auto md:pl-20"}`}>
                  <Reveal>
                    <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-gold">
                      Paso {step.num}
                    </span>
                    <h3 className="mt-3 font-display text-2xl text-ink lg:text-[1.7rem]">{step.title}</h3>
                    <p className={`mt-3 max-w-md text-[15px] leading-relaxed text-ink-mute ${left ? "md:ml-auto" : ""}`}>
                      {step.text}
                    </p>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
