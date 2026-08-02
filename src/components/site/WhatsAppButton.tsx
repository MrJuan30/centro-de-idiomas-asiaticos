import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/content";

/** Floating WhatsApp button with elegant pulse ring — always visible */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[65] flex items-center gap-0"
      aria-label="Escríbenos por WhatsApp"
    >
      <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap border border-ink/10 bg-paper px-4 py-2 text-xs tracking-wide text-ink opacity-0 shadow-sm transition-all duration-500 group-hover:opacity-100 md:block">
        Escríbenos por WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" aria-hidden="true" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-500 group-hover:scale-105">
          <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
