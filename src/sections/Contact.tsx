import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Hanko } from "@/components/site/Hanko";
import { CONTACT, COURSES, whatsappUrl } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

interface FormState {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", phone: "", course: "", message: "" };

const inputCls =
  "w-full border border-ink/20 bg-transparent px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-mute/60 transition-colors focus:border-aka focus:outline-none";

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): boolean => {
    const er: Partial<FormState> = {};
    if (form.name.trim().length < 3) er.name = "Cuéntanos tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Ingresa un correo válido.";
    if (!/^[+0-9()\s-]{7,}$/.test(form.phone)) er.phone = "Ingresa un teléfono válido.";
    if (!form.course) er.course = "Elige el curso que te interesa.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  const composedMessage = `Hola, soy ${form.name}. Me interesa el curso "${form.course || "por definir"}". ${form.message} (Mi correo: ${form.email}, mi teléfono: ${form.phone})`;
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Solicitud de información — ${form.course || "Cursos de japonés"}`,
  )}&body=${encodeURIComponent(composedMessage)}`;

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink py-24 lg:py-36" aria-labelledby="contacto-title">
      <div className="pattern-seigaiha pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
        <div className="max-w-2xl">
          <SectionHeading dark kicker="Contacto" jp="お問い合わせ" title="Hablemos de tu próximo idioma" />
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-soft" aria-hidden="true" />
                  <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/50">Dirección</h3>
                    <p className="mt-2 text-paper/85">{CONTACT.address}</p>
                    <p className="mt-1 text-sm text-paper/55">A dos cuadras del TransMilenio La Castellana</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-soft" aria-hidden="true" />
                  <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/50">Teléfono / WhatsApp</h3>
                    <a href={`tel:+${CONTACT.phoneIntl}`} className="link-line mt-2 inline-block text-paper/85">
                      +57 {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-5">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-soft" aria-hidden="true" />
                  <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/50">Correo</h3>
                    <a href={`mailto:${CONTACT.email}`} className="link-line mt-2 inline-block break-all text-paper/85">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-5">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-soft" aria-hidden="true" />
                  <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/50">Horarios</h3>
                    <dl className="mt-2 space-y-1.5">
                      {CONTACT.hours.map((h) => (
                        <div key={h.days} className="flex gap-4 text-[15px]">
                          <dt className="w-32 shrink-0 text-paper/55 sm:w-40">{h.days}</dt>
                          <dd className="text-paper/85">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 overflow-hidden border border-paper/15">
                <iframe
                  title="Mapa: Centro de Idiomas Asiáticos, Avenida Carrera 30 #85A-15, Bogotá"
                  src={CONTACT.mapEmbed}
                  className="h-72 w-full grayscale-[35%] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative border border-paper/12 bg-[#242424] p-8 sm:p-12">
                {sent ? (
                  <motion.div
                    className="flex min-h-[480px] flex-col items-center justify-center text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease }}
                    role="status"
                  >
                    <motion.div
                      initial={{ scale: 2.4, opacity: 0, rotate: -14 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.7, ease, delay: 0.15 }}
                    >
                      <Hanko className="h-24 w-24" char="完" />
                    </motion.div>
                    <h3 className="mt-8 font-display text-3xl text-paper">¡Solicitud lista, {form.name.split(" ")[0]}!</h3>
                    <p className="mt-4 max-w-md leading-relaxed text-paper/65">
                      Tu mensaje está preparado. Envíalo por el canal que prefieras
                      y un asesor académico te responderá en menos de 24 horas hábiles.
                    </p>
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <a
                        href={whatsappUrl(composedMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-aka px-8 py-4 text-sm font-medium tracking-[0.14em] text-paper transition-colors duration-500 hover:bg-aka-deep"
                      >
                        Enviar por WhatsApp
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <a
                        href={mailto}
                        className="inline-flex items-center justify-center gap-3 border border-paper/30 px-8 py-4 text-sm font-medium tracking-[0.14em] text-paper transition-all duration-500 hover:border-paper hover:bg-paper hover:text-ink"
                      >
                        Enviar por correo
                      </a>
                    </div>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm(initialForm);
                      }}
                      className="link-line mt-8 text-[13px] tracking-[0.12em] text-paper/50"
                    >
                      Diligenciar otra solicitud
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-soft">
                      Formulario de admisión
                    </p>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ct-name" className="mb-2 block text-[13px] tracking-wide text-paper/70">
                          Nombre completo *
                        </label>
                        <input
                          id="ct-name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={set("name")}
                          className={inputCls}
                          placeholder="María Camila Pérez"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "ct-name-err" : undefined}
                        />
                        {errors.name && <p id="ct-name-err" className="mt-2 text-[13px] text-[#e89090]">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="ct-email" className="mb-2 block text-[13px] tracking-wide text-paper/70">
                          Correo electrónico *
                        </label>
                        <input
                          id="ct-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={set("email")}
                          className={inputCls}
                          placeholder="tucorreo@ejemplo.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "ct-email-err" : undefined}
                        />
                        {errors.email && <p id="ct-email-err" className="mt-2 text-[13px] text-[#e89090]">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="ct-phone" className="mb-2 block text-[13px] tracking-wide text-paper/70">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          id="ct-phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={set("phone")}
                          className={inputCls}
                          placeholder="300 123 4567"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "ct-phone-err" : undefined}
                        />
                        {errors.phone && <p id="ct-phone-err" className="mt-2 text-[13px] text-[#e89090]">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="ct-course" className="mb-2 block text-[13px] tracking-wide text-paper/70">
                          Curso de interés *
                        </label>
                        <select
                          id="ct-course"
                          value={form.course}
                          onChange={set("course")}
                          className={`${inputCls} appearance-none bg-[#242424]`}
                          aria-invalid={!!errors.course}
                          aria-describedby={errors.course ? "ct-course-err" : undefined}
                        >
                          <option value="" disabled>
                            Selecciona un curso
                          </option>
                          {COURSES.map((c) => (
                            <option key={c.name} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                          <option value="Coreano">Coreano</option>
                          <option value="Chino mandarín">Chino mandarín</option>
                        </select>
                        {errors.course && <p id="ct-course-err" className="mt-2 text-[13px] text-[#e89090]">{errors.course}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="ct-message" className="mb-2 block text-[13px] tracking-wide text-paper/70">
                          Mensaje
                        </label>
                        <textarea
                          id="ct-message"
                          rows={4}
                          value={form.message}
                          onChange={set("message")}
                          className={`${inputCls} resize-none`}
                          placeholder="Cuéntanos tu objetivo: viaje, certificación JLPT, trabajo, cultura…"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="group mt-9 inline-flex w-full items-center justify-center gap-3 bg-aka px-8 py-4 text-sm font-medium tracking-[0.16em] text-paper transition-colors duration-500 hover:bg-aka-deep sm:w-auto"
                    >
                      Agendar información
                      <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden="true">→</span>
                    </button>
                    <p className="mt-5 text-[12.5px] leading-relaxed text-paper/45">
                      Al enviar aceptas ser contactado por nuestro equipo académico.
                      Tus datos se usan únicamente para responder tu solicitud.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
