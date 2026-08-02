import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";
import { CONTACT, NAV_LINKS, SOCIAL, whatsappUrl } from "@/data/content";
import { Hanko } from "./Hanko";

const SOCIAL_ICONS = [Instagram, Facebook, Youtube, Music2];

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#inicio" className="flex items-center gap-4" aria-label="Volver al inicio">
              <Hanko className="h-12 w-12" />
              <span className="font-display text-lg leading-tight tracking-[0.16em] text-paper">
                CENTRO DE IDIOMAS
                <span className="block text-[12px] tracking-[0.36em] text-paper/60">ASIÁTICOS</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/55">
              Academia de japonés, coreano y chino mandarín en Bogotá.
              Quince años construyendo puentes entre Colombia y Asia.
            </p>
            <p className="mt-6 font-jp text-sm tracking-[0.3em] text-gold-soft/80" lang="ja">
              また会いましょう — Nos vemos pronto
            </p>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-3" aria-label="Enlaces rápidos">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft">Explora</h2>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-line text-[15px] text-paper/65 transition-colors hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft">Contacto</h2>
            <address className="mt-6 space-y-3 text-[15px] not-italic leading-relaxed text-paper/65">
              <p>{CONTACT.address}</p>
              <p>
                <a href={`tel:+${CONTACT.phoneIntl}`} className="transition-colors hover:text-paper">
                  +57 {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors hover:text-paper">
                  {CONTACT.email}
                </a>
              </p>
            </address>
            <div className="mt-7 flex gap-3">
              {SOCIAL.map((s, i) => {
                const Icon = SOCIAL_ICONS[i];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center border border-paper/20 text-paper/70 transition-all duration-500 hover:border-gold-soft hover:text-gold-soft"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-8 text-[13px] text-paper/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Centro de Idiomas Asiáticos · Bogotá, Colombia</p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line tracking-[0.1em] text-paper/55"
          >
            WhatsApp directo →
          </a>
        </div>
      </div>
    </footer>
  );
}
