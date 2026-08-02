/**
 * Descarga las imágenes del sitio (royalty-free, Unsplash) en src/assets/img.
 * Se ejecuta automáticamente tras `npm install` (postinstall) y no re-descarga
 * archivos que ya existen.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "assets", "img");

/** [nombre-archivo, unsplash-id, ancho] */
const IMAGES = [
  ["hero-kyoto", "photo-1493976040374-85c8e12f0c0e", 1920],
  ["pagoda-fuji", "photo-1526481280693-3bfa7568e0f3", 1600],
  ["shibuya-night", "photo-1542051841857-5f90071e7989", 1600],
  ["fushimi-inari", "photo-1558862107-d49ef2a04d72", 1200],
  ["itsukushima-torii", "photo-1492571350019-22de08371fd3", 1400],
  ["mt-fuji", "photo-1578637387939-43c525550085", 1600],
  ["sakura-river", "photo-1524413840807-0c3cb6fa808d", 1400],
  ["sakura-close", "photo-1522383225653-ed111181a951", 1200],
  ["osaka-street", "photo-1517154421773-0529f29ea451", 1200],
  ["temple-lanterns", "photo-1554797589-7241bb691973", 1400],
  ["tokyo-alley", "photo-1528360983277-13d401cdc186", 1200],
  ["students-laptop", "photo-1522202176988-66273c2fd55f", 1200],
  ["students-library", "photo-1523240795612-9a054b0db644", 1200],
  ["classroom", "photo-1509062522246-3755977927d7", 1200],
  ["open-books", "photo-1456513080510-7bf3a84b82f8", 1000],
  ["library-hall", "photo-1524995997946-a1c2e315a42f", 1000],
  ["reading-room", "photo-1564981797816-1043664bf78d", 1000],
  ["kids-education", "photo-1503676260728-1c00da094a0b", 1000],
  ["teacher", "photo-1544717305-2782549b5136", 1000],
  ["notebook-pen", "photo-1471107340929-a87cd0f5b5f3", 1000],
  ["graduation", "photo-1541339907198-e08756dedf3f", 1200],
  ["online-class", "photo-1516321318423-f06f85e504b3", 1000],
  ["business-meeting", "photo-1552664730-d307ca884978", 1000],
  ["team-laptops", "photo-1519389950473-47ba0277781c", 1000],
  ["matcha", "photo-1582793988951-9aed5509eb97", 1000],
  ["sushi-boat", "photo-1553621042-f6e147245754", 1200],
  ["sushi-dark", "photo-1617196034796-73dfa7b1fd56", 1000],
  ["ramen", "photo-1526318896980-cf78c088247c", 1000],
  ["zen-room", "photo-1621188988909-fbef0a88dc04", 1000],
  ["portrait-1", "photo-1494790108377-be9c29b29330", 500],
  ["portrait-2", "photo-1507003211169-0a1dd7228f2d", 500],
  ["portrait-3", "photo-1438761681033-6461ffad8d80", 500],
  ["portrait-4", "photo-1500648767791-00dcc994a43e", 500],
];

mkdirSync(OUT_DIR, { recursive: true });

let downloaded = 0;
for (const [name, id, w] of IMAGES) {
  const dest = join(OUT_DIR, `${name}.webp`);
  if (existsSync(dest)) continue;
  const url = `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop&fm=webp`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`No se pudo descargar ${name}: HTTP ${res.status}`);
      continue;
    }
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    downloaded++;
  } catch (err) {
    console.warn(`No se pudo descargar ${name}: ${err.message}`);
  }
}

console.log(
  downloaded > 0
    ? `Imágenes descargadas: ${downloaded}. Listo.`
    : "Las imágenes ya estaban descargadas. Listo.",
);

// Este paso es best-effort: nunca debe romper `npm install`.
process.exit(0);
