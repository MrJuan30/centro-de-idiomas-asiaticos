# Centro de Idiomas Asiáticos — Sitio Web Oficial

Sitio web comercial premium para el **Centro de Idiomas Asiáticos**, academia de japonés, coreano y chino mandarín ubicada en Bogotá, Colombia (Avenida Carrera 30 #85A-15).

Diseño editorial de inspiración japonesa: minimalismo elegante, tipografía serif de alto nivel, transiciones cinematográficas sutiles y una experiencia de desplazamiento cuidada.

## Características

- **Hero cinematográfico** a pantalla completa con parallax y revelado tipográfico por máscaras
- **Secuencia de apertura** (preloader) con revelado letra a letra
- **Navegación** con riel lateral fijo (escritorio), barra superior (móvil) y menú superpuesto a pantalla completa
- **Secciones completas**: Nosotros, ¿Por qué japonés?, 8 programas de cursos, método en 6 pasos (línea de tiempo), cultura japonesa, testimonios, 12 preguntas frecuentes y contacto
- **Formulario de admisión** con validación y animación de éxito (sello hanko), con envío directo por WhatsApp o correo
- **Botón flotante de WhatsApp** con animación de pulso y mensaje predefinido
- **Mapa de Google** embebido con la ubicación real de la academia
- **SEO completo**: metadatos, Open Graph, datos estructurados (JSON-LD `LanguageSchool`), `robots.txt`, `sitemap.xml`, HTML semántico y jerarquía de encabezados
- **Accesibilidad**: navegación por teclado, etiquetas ARIA, salto al contenido, foco visible y textos alternativos
- **Rendimiento**: imágenes WebP optimizadas localmente, carga diferida (`lazy loading`), fuentes con `display=swap`

## Tecnologías

| Área | Stack |
| --- | --- |
| Framework | React 19 + TypeScript (Vite) |
| Estilos | Tailwind CSS 3 + shadcn/ui (Radix UI) |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Tipografías | Marcellus · Inter · Noto Serif JP |

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MrJuan30/centro-de-idiomas-asiaticos.git
cd centro-de-idiomas-asiaticos

# Instalar dependencias (descarga también las imágenes del sitio)
npm install

# Entorno de desarrollo
npm run dev

# Compilación de producción
npm run build

# Vista previa de la compilación
npm run preview
```

> **Imágenes:** por buenas prácticas de repositorio, las fotografías (WebP,
> royalty-free de Unsplash) no se versionan en git. `npm install` las descarga
> automáticamente vía `scripts/fetch-images.mjs`. Si necesitas repetirlo:
> `npm run setup:images`.

## Despliegue

El proyecto es una SPA estática: funciona en Netlify, Vercel, GitHub Pages o cualquier hosting de archivos estáticos.

- **Build command:** `npm run build`
- **Publish directory:** `dist`

El repositorio incluye `netlify.toml` y `public/_redirects` (fallback SPA) para despliegue inmediato en Netlify.

## Estructura del proyecto

```
├── public/                  # robots.txt, sitemap.xml, _redirects
├── scripts/fetch-images.mjs # Descarga de imágenes (postinstall)
├── src/
│   ├── assets/img/          # Imágenes WebP optimizadas (no versionadas)
│   ├── components/
│   │   ├── site/            # Navbar, Preloader, Footer, Hanko, Reveal…
│   │   └── ui/              # Componentes shadcn/ui
│   ├── data/content.ts      # Todo el contenido y la copy del sitio
│   ├── lib/images.ts        # Registro central de imágenes
│   ├── sections/            # Hero, About, Courses, Method, Culture…
│   ├── pages/Home.tsx       # Composición de la página
│   └── main.tsx             # Punto de entrada
├── index.html               # Metadatos SEO + JSON-LD
├── netlify.toml             # Configuración de despliegue
└── tailwind.config.js       # Sistema de diseño (colores, fuentes, motion)
```

## Licencia

MIT — © Centro de Idiomas Asiáticos, Bogotá, Colombia.
