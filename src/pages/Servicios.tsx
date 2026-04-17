import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, transitionBase } from '../lib/animations'

const services = [
  {
    name: 'Creación y producción de contenido',
    desc: 'Fotografía, video y diseño que comunican la esencia de tu marca.',
  },
  {
    name: 'Copywriting estratégico',
    desc: 'Textos con intención que conectan y convierten.',
  },
  {
    name: 'Integración de publicidad en plataformas',
    desc: 'Presencia optimizada en Meta, Google y TikTok.',
  },
  {
    name: 'Gestión de campañas publicitarias',
    desc: 'Planeación, ejecución y optimización continua.',
  },
  {
    name: 'Estudios de mercado',
    desc: 'Análisis de industria y audiencia para decisiones informadas.',
  },
  {
    name: 'Análisis de competencia',
    desc: 'Panorama competitivo claro para diferenciarte.',
  },
  {
    name: 'Gestión de redes sociales',
    desc: 'Administración con estrategia, no solo publicaciones.',
  },
] as const

const aspectRatios = ['4/3', '3/2', '16/10'] as const

export default function Servicios() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="label-mono mb-4">What we do</p>
            {/* COPY: Servicios heading */}
            <h1 className="heading-editorial">Servicios</h1>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:col-start-9 flex items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: 0.15 }}
          >
            {/* COPY: Servicios intro */}
            <p className="text-sm text-muted leading-relaxed">
              Cada servicio está diseñado para construir sobre el anterior. No ofrecemos
              tácticas sueltas — creamos sistemas de marketing que funcionan juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: Service List (Editorial Layout) ─── */}
      <section className="section-padding pt-0">
        <div className="container-site space-y-16 md:space-y-24 lg:space-y-36">
          {services.map((service, i) => {
            const isLeft = i % 2 === 0
            const aspect = aspectRatios[i % 3]
            const num = String(i + 1).padStart(2, '0')

            return (
              <motion.article
                key={service.name}
                {...fadeUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center"
              >
                {/* Image */}
                <div
                  className={`md:col-span-7 overflow-hidden rounded ${
                    isLeft ? '' : 'md:order-2'
                  }`}
                >
                  {/* TODO: Replace with actual service image */}
                  <div
                    className="w-full bg-stone/30 hover:scale-[1.03] transition-transform duration-700"
                    style={{ aspectRatio: aspect }}
                    role="img"
                    aria-label={`Imagen de ${service.name}`}
                  />
                </div>

                {/* Text */}
                <div
                  className={`md:col-span-4 ${
                    isLeft ? 'md:col-start-9 md:order-2' : 'md:col-start-1 md:order-1'
                  }`}
                >
                  <p className="label-mono mb-3">{num}</p>
                  {/* COPY: Service name */}
                  <h2 className="font-display text-2xl md:text-3xl mb-3">{service.name}</h2>
                  {/* COPY: Service description */}
                  <p className="text-sm text-muted leading-[1.8]">{service.desc}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* ─── Section 3: CTA Final ─── */}
      <section className="bg-sand pb-24">
        <div className="section-padding text-center">
          <div className="max-w-2xl mx-auto">
            <p className="label-mono mb-4">Ready?</p>
            {/* COPY: CTA heading */}
            <h2 className="heading-medium mb-6">¿Listo para hacer crecer tu marca?</h2>
            {/* COPY: CTA paragraph */}
            <p className="text-sm text-muted leading-relaxed mb-8">
              Platiquemos sobre lo que tu negocio necesita. Sin compromiso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
