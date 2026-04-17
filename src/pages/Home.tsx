import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, fadeUpDelayed, scaleIn } from '../lib/animations'

const services = [
  'Creación y producción de contenido',
  'Copywriting estratégico',
  'Integración de publicidad en plataformas',
  'Gestión de campañas publicitarias',
  'Estudios de mercado',
  'Análisis de competencia',
  'Gestión de redes sociales',
] as const

export default function Home() {
  const d = 2.2 /* base delay — synced to loading screen fade */

  return (
    <>
      {/* ─── Section 1: Hero — painting + dark band at bottom ─── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-forest">
        {/* Full-bleed painting */}
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Óleo de un agave floreciente en el desierto mexicano al atardecer"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />

        {/* Hard fade to solid dark at the bottom — text panel */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest from-[18%] via-forest/60 via-[30%] to-transparent to-[50%] pointer-events-none" />

        {/* ─── Bottom text panel ─── */}
        <div className="relative z-10 h-full flex flex-col justify-end">
          <motion.div
            className="px-6 md:px-10 lg:px-14 pb-8 md:pb-12 lg:pb-14"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: d, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* QUIO — prominent, not huge */}
            <p className="font-display text-cream text-lg md:text-xl tracking-[0.25em] mb-8 md:mb-10">
              QUIO
            </p>

            {/* Main headline — large, confident, high contrast on dark */}
            <h1 className="font-display text-cream text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[1] tracking-[-0.02em] max-w-[700px]">
              {/* COPY: Hero headline */}
              Tu marca merece
              <br />
              <em className="italic text-olive">florecer</em>
            </h1>

            {/* Divider + subtitle row */}
            <motion.div
              className="flex items-center gap-6 mt-8 md:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: d + 0.5 }}
            >
              <div className="h-[1px] w-12 bg-cream/15" aria-hidden="true" />
              <p className="text-cream/35 font-body text-[11px] md:text-xs tracking-[0.05em]">
                Estrategia y contenido digital para marcas con intención
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 1b: Tagline bridge ─── */}
      <section className="py-14 md:py-20 lg:py-28 px-5 md:px-8 lg:px-20">
        <div className="container-site flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <motion.div {...fadeUp}>
            {/* COPY: Bridge headline */}
            <h2 className="heading-editorial text-forest">
              Raíces profundas,
              <br />
              <em>crecimiento visible</em>
            </h2>
          </motion.div>
          <motion.div className="max-w-sm lg:pb-3" {...fadeUpDelayed(0.15)}>
            {/* COPY: Bridge supporting text */}
            <p className="text-sm text-muted leading-relaxed mb-6">
              Como el maguey, primero las raíces — después la flor.
              Construimos la base estratégica que sostiene cada pieza
              de contenido, cada campaña, cada decisión.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn inline-block"
            >
              Hablemos
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: Editorial Intro (About) ─── */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div className="lg:col-span-5" {...fadeUp}>
            <p className="label-mono mb-4">About</p>
            {/* COPY: About heading */}
            <h2 className="heading-large">
              Raíces firmes, crecimiento <em>estratégico</em>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:col-start-7 lg:pt-24"
            {...fadeUpDelayed(0.15)}
          >
            {/* COPY: About paragraphs */}
            <p className="text-sm text-muted leading-relaxed mb-4">
              Las plantas del desierto sobreviven porque primero desarrollan raíces profundas.
              Antes del crecimiento visible, existe un trabajo silencioso que sostiene todo lo
              que vendrá después.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-6">
              QUIO es un estudio boutique de marketing en Querétaro. Creemos que las marcas
              crecen mejor cuando la estrategia precede a la acción, y cuando cada pieza de
              contenido tiene un propósito claro.
            </p>
            <Link
              to="/estudio"
              className="text-sm text-forest border-b border-forest/30 hover:border-forest transition-colors duration-200"
            >
              Conoce nuestro estudio →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 3: Featured Image Break ─── */}
      <section className="px-5 md:px-8 lg:px-20">
        <motion.div className="container-site" {...scaleIn}>
          {/* TODO: Replace with actual panoramic image */}
          <div
            className="w-full bg-stone/30 rounded"
            style={{ aspectRatio: '21/9' }}
            role="img"
            aria-label="Imagen destacada del estudio"
          />
        </motion.div>
      </section>

      {/* ─── Section 4: Services Preview ─── */}
      <section className="section-padding">
        <div className="container-site">
          {/* Top: heading + description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-6">
              <p className="label-mono mb-4">Services</p>
              {/* COPY: Services heading */}
              <h2 className="heading-large">
                Lo que <em>hacemos</em>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 flex items-end">
              <p className="text-sm text-muted leading-relaxed">
                Un enfoque integral que combina creatividad, datos y estrategia para hacer
                crecer tu marca con intención.
              </p>
            </div>
          </div>

          {/* Service list */}
          <ul className="border-t border-stone/40 list-none p-0 m-0">
            {services.map((service, i) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut' as const, delay: i * 0.04 }}
                className="group flex items-center justify-between border-b border-stone/40 py-5 md:py-6 cursor-default"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-xs text-muted w-6" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-base lg:text-lg text-forest group-hover:text-sage transition-colors duration-200">
                    {service}
                  </span>
                </div>
                <span className="text-sage opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true">
                  →
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Bottom CTA */}
          <div className="mt-10">
            <Link to="/servicios" className="outline-btn">
              Explorar todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Closing CTA ─── */}
      <section className="bg-sand pb-24">
        <div className="section-padding">
          <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <motion.div className="lg:col-span-7" {...fadeUp}>
              <p className="label-mono mb-4">Let's grow</p>
              {/* COPY: CTA heading */}
              <h2 className="heading-editorial">
                Tu marca merece <em>florecer</em>
              </h2>
            </motion.div>

            <motion.div
              className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center"
              {...fadeUpDelayed(0.15)}
            >
              {/* COPY: CTA paragraph */}
              <p className="text-sm text-muted leading-relaxed mb-6">
                Cuéntanos sobre tu negocio. El primer paso es una conversación sin compromiso
                donde entendemos tus necesidades y exploramos cómo podemos ayudarte.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-center w-full sm:w-auto"
              >
                Escríbenos por WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
