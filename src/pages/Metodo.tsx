import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, transitionBase } from '../lib/animations'

const steps = [
  {
    phase: 'Raíz',
    title: 'Análisis',
    desc: 'Entendemos tu marca, tu mercado y tu audiencia antes de actuar. Investigamos el terreno para que cada decisión esté respaldada por datos reales, no suposiciones.',
  },
  {
    phase: 'Suelo',
    title: 'Estrategia',
    desc: 'Definimos objetivos claros y un plan de acción concreto. Cada táctica tiene un propósito y cada canal una función dentro del ecosistema de tu marca.',
  },
  {
    phase: 'Tallo',
    title: 'Producción',
    desc: 'Creamos el contenido visual, textual y digital que necesitas. Fotografía, video, diseño y copy — todo alineado a la estrategia definida.',
  },
  {
    phase: 'Flor',
    title: 'Publicidad',
    desc: 'Lanzamos campañas integradas con segmentación inteligente. Tu mensaje llega a quien debe llegar, en el momento correcto y en la plataforma adecuada.',
  },
  {
    phase: 'Fruto',
    title: 'Optimización',
    desc: 'Medimos, ajustamos y mejoramos continuamente. El marketing no es estático — analizamos resultados para evolucionar tu estrategia constantemente.',
  },
] as const

export default function Metodo() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-cloud-light overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="relative container-site grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="mono-label mb-5">Nuestro proceso</p>
            <h1 className="display-xl text-forest max-w-[14ch]">
              Método QUIO.
            </h1>
          </motion.div>
          <motion.p
            className="lg:col-span-4 lg:col-start-9 text-[15px] text-forest/70 leading-[1.75]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: 0.15 }}
          >
            Un proceso claro y repetible que lleva a tu marca del análisis a resultados
            reales — paso a paso, fase a fase.
          </motion.p>
        </div>
      </section>

      {/* ─── Featured image ─── */}
      <section className="px-6 md:px-10 lg:px-14">
        <motion.div className="container-site" {...fadeUp}>
          <div className="rounded-card overflow-hidden card-surface">
            <img
              src={`${import.meta.env.BASE_URL}images/design-work-1.jpeg`}
              alt="Proceso creativo QUIO"
              className="w-full object-cover"
              style={{ aspectRatio: '21/9' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── Steps ─── */}
      <section className="section-padding">
        <ol className="container-site grid grid-cols-1 md:grid-cols-12 gap-5 list-none p-0 m-0">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              {...fadeUp}
              className={`card-surface p-7 md:p-8 col-span-1 md:col-span-6 ${
                i === 4 ? 'lg:col-span-12' : 'lg:col-span-6'
              } flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between">
                <span className="badge">
                  Fase {String(i + 1).padStart(2, '0')} · {step.phase}
                </span>
                <span
                  className="font-display text-forest/10 select-none"
                  style={{
                    fontSize: '5rem',
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h2 className="display-md text-forest">{step.title}</h2>
              <p className="text-[15px] text-forest/70 leading-[1.75]">{step.desc}</p>
            </motion.li>
          ))}
        </ol>

        <div className="container-site mt-16 md:mt-20 text-center">
          <p className="mono-label mb-5">Siguiente paso</p>
          <p className="display-md text-forest max-w-xl mx-auto mb-8">
            ¿Quieres aplicar el método a tu marca?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Empezar ahora →
            </a>
            <Link to="/servicios" className="btn-outline">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
