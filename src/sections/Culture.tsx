import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CULTURE, type CultureItem } from "@/data/content";

function ImageCard({ item, className = "", tall = false }: { item: CultureItem; className?: string; tall?: boolean }) {
  return (
    <article className={`group ${className}`}>
      <figure className="overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05] ${
            tall ? "aspect-[4/5]" : "aspect-[16/10]"
          }`}
        />
      </figure>
      <div className="flex items-baseline justify-between gap-4 pt-5">
        <h3 className="font-display text-[1.35rem] text-ink">{item.title}</h3>
        <span className="shrink-0 font-jp text-sm tracking-[0.2em] text-aka" lang="ja">{item.jp}</span>
      </div>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-mute">{item.text}</p>
    </article>
  );
}

function KanjiCard({ item, dark = false }: { item: CultureItem; dark?: boolean }) {
  return (
    <article
      className={`group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden p-8 lg:p-10 ${
        dark ? "bg-ink text-paper" : "border rule-ink bg-paper-dim text-ink"
      }`}
    >
      <span
        className={`pointer-events-none absolute -right-6 -top-10 select-none font-jp text-[11rem] leading-none transition-transform duration-[1.6s] ease-out group-hover:-translate-y-2 ${
          dark ? "text-paper/[0.07]" : "text-ink/[0.06]"
        }`}
        lang="ja"
        aria-hidden="true"
      >
        {item.jp.slice(0, 1)}
      </span>
      <span className="font-jp text-sm tracking-[0.3em] text-aka" lang="ja">{item.jp}</span>
      <div className="relative">
        <h3 className="font-display text-[1.6rem]">{item.title}</h3>
        <p className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-paper/70" : "text-ink-mute"}`}>{item.text}</p>
      </div>
    </article>
  );
}

export function Culture() {
  const [tea, calligraphy, festivals, cuisine, origami, etiquette, history] = CULTURE;

  return (
    <section id="cultura" className="washi bg-paper py-24 lg:py-36" aria-labelledby="cultura-title">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading kicker="Cultura japonesa" jp="日本文化" title="El idioma se vive, no solo se estudia" />
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="max-w-md leading-relaxed text-ink-mute lg:pb-2">
              Cada semestre abrimos talleres gratuitos para nuestros estudiantes:
              porque detrás de cada palabra japonesa hay mil años de tradición.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16">
          <Reveal className="lg:col-span-7">
            <ImageCard item={tea} />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <KanjiCard item={calligraphy} dark />
          </Reveal>

          <Reveal className="lg:col-span-4">
            <ImageCard item={festivals} tall />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4">
            <ImageCard item={cuisine} tall />
          </Reveal>
          <Reveal delay={0.16} className="lg:col-span-4">
            <KanjiCard item={origami} />
          </Reveal>

          <Reveal className="lg:col-span-6">
            <ImageCard item={etiquette} />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <ImageCard item={history} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
