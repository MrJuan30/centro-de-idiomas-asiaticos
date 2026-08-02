import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQS } from "@/data/content";

export function Faq() {
  return (
    <section id="preguntas" className="washi bg-paper py-24 lg:py-36" aria-labelledby="preguntas-title">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading kicker="Preguntas frecuentes" jp="よくある質問" title="Todo lo que quieres saber" />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md leading-relaxed text-ink-mute">
                  ¿No encuentras tu respuesta? Escríbenos por WhatsApp y un
                  asesor académico te orientará en minutos.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <a href="#contacto" className="link-line mt-8 inline-block text-sm font-medium tracking-[0.12em] text-aka">
                  Hacer otra pregunta
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal className="lg:col-span-7">
            <Accordion type="single" collapsible className="border-t rule-ink">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rule-ink border-b">
                  <AccordionTrigger className="gap-6 py-6 text-left font-display text-lg text-ink hover:text-aka hover:no-underline lg:text-xl [&[data-state=open]]:text-aka">
                    <span className="flex items-baseline gap-5">
                      <span className="font-jp text-xs tracking-[0.2em] text-gold" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pl-0 pr-4 text-[15px] leading-relaxed text-ink-mute sm:pl-12">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
