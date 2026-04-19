import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const leftLinks = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
] as const

const rightLinks = [
  { to: '/metodo', label: 'Método' },
  { to: '/estudio', label: 'Estudio' },
  { to: '/contacto', label: 'Contacto' },
] as const

const allLinks = [...leftLinks, ...rightLinks]

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), [])

  const onHero = isHome && !scrolled && !menuOpen
  const textColor = onHero ? 'text-white' : 'text-forest'

  const linkStyle = (to: string) =>
    `text-[13px] tracking-[0.06em] font-normal transition-opacity duration-300 link-underline ${textColor} ${
      pathname === to ? 'opacity-100' : 'opacity-50 hover:opacity-100'
    }`

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: isHome ? 2.8 : 0, ease: 'easeOut' as const }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        onHero
          ? 'bg-transparent'
          : 'bg-cream/90 backdrop-blur-md border-b border-sage/20'
      }`}
      aria-label="Navegación principal"
    >
      <div className={`container-site px-[5%] md:px-[6%] lg:px-[7%] h-16 lg:h-20 grid grid-cols-2 lg:grid-cols-3 items-center`}>
        {/* Mobile: logo left / Desktop: left links */}
        <div>
          <Link
            to="/"
            className={`lg:hidden font-display tracking-[0.25em] text-lg ${textColor}`}
            aria-label="QUIO — Inicio"
          >
            QUIO
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            {leftLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkStyle(link.to)}
                aria-current={pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop: centered logo */}
        <Link
          to="/"
          className={`hidden lg:block text-center font-display tracking-[0.3em] text-xl ${textColor}`}
          aria-label="QUIO — Inicio"
        >
          QUIO
        </Link>

        {/* Mobile: hamburger / Desktop: right links */}
        <div className="flex items-center justify-end">
          <div className="hidden lg:flex items-center gap-10">
            {rightLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkStyle(link.to)}
                aria-current={pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] ${textColor}`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[1px] bg-current transition-transform duration-300 origin-center ${
                menuOpen ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-current transition-transform duration-300 origin-center ${
                menuOpen ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' as const }}
            className="lg:hidden fixed inset-0 top-16 bg-cream z-40 flex flex-col justify-center px-[8%]"
            role="menu"
          >
            <div className="flex flex-col gap-6">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    role="menuitem"
                    className={`font-display text-3xl text-forest link-underline ${
                      pathname === link.to ? 'opacity-100' : 'opacity-40'
                    }`}
                    aria-current={pathname === link.to ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
