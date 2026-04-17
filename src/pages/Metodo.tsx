import { motion } from 'framer-motion'
import { fadeUp, scaleIn, transitionBase } from '../lib/animations'

const steps = [
  {
    title: 'Análisis',
    desc: 'Entendemos tu marca, tu mercado y tu audiencia antes de actuar.',
  },
  {
    title: 'Estrategia',
    desc: 'Definimos objetivos claros y un plan de acción concreto.',
  },
  {
    title: 'Producción',
    desc: 'Creamos el contenido visual, textual y digital que necesitas.',
  },
  {
    title: 'Publicidad',
    desc: 'Lanzamos campañas integradas con segmentación inteligente.',
  },
  {
    title: 'Optimización',
    desc: 'Medimos, ajustamos y mejoramos continuamente.',
  },
] as const

export default function Metodo() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="label-mono mb-4">Our process</p>
            {/* COPY: Método heading */}
            <h1 className="heading-editorial">
              Método
              <br />
              <em>QUIO</em>
            </h1>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:col-start-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: 0.2 }}
          >
            {/* COPY: Método intro */}
            <p className="text-sm text-muted leading-relaxed">
              Un proceso claro y repetible que lleva a tu marca del análisis a resultados
              reales, paso a paso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: Featured Image ─── */}
      <section className="px-5 md:px-8 lg:px-20 py-12 md:py-16">
        <motion.div className="container-site" {...scaleIn}>
          {/* TODO: Replace with actual method feature image */}
          <div
            className="w-full bg-stone/30 rounded"
            style={{ aspectRatio: '21/9' }}
            role="img"
            aria-label="Imagen del proceso QUIO"
          />
        </motion.div>
      </section>

      {/* ─── Section 3: Method Steps ─── */}
      <section className="section-padding pb-24">
        <ol className="container-site space-y-16 md:space-y-20 lg:space-y-28 list-none p-0 m-0">
          {steps.map((step, i) => {
            const num = String(i + 1).padStart(2, '0')
            const isOdd = i % 2 === 0

            return (
              <motion.li
                key={step.title}
                {...fadeUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
              >
                {/* Number */}
                <div
                  className={`${
                    isOdd ? 'lg:col-start-1' : 'lg:col-start-2'
                  } lg:col-span-2`}
                >
                  <span className="text-6xl md:text-8xl text-stone/80 font-display" aria-hidden="true">
                    {num}
                  </span>
                </div>

                {/* Title */}
                <div
                  className={`${
                    isOdd ? 'lg:col-start-4' : 'lg:col-start-5'
                  } lg:col-span-3`}
                >
                  {/* COPY: Step title */}
                  <h2 className="font-display text-3xl md:text-4xl italic">{step.title}</h2>
                </div>

                {/* Description */}
                <div
                  className={`${
                    isOdd ? 'lg:col-start-8' : 'lg:col-start-9'
                  } lg:col-span-4`}
                >
                  {/* COPY: Step description */}
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </section>
    </>
  )
}
