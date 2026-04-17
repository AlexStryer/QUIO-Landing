import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'

const values = [
  {
    title: 'Estrategia con intención',
    desc: 'Cada acción tiene un propósito alineado a tus objetivos.',
  },
  {
    title: 'Contenido con identidad',
    desc: 'Piezas que reflejan quién eres como marca.',
  },
  {
    title: 'Visión creativa y comercial',
    desc: 'Creatividad al servicio de resultados tangibles.',
  },
  {
    title: 'Enfoque en posicionamiento',
    desc: 'Un lugar claro en la mente de tu público.',
  },
  {
    title: 'Acompañamiento cercano',
    desc: 'Un equipo que se involucra en tu crecimiento.',
  },
] as const

export default function Estudio() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionBase}
        >
          <p className="label-mono mb-4">El estudio</p>
          {/* COPY: Estudio heading */}
          <h1 className="heading-editorial mb-6">Nosotros</h1>
          {/* COPY: Estudio intro */}
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            Un estudio boutique de marketing en Querétaro que cree en las raíces profundas,
            el crecimiento estratégico y la creatividad con propósito.
          </p>
        </motion.div>
      </section>

      {/* ─── Section 2: Images ─── */}
      <section className="px-5 md:px-8 lg:px-20 py-12 md:py-16">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div className="lg:col-span-8" {...fadeUp}>
            {/* TODO: Replace with actual primary estudio image */}
            <div
              className="w-full bg-stone/30 rounded"
              style={{ aspectRatio: '16/10' }}
              role="img"
              aria-label="Estudio QUIO — imagen principal"
            />
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:pt-0 xl:pt-16"
            {...fadeUpDelayed(0.15)}
          >
            {/* TODO: Replace with actual secondary estudio image */}
            <div
              className="w-full bg-stone/30 rounded"
              style={{ aspectRatio: '3/4' }}
              role="img"
              aria-label="Estudio QUIO — imagen secundaria"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Section 3: Philosophy ─── */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div className="lg:col-span-5" {...fadeUp}>
            {/* COPY: Philosophy heading */}
            <h2 className="heading-large">
              Raíces firmes, <em>crecimiento</em> estratégico
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:col-start-7 lg:pt-24"
            {...fadeUpDelayed(0.15)}
          >
            {/* COPY: Philosophy paragraphs */}
            <p className="text-sm text-muted leading-relaxed mb-4">
              Creemos que las marcas crecen mejor cuando tienen raíces profundas. Eso
              significa entender antes de actuar, planear antes de producir, y medir antes de
              escalar.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              En QUIO combinamos visión creativa con estrategia comercial. Cada pieza que
              creamos tiene un propósito, y cada campaña está diseñada para generar resultados
              reales para tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 4: Values (Why Us) ─── */}
      <section className="section-padding pb-24">
        <div className="container-site">
          <h2 className="label-mono mb-10">Why us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: i * 0.08 }}
                className="border-t border-stone/40 pt-6"
              >
                {/* COPY: Value title */}
                <h3 className="font-display text-xl mb-2">{value.title}</h3>
                {/* COPY: Value description */}
                <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
