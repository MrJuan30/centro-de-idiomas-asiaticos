import { Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TESTIMONIALS } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonios" className="washi bg-paper-dim py-24 lg:py-36" aria-labelledby="testimonios-title">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading kicker="Testimonios" jp="生徒の声" title="Historias que empezaron con un «konnichiwa»" />
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="flex items-center gap-3 lg:justify-end lg:pb-2">
              <span className="flex gap-1 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <p className="text-sm text-ink-mute">
                <span className="font-semibold text-ink">4,8 / 5</span> · 153 reseñas en Google
              </p>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col justify-between bg-paper p-8 lg:p-12">
                <blockquote>
                  <span className="font-display text-6xl leading-none text-aka/25" aria-hidden="true">“</span>
                  <p className="-mt-4 text-[15.5px] leading-relaxed text-ink-soft lg:text-base">{t.quote}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t rule-ink pt-6">
                  <img
                    src={t.image}
                    alt={t.imageAlt}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-[17px] text-ink">{t.name}</p>
                    <p className="text-[13px] text-ink-mute">
                      {t.age} · {t.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
