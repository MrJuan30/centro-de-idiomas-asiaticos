import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { COURSES, whatsappUrl } from "@/data/content";

export function Courses() {
  return (
    <section id="cursos" className="washi bg-paper py-24 lg:py-36" aria-labelledby="cursos-title">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading kicker="Cursos" jp="コース" title="Programas para cada camino" />
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="max-w-md leading-relaxed text-ink-mute lg:pb-2">
              Desde tu primer hiragana hasta la certificación N1. Todos los
              programas incluyen talleres culturales, club de conversación y
              acompañamiento personalizado.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <StaggerItem key={c.name}>
              <article className="group flex h-full flex-col">
                <figure className="relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.imageAlt}
                    loading="lazy"
                    className="aspect-[16/11] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center bg-aka font-jp text-lg text-paper" lang="ja">
                    {c.jp}
                  </span>
                  <span className="absolute bottom-0 left-0 bg-ink/85 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-paper">
                    {c.level}
                  </span>
                </figure>
                <div className="flex flex-1 flex-col border-b rule-ink pb-6 pt-6">
                  <h3 className="font-display text-[1.4rem] leading-snug text-ink">{c.name}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-mute">{c.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] uppercase tracking-[0.14em] text-ink-mute">
                    <span>{c.duration}</span>
                    <span className="h-3 w-px bg-ink/20" aria-hidden="true" />
                    <span>{c.modality}</span>
                  </div>
                  <a
                    href={whatsappUrl(`Hola, me interesa el curso: ${c.name}. ¿Me pueden dar más información?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line mt-5 inline-flex w-fit items-center gap-2 text-[13px] font-medium tracking-[0.12em] text-aka"
                  >
                    Solicitar información
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Secondary languages strip */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-start justify-between gap-6 border rule-ink bg-paper-dim px-8 py-8 sm:px-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-aka">También enseñamos</p>
              <p className="mt-3 font-display text-2xl text-ink">
                Coreano <span className="mx-2 text-gold" lang="ko">한국어</span> ·
                Chino mandarín <span className="mx-2 text-gold" lang="zh">中文</span>
              </p>
            </div>
            <a
              href={whatsappUrl("Hola, quiero información sobre los cursos de coreano y chino mandarín.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-ink px-7 py-3.5 text-sm font-medium tracking-[0.12em] text-ink transition-all duration-500 hover:bg-ink hover:text-paper"
            >
              Consultar horarios
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
