import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, transitionBase } from '../lib/animations'

const services = [
  {
    name: 'Creación y producción de contenido',
    desc: 'Fotografía, video y diseño que comunican la esencia de tu marca. Cada pieza nace de una estrategia clara y se produce con estándares de calidad editorial.',
    deliverables: 'Sesiones fotográficas · Video · Diseño gráfico · Contenido editorial',
    image: 'picnic.png',
  },
  {
    name: 'Copywriting estratégico',
    desc: 'Textos con intención que conectan y convierten. Desde guiones hasta captions, cada palabra está diseñada para mover a tu audiencia hacia la acción.',
    deliverables: 'Copy para redes · Guiones · Textos web · Storytelling de marca',
    image: 'design-work-2.jpeg',
  },
  {
    name: 'Integración de publicidad en plataformas',
    desc: 'Presencia optimizada en Meta, Google y TikTok. Configuramos, segmentamos y lanzamos tus campañas donde tu audiencia realmente está.',
    deliverables: 'Meta Ads · Google Ads · TikTok Ads · Configuración de píxeles',
    image: 'design-work-3.jpeg',
  },
  {
    name: 'Gestión de campañas publicitarias',
    desc: 'Planeación, ejecución y optimización continua. Monitoreamos cada campaña en tiempo real para maximizar tu retorno de inversión.',
    deliverables: 'Planeación de medios · Optimización · Reportes · A/B testing',
    image: 'swimmer.png',
  },
  {
    name: 'Estudios de mercado',
    desc: 'Análisis de industria y audiencia para decisiones informadas. Entendemos tu mercado antes de actuar para que cada movimiento sea estratégico.',
    deliverables: 'Investigación de mercado · Análisis de audiencia · Benchmarking',
    image: 'design-work-4.jpeg',
  },
  {
    name: 'Análisis de competencia',
    desc: 'Panorama competitivo claro para diferenciarte. Mapeamos el terreno para encontrar las oportunidades que otros no ven.',
    deliverables: 'Análisis competitivo · Mapeo de oportunidades · Posicionamiento',
    image: 'vintage-car.png',
  },
  {
    name: 'Gestión de redes sociales',
    desc: 'Administración con estrategia, no solo publicaciones. Calendarios editoriales, comunidad y métricas que importan.',
    deliverables: 'Calendario editorial · Community management · Reportes mensuales',
    image: 'design-work-1.jpeg',
  },
] as const

export default function Servicios() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="label-mono mb-6">What we do</p>
            <h1 className="heading-editorial">Servicios</h1>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:col-start-9 flex items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: 0.15 }}
          >
            <p className="text-[14px] text-muted leading-[1.8]">
              Cada servicio está diseñado para construir sobre el anterior. No ofrecemos
              tácticas sueltas — creamos sistemas de marketing que funcionan juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Service List ─── */}
      <section className="section-padding pt-0">
        <div className="container-site space-y-20 md:space-y-28 lg:space-y-40">
          {services.map((service, i) => {
            const isLeft = i % 2 === 0
            const num = String(i + 1).padStart(2, '0')

            return (
              <motion.article
                key={service.name}
                {...fadeUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center"
              >
                {/* Image */}
                <div
                  className={`md:col-span-7 overflow-hidden ${
                    isLeft ? '' : 'md:order-2'
                  }`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/${service.image}`}
                    alt={service.name}
                    className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>

                {/* Text */}
                <div
                  className={`md:col-span-4 ${
                    isLeft ? 'md:col-start-9 md:order-2' : 'md:col-start-1 md:order-1'
                  }`}
                >
                  <p className="label-mono mb-4">{num}</p>
                  <h2 className="font-display text-2xl md:text-[1.75rem] leading-[1.1] mb-4 text-forest">{service.name}</h2>
                  <p className="text-[14px] text-muted leading-[1.8] mb-5">{service.desc}</p>
                  <p className="text-[11px] text-muted tracking-[0.1em]">{service.deliverables}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-forest">
        <div className="container-site text-center">
          <motion.div {...fadeUp}>
            <p className="label-mono text-cream/50 mb-6">Ready?</p>
            <h2 className="font-display text-cream text-3xl md:text-4xl lg:text-[3.5rem] leading-[1] tracking-[-0.02em] font-normal mb-4">
              ¿Listo para hacer crecer tu marca?
            </h2>
            <p className="text-[14px] text-cream/50 leading-[1.8] mb-10 max-w-md mx-auto">
              Platiquemos sobre lo que tu negocio necesita. Sin compromiso.
            </p>
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
