import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../constants'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'

const stats = [
  { value: '+20', label: 'Marcas acompañadas' },
  { value: '6', label: 'Años de práctica' },
  { value: '100%', label: 'Enfoque boutique' },
  { value: '5', label: 'Fases del método QUIO' },
] as const

const services = [
  {
    num: '01',
    title: 'Creación y producción de contenido',
    desc: 'Fotografía, video y diseño de calidad editorial — siempre anclados a una estrategia clara.',
    image: 'picnic.png',
  },
  {
    num: '02',
    title: 'Copywriting estratégico',
    desc: 'Textos con intención que conectan con tu audiencia y mueven a la acción.',
    image: 'design-work-2.jpeg',
  },
  {
    num: '03',
    title: 'Campañas y publicidad digital',
    desc: 'Meta, Google y TikTok Ads configurados, segmentados y optimizados en tiempo real.',
    image: 'swimmer.png',
  },
  {
    num: '04',
    title: 'Gestión de redes y comunidad',
    desc: 'Calendario editorial, community management y métricas que realmente importan.',
    image: 'design-work-1.jpeg',
  },
] as const

const methodSteps = [
  { phase: 'Raíz',  title: 'Análisis',    desc: 'Investigamos el terreno antes de plantar. Marca, mercado y audiencia.' },
  { phase: 'Suelo', title: 'Estrategia',  desc: 'Definimos objetivos y un plan concreto, canal por canal.' },
  { phase: 'Tallo', title: 'Producción',  desc: 'Contenido visual, textual y digital — alineado a la estrategia.' },
  { phase: 'Flor',  title: 'Publicidad',  desc: 'Campañas integradas con segmentación inteligente y presupuesto vivo.' },
  { phase: 'Fruto', title: 'Optimización',desc: 'Medimos, ajustamos y evolucionamos con cada ciclo.' },
] as const

const projects = [
  { title: 'Alta Competencia', category: 'Contenido',  year: '2024', image: 'swimmer.png',        cols: 'md:col-span-7', aspect: '4/3' },
  { title: 'Regina Palacios',  category: 'Branding',   year: '2024', image: 'regina-palacios.png', cols: 'md:col-span-5', aspect: '4/5' },
  { title: 'Vintage Classics', category: 'Producción', year: '2023', image: 'vintage-car.png',     cols: 'md:col-span-5', aspect: '3/4' },
  { title: 'Garden Party',     category: 'Estrategia', year: '2024', image: 'picnic.png',          cols: 'md:col-span-7', aspect: '4/3' },
] as const

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-cloud-light overflow-hidden">
        {/* Painterly floating shapes */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div
            className="cloud-a absolute top-[12%] left-[8%] w-[34vw] h-[34vw] max-w-[520px] max-h-[520px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(133,146,109,0.35), transparent 65%)' }}
          />
          <div
            className="cloud-b absolute top-[6%] right-[4%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(212,212,212,0.7), transparent 60%)' }}
          />
          <div
            className="cloud-c absolute bottom-[-8%] left-[35%] w-[36vw] h-[36vw] max-w-[540px] max-h-[540px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(118,115,68,0.3), transparent 65%)' }}
          />
        </div>

        <div className="relative container-site pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-32 min-h-[88vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.1 }}
            className="mb-7"
          >
            <span className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
              Aceptando 2 marcas · verano 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.15 }}
            className="display-xl text-forest max-w-[18ch]"
          >
            Marketing con raíces.
            <br />
            Marcas que florecen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.3 }}
            className="mt-8 max-w-xl text-[16px] md:text-[17px] text-forest/75 leading-[1.6]"
          >
            QUIO es un estudio boutique de marketing en Querétaro. Construimos la base
            estratégica —contenido, publicidad y comunidad— que sostiene el crecimiento
            de tu marca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Empezar una conversación →
            </a>
            <Link to="/metodo" className="btn-outline">
              Ver el método
            </Link>
          </motion.div>

          {/* Hero figure — a single editorial image anchored bottom-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            className="hidden lg:block absolute right-14 bottom-20 w-[320px] xl:w-[380px]"
            aria-hidden="true"
          >
            <div className="card-surface overflow-hidden rotate-[2deg]">
              <img
                src={`${import.meta.env.BASE_URL}images/regina-palacios.png`}
                alt=""
                className="w-full h-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="relative -mt-10 md:-mt-14 z-10">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitionBase}
            className="card-surface grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-forest/10"
          >
            {stats.map((s) => (
              <div key={s.label} className="p-6 md:p-8 first:border-t-0 md:first:border-l-0">
                <p className="stat-number text-forest">{s.value}</p>
                <p className="mt-3 text-[13px] text-forest/65 leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <p className="mono-label mb-5">01 — Estudio</p>
            <h2 className="display-lg text-forest">
              Raíces profundas, crecimiento visible.
            </h2>
          </motion.div>

          <motion.div {...fadeUpDelayed(0.15)} className="lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="text-[15px] text-forest/75 leading-[1.75] mb-5">
              Como el maguey, primero las raíces — después la flor. Trabajamos con pocas
              marcas a la vez para poder involucrarnos de verdad en cada decisión: desde
              la estrategia hasta la última pieza de contenido.
            </p>
            <p className="text-[15px] text-forest/75 leading-[1.75] mb-8">
              Creemos que las marcas crecen mejor cuando la estrategia precede a la
              acción, y cuando cada canal tiene un propósito dentro de un sistema claro.
            </p>
            <Link to="/estudio" className="link-underline text-[14px] text-forest">
              Conocer el estudio →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="section-padding pt-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20 items-end">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <p className="mono-label mb-5">02 — Servicios</p>
              <h2 className="display-lg text-forest max-w-[18ch]">
                Un sistema, no tácticas sueltas.
              </h2>
            </motion.div>
            <motion.p {...fadeUpDelayed(0.15)} className="lg:col-span-4 lg:col-start-9 text-[15px] text-forest/70 leading-[1.7]">
              Cada servicio construye sobre el anterior. Estrategia, contenido y
              publicidad que funcionan juntos.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {services.map((s, i) => (
              <motion.article
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: (i % 2) * 0.08 }}
                className="card-surface overflow-hidden group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${s.image}`}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="display-sm text-forest">{s.title}</h3>
                    <span className="mono-label-sm text-forest/50 pt-1 whitespace-nowrap">
                      {s.num}
                    </span>
                  </div>
                  <p className="text-[14px] text-forest/70 leading-[1.7]">{s.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/servicios" className="btn-outline">
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Dark method section ─── */}
      <section className="relative bg-forest text-cream overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(50% 60% at 15% 10%, rgba(133,146,109,0.22), transparent 70%), radial-gradient(45% 55% at 85% 85%, rgba(118,115,68,0.2), transparent 70%)',
          }}
        />
        <div className="relative container-site section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20 items-end">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <p className="mono-label text-cream/60 mb-5">03 — Método QUIO</p>
              <h2 className="display-lg text-cream max-w-[18ch]">
                Del análisis a resultados, en cinco fases.
              </h2>
            </motion.div>
            <motion.p
              {...fadeUpDelayed(0.15)}
              className="lg:col-span-4 lg:col-start-9 text-[15px] text-cream/70 leading-[1.7]"
            >
              Un proceso claro y repetible. Así llevamos a tu marca desde la raíz
              hasta el fruto — sin saltarnos etapas.
            </motion.p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 list-none p-0 m-0">
            {methodSteps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: i * 0.08 }}
                className="card-dark p-6 md:p-7 flex flex-col h-full"
              >
                <span className="mono-label-sm text-cream/50">
                  {String(i + 1).padStart(2, '0')} · {step.phase}
                </span>
                <h3 className="display-sm text-cream mt-4 mb-3">{step.title}</h3>
                <p className="text-[13.5px] text-cream/65 leading-[1.65]">{step.desc}</p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-12 flex justify-center">
            <Link to="/metodo" className="btn-glass">
              Ver el método completo →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Selected work ─── */}
      <section className="section-padding">
        <div className="container-site">
          <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
            <motion.div {...fadeUp}>
              <p className="mono-label mb-5">04 — Trabajo seleccionado</p>
              <h2 className="display-lg text-forest">Proyectos recientes.</h2>
            </motion.div>
            <Link to="/proyectos" className="hidden md:inline-flex link-underline text-[14px] text-forest pb-2">
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
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
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <p className="mono-label-sm text-forest/55 mb-1">{p.category}</p>
                    <h3 className="display-sm text-forest">{p.title}</h3>
                  </div>
                  <span className="mono-label-sm text-forest/45">{p.year}</span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 md:hidden flex justify-center">
            <Link to="/proyectos" className="btn-outline">
              Ver todos los proyectos →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="relative bg-cloud-light overflow-hidden">
        <div className="container-site section-padding text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <p className="mono-label mb-6">Empezar</p>
            <h2 className="display-xl text-forest mb-8">
              Tu marca merece florecer.
            </h2>
            <p className="text-[16px] text-forest/70 leading-[1.7] max-w-xl mx-auto mb-10">
              Si tienes un negocio o una idea que quieres hacer crecer, el primer paso
              es una conversación. Sin compromiso, sin formalismos.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Escríbenos por WhatsApp
              </a>
              <Link to="/contacto" className="btn-outline">
                Otras formas de contacto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
