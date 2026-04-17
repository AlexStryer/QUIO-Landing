import { motion } from 'framer-motion'
import { transitionBase } from '../lib/animations'

const projects = [
  { title: 'Proyecto Uno', category: 'Branding', cols: 'md:col-span-7', aspect: '4/3' },
  { title: 'Proyecto Dos', category: 'Contenido', cols: 'md:col-span-5', aspect: '3/4' },
  { title: 'Proyecto Tres', category: 'Estrategia', cols: 'md:col-span-5', aspect: '3/4' },
  { title: 'Proyecto Cuatro', category: 'Publicidad', cols: 'md:col-span-7', aspect: '4/3' },
  { title: 'Proyecto Cinco', category: 'Redes sociales', cols: 'md:col-span-6', aspect: '1/1' },
  { title: 'Proyecto Seis', category: 'Campañas', cols: 'md:col-span-6', aspect: '1/1' },
  {
    title: 'Proyecto Siete',
    category: 'Branding',
    cols: 'md:col-span-8 md:col-start-3',
    aspect: '21/9',
  },
] as const

export default function Proyectos() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <motion.div
          className="container-site"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionBase}
        >
          <p className="label-mono mb-4">Selected work</p>
          {/* COPY: Proyectos heading */}
          <h1 className="heading-editorial mb-6">Proyectos</h1>
          {/* COPY: Proyectos intro */}
          <p className="text-sm text-muted leading-relaxed max-w-lg">
            Una selección curada de nuestro trabajo en branding, contenido, estrategia y
            publicidad digital.
          </p>
        </motion.div>
      </section>

      {/* ─── Section 2: Asymmetric Gallery ─── */}
      <section className="section-padding pt-0 pb-24">
        <div className="container-site grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-5">
          {projects.map((project, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <motion.article
                key={project.title}
                className={`col-span-1 ${project.cols}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ...transitionBase,
                  delay: (i % 2) * 0.15,
                }}
              >
                {/* Image */}
                <div className="group relative overflow-hidden rounded">
                  {/* TODO: Replace with actual project image */}
                  <div
                    className="w-full bg-stone/30 group-hover:scale-[1.03] transition-transform duration-700"
                    style={{ aspectRatio: project.aspect }}
                    role="img"
                    aria-label={`${project.title} — ${project.category}`}
                  />
                  <span
                    className="absolute top-4 left-4 text-xs text-cream/0 group-hover:text-cream/80 transition-colors duration-300 font-display"
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                </div>

                {/* Info */}
                <div className="mt-3">
                  {/* COPY: Project category */}
                  <p className="label-mono mb-1">{project.category}</p>
                  {/* COPY: Project title */}
                  <h2 className="font-display text-lg">{project.title}</h2>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>
    </>
  )
}
