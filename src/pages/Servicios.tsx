import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'

const services = [
  {
    num: '01',
    name: 'Creación y producción de contenido',
    desc: 'Fotografía, video y diseño que comunican la esencia de tu marca. Cada pieza nace de una estrategia clara y se produce con estándares de calidad editorial.',
    deliverables: ['Sesiones fotográficas', 'Video', 'Diseño gráfico', 'Contenido editorial'],
    image: 'picnic.png',
  },
  {
    num: '02',
    name: 'Copywriting estratégico',
    desc: 'Textos con intención que conectan y convierten. Desde guiones hasta captions, cada palabra está diseñada para mover a tu audiencia hacia la acción.',
    deliverables: ['Copy para redes', 'Guiones', 'Textos web', 'Storytelling de marca'],
    image: 'design-work-2.jpeg',
  },
  {
    num: '03',
    name: 'Integración de publicidad en plataformas',
    desc: 'Presencia optimizada en Meta, Google y TikTok. Configuramos, segmentamos y lanzamos tus campañas donde tu audiencia realmente está.',
    deliverables: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Configuración de píxeles'],
    image: 'design-work-3.jpeg',
  },
  {
    num: '04',
    name: 'Gestión de campañas publicitarias',
    desc: 'Planeación, ejecución y optimización continua. Monitoreamos cada campaña en tiempo real para maximizar tu retorno de inversión.',
    deliverables: ['Planeación de medios', 'Optimización', 'Reportes', 'A/B testing'],
    image: 'swimmer.png',
  },
  {
    num: '05',
    name: 'Estudios de mercado',
    desc: 'Análisis de industria y audiencia para decisiones informadas. Entendemos tu mercado antes de actuar para que cada movimiento sea estratégico.',
    deliverables: ['Investigación de mercado', 'Análisis de audiencia', 'Benchmarking'],
    image: 'design-work-4.jpeg',
  },
  {
    num: '06',
    name: 'Análisis de competencia',
    desc: 'Panorama competitivo claro para diferenciarte. Mapeamos el terreno para encontrar las oportunidades que otros no ven.',
    deliverables: ['Análisis competitivo', 'Mapeo de oportunidades', 'Posicionamiento'],
    image: 'vintage-car.png',
  },
  {
    num: '07',
    name: 'Gestión de redes sociales',
    desc: 'Administración con estrategia, no solo publicaciones. Calendarios editoriales, comunidad y métricas que importan.',
    deliverables: ['Calendario editorial', 'Community management', 'Reportes mensuales'],
    image: 'design-work-1.jpeg',
  },
] as const

export default function Servicios() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-cloud-light overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="relative container-site grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="mono-label mb-5">Servicios</p>
            <h1 className="display-xl text-forest max-w-[18ch]">
              Un sistema para hacer crecer tu marca.
            </h1>
          </motion.div>
          <motion.p
            className="lg:col-span-4 lg:col-start-9 text-[15px] text-forest/70 leading-[1.75]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: 0.15 }}
          >
            Cada servicio está diseñado para construir sobre el anterior. No ofrecemos
            tácticas sueltas — creamos sistemas de marketing que funcionan juntos.
          </motion.p>
        </div>
      </section>

      {/* ─── Service list ─── */}
      <section className="section-padding pt-0">
        <div className="container-site space-y-20 md:space-y-28 lg:space-y-36">
          {services.map((service, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.article
                key={service.num}
                {...fadeUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center"
              >
                <div
                  className={`md:col-span-7 overflow-hidden rounded-card card-surface ${
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
                <div
                  className={`md:col-span-4 ${
                    isLeft ? 'md:col-start-9' : 'md:col-start-1 md:order-1'
                  }`}
                >
                  <span className="badge mb-5">{service.num}</span>
                  <h2 className="display-md text-forest mb-4">{service.name}</h2>
                  <p className="text-[15px] text-forest/75 leading-[1.75] mb-6">
                    {service.desc}
                  </p>
                  <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                    {service.deliverables.map((d) => (
                      <li key={d} className="badge">{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative bg-forest text-cream overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(50% 60% at 20% 20%, rgba(133,146,109,0.2), transparent 70%), radial-gradient(50% 60% at 80% 80%, rgba(118,115,68,0.18), transparent 70%)',
          }}
        />
        <div className="relative container-site section-padding text-center">
          <motion.div {...fadeUpDelayed(0.05)} className="max-w-2xl mx-auto">
            <p className="mono-label text-cream/60 mb-6">¿Listo?</p>
            <h2 className="display-lg text-cream mb-6">
              ¿Listo para hacer crecer tu marca?
            </h2>
            <p className="text-[15px] text-cream/70 leading-[1.75] max-w-lg mx-auto mb-10">
              Platiquemos sobre lo que tu negocio necesita. Sin compromiso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cream"
            >
              Escríbenos por WhatsApp →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
