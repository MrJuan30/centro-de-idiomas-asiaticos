import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { img } from "@/lib/images";

const VALUES = [
  {
    title: "Kaizen · 改善",
    text: "Mejora continua: cada clase, cada material y cada semestre es mejor que el anterior.",
  },
  {
    title: "Omotenashi · おもてなし",
    text: "Hospitalidad japonesa: recibimos a cada estudiante como un invitado de honor.",
  },
  {
    title: "Rigor académico",
    text: "Metodología estructurada por niveles JLPT, evaluaciones reales y resultados medibles.",
  },
  {
    title: "Comunidad",
    text: "Una familia de estudiantes, egresados y profesores que se reúne alrededor de Asia.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="washi relative bg-paper py-24 lg:py-36" aria-labelledby="nosotros-title">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Sticky section title */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading kicker="Nosotros" jp="私たちについて" title="Una escuela nacida del amor por Asia" />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md leading-relaxed text-ink-soft">
                  El Centro de Idiomas Asiáticos nació en Bogotá con una convicción
                  sencilla: enseñar japonés es enseñar una forma de ver el mundo.
                  Hoy somos la academia de referencia en Colombia para quienes
                  quieren hablar, certificarse y vivir el idioma.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <a href="#metodo" className="link-line mt-8 inline-block text-sm font-medium tracking-[0.12em] text-aka">
                  Conoce nuestro método
                </a>
              </Reveal>
            </div>
          </div>

          {/* Story + values */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative">
                <img
                  src={img.studentsLaptop}
                  alt="Estudiantes del Centro de Idiomas Asiáticos en clase de japonés"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute -bottom-5 -left-5 hidden h-24 w-24 border border-gold/50 lg:block" aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-10 text-lg leading-relaxed text-ink-soft">
                Todo empezó con un grupo de profesores — japoneses y colombianos —
                que se reunían a enseñar en una sala prestada. Quince años después,
                más de 3.200 estudiantes han pasado por nuestras aulas: universitarios
                que hoy estudian en Tokio con beca, profesionales que negocian con
                Osaka, viajeros que recorren Kioto sin intérprete y fanáticos del
                manga que por fin leen en el idioma original.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="border-l-2 border-aka pl-6">
                  <h3 className="font-display text-xl text-ink">Misión</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-mute">
                    Formar hispanohablantes capaces de comunicarse en japonés con
                    soltura y sensibilidad cultural, a través de una enseñanza
                    rigurosa, humana y profundamente inspiradora.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="border-l-2 border-matcha pl-6">
                  <h3 className="font-display text-xl text-ink">Visión</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-mute">
                    Ser el puente cultural entre Colombia y Asia: la primera opción
                    del país para aprender japonés, coreano y mandarín con
                    excelencia certificable.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <h3 className="mt-14 text-[11px] font-medium uppercase tracking-[0.32em] text-ink-mute">
                Por qué elegirnos
              </h3>
            </Reveal>
            <dl className="mt-6 divide-y divide-ink/10 border-y rule-ink">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="grid gap-2 py-5 sm:grid-cols-[220px_1fr] sm:gap-8">
                    <dt className="font-display text-[17px] text-ink">{v.title}</dt>
                    <dd className="text-[15px] leading-relaxed text-ink-mute">{v.text}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>

        {/* Secondary images strip */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <figure className="group overflow-hidden">
              <img
                src={img.studentsLibrary}
                alt="Estudiantes compartiendo en la biblioteca de la academia"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="group overflow-hidden sm:mt-14">
              <img
                src={img.graduation}
                alt="Egresados celebrando su certificación en japonés"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
