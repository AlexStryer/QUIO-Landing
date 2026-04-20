import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'

const values = [
  { title: 'Estrategia con intención', desc: 'Cada acción tiene un propósito alineado a tus objetivos de negocio.' },
  { title: 'Contenido con identidad',  desc: 'Piezas que reflejan quién eres como marca, nunca genéricas.' },
  { title: 'Visión creativa y comercial', desc: 'Creatividad al servicio de resultados tangibles y medibles.' },
  { title: 'Enfoque en posicionamiento', desc: 'Un lugar claro y memorable en la mente de tu público.' },
  { title: 'Acompañamiento cercano', desc: 'Un equipo que se involucra genuinamente en tu crecimiento.' },
  { title: 'Raíces profundas', desc: 'Construimos sobre fundamentos sólidos, nunca sobre tendencias pasajeras.' },
] as const

export default function Estudio() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-cloud-light overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="relative container-site max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="mono-label mb-5">El estudio</p>
            <h1 className="display-xl text-forest mb-8">Nosotros.</h1>
            <p className="text-lg md:text-xl text-forest/75 leading-[1.6]">
              Un estudio boutique de marketing en Querétaro que cree en las raíces
              profundas, el crecimiento estratégico y la creatividad con propósito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Two-up photo ─── */}
      <section className="px-6 md:px-10 lg:px-14 pb-6">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <motion.div className="lg:col-span-8 rounded-card overflow-hidden card-surface" {...fadeUp}>
            <img
              src={`${import.meta.env.BASE_URL}images/regina-palacios.png`}
              alt="Estudio QUIO — espacio de trabajo"
              className="w-full object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </motion.div>
          <motion.div
            className="lg:col-span-4 lg:mt-16 rounded-card overflow-hidden card-surface"
            {...fadeUpDelayed(0.15)}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/design-work-3.jpeg`}
              alt="Detalle de trabajo creativo QUIO"
              className="w-full object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div className="lg:col-span-6" {...fadeUp}>
            <p className="mono-label mb-5">Filosofía</p>
            <h2 className="display-xl text-forest">Pocos, bien.</h2>
          </motion.div>
          <motion.div className="lg:col-span-5 lg:col-start-8 lg:pt-4" {...fadeUpDelayed(0.15)}>
            <p className="text-[15px] text-forest/75 leading-[1.75] mb-5">
              QUIO viene del otomí — la lengua de los pueblos originarios de Querétaro.
              Significa "lugar donde crecen las cosas." No elegimos el nombre por accidente:
              queremos ser el lugar donde tu marca echa raíces y crece con intención.
            </p>
            <p className="text-[15px] text-forest/75 leading-[1.75]">
              Somos un estudio pequeño por decisión. Trabajamos con pocas marcas a la vez
              para poder involucrarnos de verdad en cada proyecto. No buscamos escala —
              buscamos profundidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="section-padding pt-0">
        <div className="container-site">
          <motion.div {...fadeUp} className="mb-12 md:mb-14 max-w-2xl">
            <p className="mono-label mb-5">El equipo</p>
            <h2 className="display-lg text-forest mb-4">El núcleo.</h2>
            <p className="text-[15px] text-forest/70 leading-[1.75]">
              Tres personas, una brújula. Un equipo compacto que combina estrategia,
              creatividad y ejecución con la agilidad de quien conoce cada proyecto a fondo.
            </p>
          </motion.div>
          <motion.div {...fadeUpDelayed(0.1)} className="rounded-card overflow-hidden card-surface">
            <img
              src={`${import.meta.env.BASE_URL}images/picnic.png`}
              alt="Equipo QUIO"
              className="w-full object-cover"
              style={{ aspectRatio: '21/9' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="relative bg-forest text-cream overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              'radial-gradient(50% 60% at 15% 10%, rgba(133,146,109,0.22), transparent 70%), radial-gradient(45% 55% at 85% 85%, rgba(118,115,68,0.18), transparent 70%)',
          }}
        />
        <div className="relative container-site section-padding">
          <motion.div {...fadeUp} className="mb-12 md:mb-16 max-w-xl">
            <p className="mono-label text-cream/60 mb-5">Por qué QUIO</p>
            <h2 className="display-lg text-cream">Lo que guía cada decisión.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: i * 0.06 }}
                className="card-dark p-7 md:p-8"
              >
                <h3 className="display-sm text-cream mb-3">{v.title}</h3>
                <p className="text-[14px] text-cream/65 leading-[1.7]">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 md:mt-20 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cream mr-3"
            >
              Hablemos →
            </a>
            <Link to="/servicios" className="btn-glass">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
