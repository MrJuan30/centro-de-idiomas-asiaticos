import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS, whatsappUrl } from "@/data/content";
import { Hanko } from "./Hanko";

const ease = [0.22, 1, 0.36, 1] as const;

function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col bg-ink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="pattern-seigaiha pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="flex items-center justify-between px-6 py-5 lg:px-12">
            <div className="flex items-center gap-3">
              <Hanko className="h-9 w-9" />
              <span className="font-display text-sm tracking-[0.22em] text-paper">
                CENTRO DE IDIOMAS ASIÁTICOS
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center text-paper transition-colors hover:text-gold-soft"
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 items-center overflow-y-auto px-6 lg:px-12" aria-label="Principal">
            <ul className="grid w-full gap-1 py-8 lg:grid-cols-2 lg:gap-x-16">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.055, duration: 0.6, ease }}
                  className="border-b border-paper/10"
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-5 py-4 lg:py-5"
                  >
                    <span className="font-jp text-xs text-gold-soft/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl text-paper transition-colors group-hover:text-gold-soft sm:text-3xl lg:text-4xl">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-paper/60 lg:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <p>{CONTACT.addressShort}</p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line text-gold-soft"
            >
              WhatsApp {CONTACT.phoneDisplay}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 320);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <motion.header
        className={`fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-5 py-4 transition-colors lg:hidden ${
          scrolled ? "bg-ink/92 backdrop-blur-sm" : "bg-transparent"
        }`}
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease }}
      >
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <Hanko className="h-9 w-9" />
          <span className="font-display text-[13px] leading-tight tracking-[0.18em] text-paper">
            CENTRO DE IDIOMAS
            <span className="block text-[10px] tracking-[0.3em] text-paper/70">ASIÁTICOS</span>
          </span>
        </a>
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center text-paper"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <Menu className="h-6 w-6" />
        </button>
      </motion.header>

      {/* Desktop left rail */}
      <motion.aside
        className="fixed inset-y-0 left-0 z-[60] hidden w-[92px] flex-col items-center justify-between border-r border-ink/10 bg-paper py-7 lg:flex"
        animate={{ x: open ? 0 : 0 }}
        aria-label="Barra lateral"
      >
        <a href="#inicio" aria-label="Ir al inicio">
          <Hanko className="h-11 w-11 transition-transform duration-500 hover:rotate-3" />
        </a>

        <button
          onClick={() => setOpen(true)}
          className="group flex flex-col items-center gap-3"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="flex h-11 w-11 items-center justify-center border border-ink/20 transition-colors group-hover:border-aka group-hover:text-aka">
            <Menu className="h-5 w-5" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ink-mute">Menú</span>
        </button>

        <p className="writing-vertical font-jp text-[13px] tracking-[0.42em] text-ink-mute" lang="ja">
          日本語を、心で学ぶ。
        </p>
      </motion.aside>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
