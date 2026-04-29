import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'
import HeroCarousel, { type HeroCarouselImage } from '../components/ui/HeroCarousel'
import PhotoGallery from '../components/ui/PhotoGallery'
import FeatureShowcase, {
  type ShowcaseService,
} from '../components/ui/FeatureShowcase'
import ZoomParallaxProjects from '../components/ui/ZoomParallaxProjects'
import MotionButton from '../components/ui/MotionButton'

const magueyImages: HeroCarouselImage[] = [
  { src: `${import.meta.env.BASE_URL}images/maguey/maguey-01.jpg`, alt: 'Maguey en flor — ilustración vectorial',  rotation: -8 },
  { src: `${import.meta.env.BASE_URL}images/maguey/maguey-02.jpg`, alt: 'Maguey en flor — acuarela',                rotation:  6 },
  { src: `${import.meta.env.BASE_URL}images/maguey/maguey-03.jpg`, alt: 'Maguey en fondo mostaza — óleo',           rotation: -4 },
  { src: `${import.meta.env.BASE_URL}images/maguey/maguey-04.jpg`, alt: 'Maguey con flores rosas',                  rotation:  10 },
  { src: `${import.meta.env.BASE_URL}images/maguey/maguey-05.jpg`, alt: 'Maguey al atardecer — óleo',               rotation: -12 },
  { src: `${import.meta.env.BASE_URL}images/maguey/maguey-06.jpg`, alt: 'Maguey con fases lunares — tinta',         rotation:  4 },
  { src: `${import.meta.env.BASE_URL}images/maguey/maguey-07.jpg`, alt: 'Maguey amarillo — ilustración',            rotation: -6 },
  { src: `${import.meta.env.BASE_URL}images/maguey/maguey-08.jpg`, alt: 'Maguey verde — acuarela con tinta azul',   rotation:  8 },
]

const maskReveal = {
  initial: { y: '100%' },
  animate: { y: 0 },
  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
}

const BASE = import.meta.env.BASE_URL

const showcaseServices: ShowcaseService[] = [
  {
    value: 'contenido',
    label: 'Contenido',
    details: [
      {
        title: 'Qué incluye',
        text: 'Fotografía editorial y comercial, video, motion graphics, diseño gráfico y dirección de arte.',
      },
      {
        title: 'Cómo trabajamos',
        text: 'Brief estratégico y referencias visuales antes de cualquier disparador. Cada pieza se aprueba contigo antes de publicarse.',
      },
      {
        title: 'Tiempos típicos',
        text: 'Proyectos completos en 2 a 6 semanas. Sesiones únicas resueltas en una semana.',
      },
    ],
    src: `${BASE}images/picnic.png`,
    alt: 'Producción editorial',
  },
  {
    value: 'copywriting',
    label: 'Copywriting',
    details: [
      {
        title: 'Qué incluye',
        text: 'Identidad verbal, tono de marca, copy para web, landings, emails, anuncios y guiones para video.',
      },
      {
        title: 'Cómo trabajamos',
        text: 'Workshop inicial para definir voz y audiencia. Cada pieza con dos rondas de revisión incluidas.',
      },
      {
        title: 'Tiempos típicos',
        text: 'Identidad verbal completa en 2 a 3 semanas. Copy puntual entre 5 y 7 días.',
      },
    ],
    src: `${BASE}images/design-work-2.jpeg`,
    alt: 'Copywriting estratégico',
  },
  {
    value: 'publicidad',
    label: 'Publicidad',
    details: [
      {
        title: 'Qué incluye',
        text: 'Estrategia de medios, creativos, segmentación, configuración técnica y optimización continua.',
      },
      {
        title: 'Cómo trabajamos',
        text: 'Setup intensivo al inicio. Después optimización semanal y reportes claros con decisiones rápidas.',
      },
      {
        title: 'Cómo medimos éxito',
        text: 'KPIs definidos contigo (CTR, CPL, ROAS), reportes quincenales y ajustes semanales en tiempo real.',
      },
    ],
    src: `${BASE}images/swimmer.png`,
    alt: 'Campañas digitales',
  },
  {
    value: 'comunidad',
    label: 'Comunidad',
    details: [
      {
        title: 'Qué incluye',
        text: 'Calendario editorial mensual, producción de posts, community management diario y reportes claros.',
      },
      {
        title: 'Cómo trabajamos',
        text: 'Aprobación semanal o mensual contigo. Respondemos DMs y comentarios en tu nombre.',
      },
      {
        title: 'Tiempos típicos',
        text: 'Onboarding de 2 semanas. Después ritmo mensual continuo, sin sorpresas.',
      },
    ],
    src: `${BASE}images/design-work-1.jpeg`,
    alt: 'Gestión de comunidad',
  },
]

// TODO: replace placeholder testimonials with real client quotes.
const testimonials = [
  {
    quote:
      'Trabajar con QUIO cambió la forma en que pensamos nuestra marca. No nos dieron tácticas sueltas, nos dieron un sistema que sigue dando frutos meses después.',
    name: 'María Hernández',
    role: 'Fundadora · Casa Lúa',
    initials: 'MH',
    rating: 5,
  },
  {
    quote:
      'La diferencia se nota desde la primera semana. Cada pieza de contenido tiene una razón de ser y se siente parte de algo más grande.',
    name: 'Roberto Silva',
    role: 'Director · Estudio Norte',
    initials: 'RS',
    rating: 5,
  },
  {
    quote:
      'Hace dos años éramos un proyecto chico con muchas dudas. Hoy tenemos una marca clara y campañas que se sostienen solas.',
    name: 'Ana Martínez',
    role: 'CEO · Marca Verde',
    initials: 'AM',
    rating: 5,
  },
] as const

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      aria-hidden="true"
      className={filled ? 'text-bloom' : 'text-cream/25'}
    >
      <path d="M10 1.8l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.99l-5.18 2.75.99-5.77L1.62 7.89l5.79-.84L10 1.8z" />
    </svg>
  )
}

const projects = [
  { title: 'Alta Competencia', category: 'Contenido',  year: '2024', image: 'swimmer.png',        cols: 'md:col-span-7', aspect: '4/3' },
  { title: 'Regina Palacios',  category: 'Branding',   year: '2024', image: 'regina-palacios.png', cols: 'md:col-span-5', aspect: '4/5' },
  { title: 'Vintage Classics', category: 'Producción', year: '2023', image: 'vintage-car.png',     cols: 'md:col-span-5', aspect: '3/4' },
  { title: 'Garden Party',     category: 'Estrategia', year: '2024', image: 'picnic.png',          cols: 'md:col-span-7', aspect: '4/3' },
] as const

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-cloud-light overflow-hidden min-h-screen flex flex-col">
        {/* Painterly floating shapes */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div
            className="cloud-a absolute top-[12%] left-[8%] w-[30vw] h-[30vw] max-w-[480px] max-h-[480px] rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(133,146,109,0.32), transparent 65%)' }}
          />
          <div
            className="cloud-b absolute top-[6%] right-[4%] w-[36vw] h-[36vw] max-w-[560px] max-h-[560px] rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(212,212,212,0.6), transparent 60%)' }}
          />
          <div
            className="cloud-c absolute bottom-[-10%] left-[40%] w-[34vw] h-[34vw] max-w-[520px] max-h-[520px] rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(196,112,138,0.22), transparent 65%)' }}
          />
        </div>

        <div className="relative container-site pt-24 md:pt-28 pb-10 md:pb-14 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ── Text column ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Slogan — line-by-line mask reveal. Each line slides up from below its mask. */}
            <h1
              className="text-forest"
              style={{
                fontFamily: "'Garet', 'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  {...maskReveal}
                  transition={{ ...maskReveal.transition, delay: 0.25 }}
                >
                  Tu marca merece{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <motion.span
                      aria-hidden="true"
                      className="absolute left-[-0.08em] right-[-0.08em] top-[0.22em] bottom-[-0.04em] bg-bloom/40 origin-left"
                      style={{ borderRadius: '2px', zIndex: 0 }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1], delay: 1.45 }}
                    />
                    <span className="relative" style={{ zIndex: 1 }}>florecer.</span>
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 1.05 }}
              className="mt-7 max-w-[46ch] text-[15px] md:text-[16px] text-forest/75 leading-[1.65]"
            >
              El maguey espera 15 años para florecer. Tu marca no tiene por qué.
              Somos el estudio de marketing que construye la estrategia, el
              contenido y la publicidad para que tu marca crezca con raíz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 1.2 }}
              className="mt-8"
            >
              <MotionButton to="/contacto" label="Contáctanos" />
            </motion.div>
          </div>

          {/* ── Maguey carousel — orbital ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="hidden lg:block lg:col-span-5 relative h-[clamp(420px,55vh,540px)]"
          >
            <HeroCarousel images={magueyImages} radiusX={150} radiusY={210} speed={5} />
          </motion.div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            {...fadeUp}
            className="display-lg text-forest text-center max-w-3xl mx-auto mb-5"
          >
            Raíces profundas, crecimiento visible.
          </motion.h2>
          <motion.p
            {...fadeUpDelayed(0.05)}
            className="text-[15px] md:text-[16px] text-forest/70 leading-[1.7] text-center max-w-xl mx-auto"
          >
            Estudio boutique en Querétaro. Trabajamos con pocas marcas a la vez
            para que cada decisión sea deliberada.
          </motion.p>

          <div className="mt-6 lg:mt-8">
            <PhotoGallery />
          </div>

          <div className="mt-4 lg:mt-6 flex justify-center">
            <Link to="/estudio" className="btn-outline">
              Conocer el estudio →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="section-padding pt-0">
        <div className="container-site">
          <FeatureShowcase
            title="Un sistema, no tácticas sueltas."
            description="Cada servicio construye sobre el anterior. Estrategia, contenido y publicidad que funcionan juntos."
            services={showcaseServices}
            cta={{ label: 'Ver todos los servicios →', to: '/servicios' }}
          />
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="relative bg-forest bg-cloud-dark text-cream overflow-hidden">
        <div className="relative container-site section-padding">
          <div className="max-w-2xl mb-14 md:mb-16">
            <motion.p {...fadeUp} className="mono-label text-cream/55 mb-5">
              Reseñas
            </motion.p>
            <motion.h2
              {...fadeUpDelayed(0.05)}
              className="display-lg text-cream mb-5"
            >
              Lo que dicen nuestros clientes.
            </motion.h2>
            <motion.p
              {...fadeUpDelayed(0.1)}
              className="text-[15px] md:text-[16px] text-cream/65 leading-[1.7]"
            >
              Marcas que han crecido con nosotros. Cada testimonio es de un
              proyecto real y un proceso compartido.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ ...transitionBase, delay: i * 0.1 }}
                className="card-dark p-7 md:p-8 flex flex-col"
              >
                <div
                  className="flex gap-1 mb-5"
                  aria-label={`${t.rating} de 5 estrellas`}
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} filled={idx < t.rating} />
                  ))}
                </div>
                <blockquote className="text-cream/90 text-[15px] md:text-[16px] leading-[1.65] mb-7 flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-sage/30 border border-cream/15 flex items-center justify-center text-cream font-medium text-[12px] tracking-[0.04em]"
                  >
                    {t.initials}
                  </span>
                  <div className="text-[13px] leading-tight">
                    <div className="text-cream font-medium">{t.name}</div>
                    <div className="text-cream/55 mt-1">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Selected work — zoom parallax replaces the grid on desktop ─── */}
      <ZoomParallaxProjects />

      {/* ─── Selected work (mobile / tablet) ─── */}
      <section className="section-padding lg:hidden">
        <div className="container-site">
          <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
            <motion.div {...fadeUp}>
              <p className="mono-label mb-5">04 — Trabajo seleccionado</p>
              <h2 className="display-lg text-forest">Proyectos recientes.</h2>
            </motion.div>
            <Link to="/proyectos" className="hidden md:inline-flex link-underline text-[14px] text-forest pb-2">
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                className={`col-span-1 ${p.cols}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: (i % 2) * 0.08 }}
              >
                <div className="group relative overflow-hidden rounded-card">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${p.image}`}
                    alt={`${p.title} — ${p.category}`}
                    className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    style={{ aspectRatio: p.aspect }}
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <p className="mono-label-sm text-forest/55 mb-1">{p.category}</p>
                    <h3 className="display-sm text-forest">{p.title}</h3>
                  </div>
                  <span className="mono-label-sm text-forest/45">{p.year}</span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 md:hidden flex justify-center">
            <Link to="/proyectos" className="btn-outline">
              Ver todos los proyectos →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="relative bg-cloud-light overflow-hidden">
        <div className="container-site section-padding text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <p className="mono-label mb-6">Empezar</p>
            <h2 className="display-xl text-forest mb-8">
              Tu marca merece florecer.
            </h2>
            <p className="text-[16px] text-forest/70 leading-[1.7] max-w-xl mx-auto mb-10">
              Si tienes un negocio o una idea que quieres hacer crecer, el primer paso
              es una conversación. Sin compromiso, sin formalismos.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Escríbenos por WhatsApp
              </a>
              <Link to="/contacto" className="btn-outline">
                Otras formas de contacto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
