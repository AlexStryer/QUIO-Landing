import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'

const values = [
  {
    title: 'Estrategia con intención',
    desc: 'Cada acción tiene un propósito alineado a tus objetivos de negocio.',
  },
  {
    title: 'Contenido con identidad',
    desc: 'Piezas que reflejan quién eres como marca, nunca genéricas.',
  },
  {
    title: 'Visión creativa y comercial',
    desc: 'Creatividad al servicio de resultados tangibles y medibles.',
  },
  {
    title: 'Enfoque en posicionamiento',
    desc: 'Un lugar claro y memorable en la mente de tu público.',
  },
  {
    title: 'Acompañamiento cercano',
    desc: 'Un equipo que se involucra genuinamente en tu crecimiento.',
  },
  {
    title: 'Raíces profundas',
    desc: 'Construimos sobre fundamentos sólidos, nunca sobre tendencias pasajeras.',
  },
] as const

export default function Estudio() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <motion.div
          className="container-site max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionBase}
        >
          <p className="label-mono mb-6">El estudio</p>
          <h1 className="heading-editorial mb-8">Nosotros</h1>
          <p className="text-lg md:text-xl text-muted leading-[1.7]">
            Un estudio boutique de marketing en Querétaro que cree en las raíces profundas,
            el crecimiento estratégico y la creatividad con propósito.
          </p>
        </motion.div>
      </section>

      {/* ─── Two-column photo layout ─── */}
      <section className="px-[5%] md:px-[6%] lg:px-[7%] py-8 md:py-12">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-5">
          <motion.div className="lg:col-span-8" {...fadeUp}>
            <img
              src={`${import.meta.env.BASE_URL}images/regina-palacios.png`}
              alt="Estudio QUIO — espacio de trabajo"
              className="w-full object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:mt-20"
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

      {/* ─── Philosophy — "Pocos, bien" ─── */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div className="lg:col-span-5" {...fadeUp}>
            <h2 className="font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-[-0.02em] font-normal text-forest">
              Pocos, bien
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:col-start-7 lg:pt-16"
            {...fadeUpDelayed(0.15)}
          >
            <p className="text-[14px] text-muted leading-[1.8] mb-5">
              QUIO viene del otomí — la lengua de los pueblos originarios de Querétaro.
              Significa "lugar donde crecen las cosas." No elegimos el nombre por accidente.
              Queremos ser el lugar donde tu marca echa raíces y crece con intención.
            </p>
            <p className="text-[14px] text-muted leading-[1.8]">
              Somos un estudio pequeño por decisión. Trabajamos con pocos clientes a la vez
              para poder involucrarnos de verdad en cada proyecto. No buscamos escala —
              buscamos profundidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="section-padding pt-0">
        <div className="container-site">
          <motion.div {...fadeUp}>
            <p className="label-mono mb-6">El equipo</p>
            <h2 className="heading-large mb-4">
              El núcleo
            </h2>
            <p className="text-[14px] text-muted leading-[1.8] max-w-lg mb-16">
              Tres personas, una brújula. Un equipo compacto que combina estrategia,
              creatividad y ejecución con la agilidad de quien conoce cada proyecto a fondo.
            </p>
          </motion.div>

          {/* Team photo */}
          <motion.div {...fadeUpDelayed(0.1)}>
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
      <section className="section-padding pb-24">
        <div className="container-site">
          <p className="label-mono mb-10">Why us</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: i * 0.06 }}
                className="border-t border-sage/25 pt-6"
              >
                <h3 className="font-display text-lg mb-2 text-forest">{value.title}</h3>
                <p className="text-[14px] text-muted leading-[1.8]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
