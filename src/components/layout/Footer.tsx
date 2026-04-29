import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../constants'

const navLinks = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/metodo', label: 'Método' },
  { to: '/estudio', label: 'Estudio' },
  { to: '/contacto', label: 'Contacto' },
] as const

const containerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div
      className="relative h-[75vh]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+75vh)] -top-[100vh]">
        <footer className="sticky top-[calc(100vh-75vh)] h-[75vh] bg-forest text-cream overflow-hidden">
          {/* Soft cloud gradient wash */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70 pointer-events-none"
            style={{
              background:
                'radial-gradient(60% 80% at 15% 0%, rgba(133, 146, 109, 0.2), transparent 70%), radial-gradient(50% 60% at 90% 10%, rgba(118, 115, 68, 0.18), transparent 70%)',
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={containerVariants}
            className="container-site relative h-full flex flex-col"
          >
            <div className="pt-12 md:pt-16 pb-6 grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
              {/* Brand */}
              <motion.div variants={itemVariants} className="col-span-2 md:col-span-5">
                <p className="mono-label-sm text-cream/50 mb-4">Marketing Studio</p>
                <p className="display-md text-cream max-w-md">
                  Tu marca merece florecer — con raíces firmes y dirección clara.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cream mt-6"
                >
                  Hablemos por WhatsApp →
                </a>
              </motion.div>

              {/* Nav */}
              <motion.nav
                variants={itemVariants}
                className="md:col-span-3 md:col-start-7"
                aria-label="Pie de página — navegación"
              >
                <p className="mono-label-sm text-cream/50 mb-4">Navegación</p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-cream/75 hover:text-cream transition-colors duration-200 link-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>

              {/* Contact */}
              <motion.div variants={itemVariants} className="md:col-span-3">
                <p className="mono-label-sm text-cream/50 mb-4">Contacto</p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-cream/75 hover:text-cream transition-colors duration-200 link-underline"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-cream/75 hover:text-cream transition-colors duration-200 link-underline"
                    >
                      {INSTAGRAM_HANDLE}
                    </a>
                  </li>
                  <li className="text-[14px] text-cream/50">Querétaro, México</li>
                </ul>
              </motion.div>
            </div>

            {/* Massive brand wordmark */}
            <motion.div
              variants={itemVariants}
              className="pt-2 pb-4 select-none pointer-events-none"
              aria-hidden="true"
            >
              <p
                className="font-display text-cream leading-[0.82]"
                style={{
                  fontSize: 'clamp(4rem, 18vw, 16rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                QUIO
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border-t border-cream/10 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-auto"
            >
              <p className="mono-label-sm text-cream/50">
                © {year} QUIO · Marketing Studio
              </p>
              <p className="mono-label-sm text-cream/40">
                Raíces quietas · Crecimiento estratégico
              </p>
            </motion.div>
          </motion.div>
        </footer>
      </div>
    </div>
  )
}
