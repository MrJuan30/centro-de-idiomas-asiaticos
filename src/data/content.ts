import { img } from "@/lib/images";

export const CONTACT = {
  phoneDisplay: "315 883 3838",
  phoneIntl: "573158833838",
  email: "info@centroasiaticodeidiomas.com",
  address: "Avenida Carrera 30 #85A-15, Bogotá, Colombia",
  addressShort: "Ave. Cra. 30 #85A-15, Bogotá",
  hours: [
    { days: "Lunes a viernes", time: "8:00 a. m. – 8:00 p. m." },
    { days: "Sábados", time: "8:00 a. m. – 2:00 p. m." },
    { days: "Domingos y festivos", time: "Cerrado" },
  ],
  whatsappMessage:
    "Hola, quiero recibir información sobre los cursos de japonés.",
  mapEmbed:
    "https://www.google.com/maps?q=Avenida+Carrera+30+%2385A-15,+Bogot%C3%A1,+Colombia&output=embed",
};

export const whatsappUrl = (msg = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "¿Por qué japonés?", href: "#por-que-japones" },
  { label: "Cursos", href: "#cursos" },
  { label: "Método", href: "#metodo" },
  { label: "Cultura", href: "#cultura" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export const STATS = [
  { value: "15+", label: "Años enseñando en Bogotá" },
  { value: "3.200+", label: "Estudiantes formados" },
  { value: "92%", label: "Aprobación en exámenes JLPT" },
  { value: "4,8/5", label: "Calificación de nuestros alumnos" },
];

export const WHY_JAPANESE = [
  {
    title: "Carrera profesional",
    text: "Japón es la tercera economía del mundo y uno de los principales socios comerciales de Colombia. Hablar japonés abre puertas en multinacionales, comercio exterior y diplomacia.",
  },
  {
    title: "Becas y estudios",
    text: "Programas como MEXT y las becas de universidades japonesas financian estudios completos. El dominio del idioma multiplica tus posibilidades de ser seleccionado.",
  },
  {
    title: "Viajes",
    text: "Recorre Tokio, Kioto u Osaka hablando con la gente local. Entender el idioma transforma un viaje turístico en una experiencia profunda y memorable.",
  },
  {
    title: "Cultura, anime y manga",
    text: "Disfruta el anime, el manga, el cine y la literatura japonesa en su idioma original, con matices que ninguna traducción logra capturar por completo.",
  },
  {
    title: "Negocios",
    text: "Las empresas japonesas valoran enormemente a quienes comprenden su idioma y su etiqueta de negocios. Es una ventaja competitiva difícil de igualar.",
  },
  {
    title: "Tecnología e innovación",
    text: "Japón lidera la robótica, los videojuegos y la ingeniería. Acceder a documentación, comunidades y empleos japoneses empieza por el idioma.",
  },
];

export interface Course {
  name: string;
  jp: string;
  level: string;
  duration: string;
  modality: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const COURSES: Course[] = [
  {
    name: "Japonés para principiantes",
    jp: "初級",
    level: "N5 – N4",
    duration: "6 meses por nivel",
    modality: "Presencial y virtual",
    description:
      "Desde cero: hiragana, katakana, primeros kanji y conversaciones cotidianas. Al finalizar podrás presentarte, pedir comida y sostenerte en Japón.",
    image: img.kidsEducation,
    imageAlt: "Materiales de estudio para principiantes de japonés",
  },
  {
    name: "Japonés intermedio",
    jp: "中級",
    level: "N3",
    duration: "8 meses",
    modality: "Presencial y virtual",
    description:
      "Consolida gramática, amplía tu vocabulario a 3.000 palabras y lee textos reales: noticias sencillas, manga y correos de trabajo.",
    image: img.libraryHall,
    imageAlt: "Biblioteca con estanterías de libros japoneses",
  },
  {
    name: "Japonés avanzado",
    jp: "上級",
    level: "N2 – N1",
    duration: "10 meses",
    modality: "Presencial y virtual",
    description:
      "Lectura de prensa y literatura, keigo (lenguaje honorífico) y debate. Pensado para quienes apuntan a trabajar o estudiar en Japón.",
    image: img.readingRoom,
    imageAlt: "Sala de lectura moderna para estudios avanzados",
  },
  {
    name: "Preparación JLPT",
    jp: "検定",
    level: "N5 a N1",
    duration: "12 semanas",
    modality: "Intensivo",
    description:
      "Simulacros cronometrados, estrategia por sección y banco de exámenes reales. Nuestros estudiantes aprueban a una tasa del 92 %.",
    image: img.openBooks,
    imageAlt: "Libros abiertos para preparar el examen JLPT",
  },
  {
    name: "Club de conversación",
    jp: "会話",
    level: "Desde N4",
    duration: "Continuo",
    modality: "Presencial",
    description:
      "Sesiones semanales guiadas por profesores y hablantes nativos: temas de actualidad, cultura y vida cotidiana, en un ambiente relajado.",
    image: img.studentsLaptop,
    imageAlt: "Estudiantes conversando en un club de conversación",
  },
  {
    name: "Clases personalizadas",
    jp: "個別",
    level: "Todos los niveles",
    duration: "A tu ritmo",
    modality: "Presencial y virtual",
    description:
      "Un profesor dedicado, un plan diseñado a tu medida: preparación de entrevistas, viajes, refuerzo universitario o metas personales.",
    image: img.teacher,
    imageAlt: "Profesora guiando una clase personalizada de japonés",
  },
  {
    name: "Japonés para empresas",
    jp: "企業",
    level: "Programas a medida",
    duration: "Según objetivos",
    modality: "In company y virtual",
    description:
      "Formación para equipos que trabajan con Japón: protocolo de negocios, correos formales, reuniones y presentaciones en japonés.",
    image: img.businessMeeting,
    imageAlt: "Equipo empresarial en formación de japonés corporativo",
  },
  {
    name: "Clases en línea",
    jp: "通信",
    level: "Todos los niveles",
    duration: "Horarios flexibles",
    modality: "100 % virtual en vivo",
    description:
      "La misma metodología presencial, en directo desde cualquier lugar de Colombia: grupos pequeños, pizarra interactiva y grabaciones de repaso.",
    image: img.onlineClass,
    imageAlt: "Clase de japonés en línea desde un portátil",
  },
];

export const METHOD_STEPS = [
  {
    num: "01",
    jp: "評価",
    title: "Evaluación inicial",
    text: "Conversamos contigo y medimos tu punto de partida: conocimientos previos, objetivos y tiempo disponible.",
  },
  {
    num: "02",
    jp: "配置",
    title: "Ubicación en nivel",
    text: "Te asignamos al grupo y al nivel exactos que necesitas — nunca perderás tiempo repitiendo lo que ya sabes.",
  },
  {
    num: "03",
    jp: "練習",
    title: "Práctica guiada",
    text: "Clases dinámicas con grupos pequeños: gramática viva, kanji con método y ejercicios diseñados para recordar.",
  },
  {
    num: "04",
    jp: "会話",
    title: "Conversación real",
    text: "Desde el primer mes hablas en voz alta: role-plays, club de conversación y encuentros con hablantes nativos.",
  },
  {
    num: "05",
    jp: "文化",
    title: "Inmersión cultural",
    text: "Talleres de caligrafía, ceremonia del té, cocina y festivales. El idioma se aprende mejor cuando se vive.",
  },
  {
    num: "06",
    jp: "認定",
    title: "Certificación",
    text: "Cierres de nivel con evaluación oficial interna y preparación específica para tu examen JLPT.",
  },
];

export interface CultureItem {
  title: string;
  jp: string;
  text: string;
  image?: string;
  imageAlt?: string;
}

export const CULTURE: CultureItem[] = [
  {
    title: "Ceremonia del té",
    jp: "茶道",
    text: "Sadō, el camino del té: cada gesto de la ceremonia encarna armonía, respeto, pureza y tranquilidad.",
    image: img.matcha,
    imageAlt: "Té matcha con batidor de bambú en la ceremonia del té",
  },
  {
    title: "Caligrafía",
    jp: "書道",
    text: "Shodō es meditación con pincel: el trazo del kanji revela el carácter de quien escribe. En nuestros talleres aprenderás a sostener el fude y a respirar con cada línea.",
  },
  {
    title: "Festivales",
    jp: "祭り",
    text: "Matsuri: faroles, tambores taiko y yukatas. Celebramos hanami y tanabata con nuestra comunidad cada año.",
    image: img.templeLanterns,
    imageAlt: "Templo japonés iluminado con faroles durante un festival",
  },
  {
    title: "Gastronomía",
    jp: "料理",
    text: "Umami, estacionalidad y presentación: la cocina japonesa es un lenguaje en sí misma.",
    image: img.sushiBoat,
    imageAlt: "Variedad de sushi servido en barco de madera",
  },
  {
    title: "Origami",
    jp: "折り紙",
    text: "Del papel nace la grulla, símbolo de longevidad. Mil grullas, un deseo: la paciencia hecha forma, doblez a doblez.",
  },
  {
    title: "Etiqueta",
    jp: "礼儀",
    text: "La reverencia, el intercambio de tarjetas, el silencio oportuno: los códigos sociales japoneses que todo estudiante debe conocer.",
    image: img.itsukushimaTorii,
    imageAlt: "Torii flotante de Itsukushima, símbolo de la tradición japonesa",
  },
  {
    title: "Historia y tradición",
    jp: "歴史",
    text: "De los samurái al Tokio contemporáneo: entender la historia de Japón es entender su idioma.",
    image: img.mtFuji,
    imageAlt: "Monte Fuji al atardecer, ícono histórico de Japón",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Llegué sin saber ni hiragana y dos años después aprobé el N3. Los profesores no solo enseñan el idioma: te contagian las ganas de seguir. El club de conversación de los sábados es mi plan favorito de la semana.",
    name: "Valentina Rojas",
    age: "24 años",
    role: "Estudiante universitaria · Nivel N3",
    image: img.portrait1,
    imageAlt: "Retrato de Valentina Rojas, estudiante de japonés",
  },
  {
    quote:
      "Mi empresa abrió operaciones con un socio japonés y necesitábamos resultados serios. El programa empresarial superó lo esperado: hoy lidero videollamadas en japonés con nuestros clientes de Osaka.",
    name: "Andrés Felipe Gutiérrez",
    age: "38 años",
    role: "Gerente comercial · Programa empresas",
    image: img.portrait2,
    imageAlt: "Retrato de Andrés Felipe Gutiérrez, gerente comercial",
  },
  {
    quote:
      "Empecé por el anime, me quedé por la cultura. Las clases son exigentes pero humanas: cada semana hay un taller distinto, desde caligrafía hasta cocina. Aprendí más en un año aquí que en tres por mi cuenta.",
    name: "Camila Fernanda Torres",
    age: "19 años",
    role: "Estudiante · Nivel N4",
    image: img.portrait3,
    imageAlt: "Retrato de Camila Fernanda Torres, estudiante de japonés",
  },
  {
    quote:
      "A los 52 años pensé que era tarde para aprender un idioma tan distinto. La paciencia del equipo y el método paso a paso me demostraron lo contrario. Este diciembre viajo a Kioto con mi familia y voy a hablar por mi cuenta.",
    name: "Ricardo Mesa",
    age: "52 años",
    role: "Arquitecto · Clases personalizadas",
    image: img.portrait4,
    imageAlt: "Retrato de Ricardo Mesa, estudiante de clases personalizadas",
  },
];

export const FAQS = [
  {
    q: "¿Necesito conocimientos previos para inscribirme?",
    a: "No. La mayoría de nuestros estudiantes empieza desde cero. Realizamos una evaluación inicial gratuita para ubicarte en el nivel adecuado, ya seas principiante absoluto o tengas estudios previos.",
  },
  {
    q: "¿Qué es el JLPT y por qué es importante?",
    a: "El Japanese Language Proficiency Test (JLPT) es la certificación oficial de japonés más reconocida del mundo, con cinco niveles (N5 a N1). Es requisito frecuente para becas, universidades japonesas y empleos en empresas de Japón. Nuestros cursos preparatorios tienen una tasa de aprobación del 92 %.",
  },
  {
    q: "¿Cuánto tiempo toma aprender japonés?",
    a: "Con asistencia regular, nuestros estudiantes alcanzan el nivel N5 en unos 6 meses y el N4 al año. Llegar a un nivel conversacional sólido (N3) toma entre 2 y 2,5 años. La constancia semanal importa más que la intensidad.",
  },
  {
    q: "¿Las clases son presenciales o virtuales?",
    a: "Ambas. Nuestra sede está en Bogotá (Ave. Cra. 30 #85A-15) y también ofrecemos clases 100 % en línea, en vivo, con la misma metodología, grupos pequeños y grabaciones de repaso para estudiantes de toda Colombia.",
  },
  {
    q: "¿Qué tamaño tienen los grupos?",
    a: "Máximo 10 estudiantes por grupo. Creemos que el idioma se aprende hablando, y eso solo es posible cuando cada alumno participa en cada clase.",
  },
  {
    q: "¿Los profesores son nativos?",
    a: "Nuestro equipo combina profesores nativos japoneses con docentes colombianos certificados (N1) y formados en pedagogía. La combinación ofrece lo mejor de ambos mundos: dominio nativo y explicaciones claras en español.",
  },
  {
    q: "¿Ofrecen cursos de coreano y chino mandarín?",
    a: "Sí. Aunque nuestra especialidad es el japonés, contamos con programas de coreano y chino mandarín para principiantes e intermedios, con la misma metodología y grupos reducidos. Escríbenos para conocer los horarios vigentes.",
  },
  {
    q: "¿Puedo prepararme para una beca en Japón?",
    a: "Claro. Acompañamos a nuestros estudiantes en procesos de becas como MEXT, con preparación del idioma, revisión de documentos y simulacros de entrevista. Varios alumnos ya estudian en universidades de Tokio y Kioto.",
  },
  {
    q: "¿Hay clases para niños o solo para adultos?",
    a: "Nuestros programas regulares están diseñados para jóvenes desde los 15 años y adultos. Para menores ofrecemos clases personalizadas con metodología adaptada. Consúltanos por disponibilidad.",
  },
  {
    q: "¿Cómo funcionan las clases para empresas?",
    a: "Diseñamos un programa a la medida del equipo: diagnóstico de necesidades, objetivos por trimestre, japonés de negocios, protocolo y reportes de avance para RR. HH. Puede ser in company en Bogotá o virtual.",
  },
  {
    q: "¿Qué incluye la matrícula?",
    a: "La matrícula incluye la evaluación de ubicación, el acceso a todos los talleres culturales del semestre, la biblioteca de materiales digitales y el club de conversación. Los textos de estudio se adquieren por separado o en formato digital.",
  },
  {
    q: "¿Puedo tomar una clase de prueba?",
    a: "Sí. Ofrecemos una clase muestra sin costo para que conozcas la metodología y a los profesores antes de decidir. Agenda la tuya por WhatsApp o a través del formulario de contacto.",
  },
];

export const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];
