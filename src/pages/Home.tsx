import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, fadeUpDelayed, heroZoom, transitionBase } from '../lib/animations'

const services = [
  'Creación y producción de contenido',
  'Copywriting estratégico',
  'Integración de publicidad en plataformas',
  'Gestión de campañas publicitarias',
  'Estudios de mercado',
  'Análisis de competencia',
  'Gestión de redes sociales',
] as const

const projects = [
  {
    title: 'Alta Competencia',
    category: 'Contenido',
    year: '2024',
    image: 'swimmer.png',
    cols: 'md:col-span-7',
    aspect: '4/3',
  },
  {
    title: 'Regina Palacios',
    category: 'Branding',
    year: '2024',
    image: 'regina-palacios.png',
    cols: 'md:col-span-5',
    aspect: '4/5',
  },
  {
    title: 'Vintage Classics',
    category: 'Producción',
    year: '2023',
    image: 'vintage-car.png',
    cols: 'md:col-span-5',
    aspect: '3/4',
  },
  {
    title: 'Garden Party',
    category: 'Estrategia',
    year: '2024',
    image: 'picnic.png',
    cols: 'md:col-span-7',
    aspect: '4/3',
  },
  {
    title: 'Diseño Editorial',
    category: 'Diseño',
    year: '2024',
    image: 'design-work-1.jpeg',
    cols: 'md:col-span-12',
    aspect: '21/9',
  },
] as const

export default function Home() {
  const d = 2.2

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-forest">
        {/* Agave painting — zooms in on load */}
        <motion.img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Óleo de un agave floreciente"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          {...heroZoom}
        />

        {/* Gradient to dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest from-[14%] via-forest/70 via-[28%] to-transparent to-[55%] pointer-events-none" />

        {/* Bottom text */}
        <div className="relative z-10 h-full flex flex-col justify-end">
          <motion.div
            className="px-[5%] md:px-[6%] lg:px-[7%] pb-10 md:pb-14 lg:pb-16"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: d, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-display text-white text-lg md:text-xl tracking-[0.3em] mb-8 md:mb-10">
              QUIO
            </p>

            <h1 className="font-display text-white text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] max-w-[650px] font-normal">
              Tu marca merece
              <br />
              florecer
            </h1>

            {/* Divider + subtitle */}
            <motion.div
              className="flex items-center gap-6 mt-8 md:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: d + 0.5 }}
            >
              <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />
              <p className="text-white/40 text-[11px] md:text-xs tracking-[0.05em]">
                Estrategia y contenido digital para marcas con intención
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Tagline Bridge ─── */}
      <section className="section-padding">
        <div className="container-site flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          <motion.div className="lg:max-w-[55%]" {...fadeUp}>
            <h2 className="heading-editorial text-forest">
              Raíces profundas,
              <br />
              crecimiento visible
            </h2>
          </motion.div>
          <motion.div className="max-w-sm lg:pb-3" {...fadeUpDelayed(0.15)}>
            <p className="text-[14px] text-muted leading-[1.8] mb-8">
              {/* COPY: Bridge text */}
              Como el maguey, primero las raíces — después la flor.
              Construimos la base estratégica que sostiene cada pieza
              de contenido, cada campaña, cada decisión.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              Hablemos
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="section-padding pt-0">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div className="lg:col-span-5" {...fadeUp}>
            <p className="label-mono mb-6">About</p>
            <h2 className="heading-large">
              Raíces firmes, crecimiento estratégico
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:col-start-7 lg:pt-24"
            {...fadeUpDelayed(0.15)}
          >
            <p className="text-[14px] text-muted leading-[1.8] mb-4">
              Las plantas del desierto sobreviven porque primero desarrollan raíces profundas.
              Antes del crecimiento visible, existe un trabajo silencioso que sostiene todo lo
              que vendrá después.
            </p>
            <p className="text-[14px] text-muted leading-[1.8] mb-8">
              QUIO es un estudio boutique de marketing en Querétaro. Creemos que las marcas
              crecen mejor cuando la estrategia precede a la acción, y cuando cada pieza de
              contenido tiene un propósito claro.
            </p>
            <Link
              to="/estudio"
              className="link-underline text-[13px] text-forest"
            >
              Conoce nuestro estudio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Full-width Photo Break ─── */}
      <section>
        <motion.div {...fadeUp}>
          <img
            src={`${import.meta.env.BASE_URL}images/picnic.png`}
            alt="Sesión fotográfica de mesa editorial con flores y frutas"
            className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
          />
        </motion.div>
      </section>

      {/* ─── Services Preview ─── */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-6">
              <p className="label-mono mb-6">Services</p>
              <h2 className="heading-large">Lo que hacemos</h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 flex items-end">
              <p className="text-[14px] text-muted leading-[1.8]">
                Un enfoque integral que combina creatividad, datos y estrategia para hacer
                crecer tu marca con intención.
              </p>
            </div>
          </div>

          <ul className="border-t border-sage/25 list-none p-0 m-0">
            {services.map((service, i) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut' as const, delay: i * 0.04 }}
                className="group flex items-center justify-between border-b border-sage/25 py-5 md:py-6 cursor-default"
              >
                <div className="flex items-center gap-5 md:gap-8">
                  <span className="text-[11px] text-muted w-6 font-bold tracking-wider" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[15px] lg:text-[17px] text-forest group-hover:text-sage transition-colors duration-300">
                    {service}
                  </span>
                </div>
                <span className="text-sage text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest" aria-hidden="true">
                  &rarr;
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-12">
            <Link to="/servicios" className="cta-btn">
              Explorar servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Selected Work ─── */}
      <section className="section-padding pt-0">
        <div className="container-site">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="label-mono mb-6">Selected work</p>
              <h2 className="heading-large">Proyectos</h2>
            </div>
            <Link to="/proyectos" className="hidden md:block link-underline text-[13px] text-forest">
              Ver todos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                className={`col-span-1 ${project.cols}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: (i % 2) * 0.1 }}
              >
                <div className="group relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${project.image}`}
                    alt={`${project.title} — ${project.category}`}
                    className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    style={{ aspectRatio: project.aspect }}
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <p className="label-mono mb-1">{project.category}</p>
                    <h3 className="font-display text-[17px] text-forest">{project.title}</h3>
                  </div>
                  <span className="text-[11px] text-muted">{project.year}</span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link to="/proyectos" className="cta-btn">
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="section-padding bg-forest">
        <div className="container-site text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-cream text-4xl md:text-5xl lg:text-[5rem] leading-[0.95] tracking-[-0.02em] font-normal mb-10">
              Tu marca merece
              <br />
              florecer
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-cream"
            >
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
