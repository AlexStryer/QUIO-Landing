import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { transitionBase } from '../lib/animations'

const projects = [
  { title: 'Alta Competencia',  category: 'Contenido',  year: '2024', image: 'swimmer.png',        cols: 'md:col-span-7', aspect: '4/3' },
  { title: 'Regina Palacios',   category: 'Branding',   year: '2024', image: 'regina-palacios.png', cols: 'md:col-span-5', aspect: '4/5' },
  { title: 'Garden Party',      category: 'Estrategia', year: '2024', image: 'picnic.png',          cols: 'md:col-span-5', aspect: '3/4' },
  { title: 'Vintage Classics',  category: 'Producción', year: '2023', image: 'vintage-car.png',     cols: 'md:col-span-7', aspect: '4/3' },
  { title: 'Primeros Pasos',    category: 'Campañas',   year: '2024', image: 'baby-car.png',        cols: 'md:col-span-6', aspect: '16/10' },
  { title: 'Diseño Editorial',  category: 'Diseño',     year: '2024', image: 'design-work-1.jpeg',  cols: 'md:col-span-6', aspect: '1/1' },
  { title: 'Identidad Visual',  category: 'Branding',   year: '2023', image: 'design-work-4.jpeg',  cols: 'md:col-span-8 md:col-start-3', aspect: '21/9' },
] as const

export default function Proyectos() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-cloud-light overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="relative container-site">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="mono-label mb-5">Selected work</p>
            <h1 className="display-xl text-forest mb-6 max-w-[15ch]">
              Proyectos recientes.
            </h1>
            <p className="text-[16px] text-forest/75 leading-[1.7] max-w-xl">
              Una selección curada de nuestro trabajo en branding, contenido, estrategia
              y publicidad digital. Cada proyecto cuenta una historia distinta, pero todos
              comparten el mismo método.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Gallery ─── */}
      <section className="section-padding pt-0 pb-24">
        <div className="container-site grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className={`col-span-1 ${p.cols}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: (i % 2) * 0.08 }}
            >
              <div className="group relative overflow-hidden rounded-card">
                <img
                  src={`${import.meta.env.BASE_URL}images/${p.image}`}
                  alt={`${p.title} — ${p.category}`}
                  className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  style={{ aspectRatio: p.aspect }}
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <p className="mono-label-sm text-forest/55 mb-1">{p.category}</p>
                  <h2 className="display-sm text-forest">{p.title}</h2>
                </div>
                <span className="mono-label-sm text-forest/45">{p.year}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="container-site mt-20 md:mt-28 text-center">
          <p className="mono-label mb-5">¿Te interesa?</p>
          <p className="display-md text-forest mb-8 max-w-xl mx-auto">
            Tu proyecto puede ser el siguiente.
          </p>
          <Link to="/contacto" className="btn-primary">
            Empezar una conversación →
          </Link>
        </div>
      </section>
    </>
  )
}
