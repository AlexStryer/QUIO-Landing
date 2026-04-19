import { motion } from 'framer-motion'
import { transitionBase } from '../lib/animations'

const projects = [
  {
    title: 'Alta Competencia',
    category: 'Contenido',
    year: '2024',
    image: 'swimmer.png',
    cols: 'md:col-span-7',
    aspect: '4/3',
  },
  {
    title: 'Regina Palacios',
    category: 'Branding',
    year: '2024',
    image: 'regina-palacios.png',
    cols: 'md:col-span-5',
    aspect: '4/5',
  },
  {
    title: 'Garden Party',
    category: 'Estrategia',
    year: '2024',
    image: 'picnic.png',
    cols: 'md:col-span-5',
    aspect: '3/4',
  },
  {
    title: 'Vintage Classics',
    category: 'Producción',
    year: '2023',
    image: 'vintage-car.png',
    cols: 'md:col-span-7',
    aspect: '4/3',
  },
  {
    title: 'Primeros Pasos',
    category: 'Campañas',
    year: '2024',
    image: 'baby-car.png',
    cols: 'md:col-span-6',
    aspect: '16/10',
  },
  {
    title: 'Diseño Editorial',
    category: 'Diseño',
    year: '2024',
    image: 'design-work-1.jpeg',
    cols: 'md:col-span-6',
    aspect: '1/1',
  },
  {
    title: 'Identidad Visual',
    category: 'Branding',
    year: '2023',
    image: 'design-work-4.jpeg',
    cols: 'md:col-span-8 md:col-start-3',
    aspect: '21/9',
  },
] as const

export default function Proyectos() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <motion.div
          className="container-site"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionBase}
        >
          <p className="label-mono mb-6">Selected work</p>
          <h1 className="heading-editorial mb-6">Proyectos</h1>
          <p className="text-[14px] text-muted leading-[1.8] max-w-lg">
            Una selección curada de nuestro trabajo en branding, contenido, estrategia y
            publicidad digital.
          </p>
        </motion.div>
      </section>

      {/* ─── Asymmetric Gallery ─── */}
      <section className="section-padding pt-0 pb-24">
        <div className="container-site grid grid-cols-1 md:grid-cols-12 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={`col-span-1 ${project.cols}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ...transitionBase,
                delay: (i % 2) * 0.1,
              }}
            >
              <div className="group relative overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={`${project.title} — ${project.category}`}
                  className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  style={{ aspectRatio: project.aspect }}
                />
              </div>

              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <p className="label-mono mb-1">{project.category}</p>
                  <h2 className="font-display text-[17px] text-forest">{project.title}</h2>
                </div>
                <span className="text-[11px] text-muted">{project.year}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
