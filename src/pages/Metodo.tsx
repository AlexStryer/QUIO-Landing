import { motion } from 'framer-motion'
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
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="label-mono mb-6">Our process</p>
            <h1 className="heading-editorial">
              Método
              <br />
              QUIO
            </h1>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:col-start-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: 0.2 }}
          >
            <p className="text-[14px] text-muted leading-[1.8]">
              Un proceso claro y repetible que lleva a tu marca del análisis a resultados
              reales, paso a paso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Image ─── */}
      <section className="px-[5%] md:px-[6%] lg:px-[7%] py-8 md:py-12">
        <motion.div className="container-site" {...fadeUp}>
          <img
            src={`${import.meta.env.BASE_URL}images/design-work-1.jpeg`}
            alt="Proceso creativo QUIO"
            className="w-full object-cover"
            style={{ aspectRatio: '21/9' }}
          />
        </motion.div>
      </section>

      {/* ─── Method Steps ─── */}
      <section className="section-padding pb-24">
        <ol className="container-site space-y-20 md:space-y-28 lg:space-y-36 list-none p-0 m-0">
          {steps.map((step, i) => {
            const num = String(i + 1).padStart(2, '0')
            const indent = i % 2 === 1

            return (
              <motion.li
                key={step.title}
                {...fadeUp}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start ${
                  indent ? 'lg:pl-[4%]' : ''
                }`}
              >
                {/* Decorative number */}
                <div className="lg:col-span-3 relative">
                  <span
                    className="text-[8rem] md:text-[10rem] lg:text-[12rem] leading-none text-sage/10 font-display font-bold absolute -top-8 md:-top-12 left-0"
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <div className="relative pt-16 md:pt-20">
                    <p className="label-mono mb-2">{step.phase}</p>
                  </div>
                </div>

                {/* Title */}
                <div className="lg:col-span-3 flex items-start pt-0 lg:pt-20">
                  <h2 className="font-display text-3xl md:text-4xl text-forest">{step.title}</h2>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 lg:col-start-8 pt-0 lg:pt-20">
                  <p className="text-[14px] text-muted leading-[1.8]">{step.desc}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </section>
    </>
  )
}
