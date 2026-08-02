interface HankoProps {
  className?: string;
  char?: string;
}

/** Red seal (hanko) brand mark — the kanji 亜 ("Asia") as a stamp */
export function Hanko({ className = "h-10 w-10", char = "亜" }: HankoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Sello del Centro de Idiomas Asiáticos">
      <rect x="2" y="2" width="60" height="60" rx="7" fill="#B22222" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="4" fill="none" stroke="#F8F6F1" strokeOpacity="0.55" strokeWidth="1.4" />
      <text
        x="32"
        y="45"
        textAnchor="middle"
        fontSize="34"
        fill="#F8F6F1"
        fontFamily="'Noto Serif JP', serif"
        fontWeight="600"
      >
        {char}
      </text>
    </svg>
  );
}

/** Outlined version for dark backgrounds */
export function HankoOutline({ className = "h-10 w-10", char = "亜" }: HankoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Sello del Centro de Idiomas Asiáticos">
      <rect x="2" y="2" width="60" height="60" rx="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text
        x="32"
        y="45"
        textAnchor="middle"
        fontSize="34"
        fill="currentColor"
        fontFamily="'Noto Serif JP', serif"
        fontWeight="600"
      >
        {char}
      </text>
    </svg>
  );
}
