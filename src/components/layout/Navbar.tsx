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
    const onScroll = () => setScrolled(window.scrollY >= 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), [])

  const onHero = isHome && !scrolled && !menuOpen
  const textColor = onHero ? 'text-cream' : 'text-forest'
  const linkStyle = (to: string) =>
    `text-[13px] tracking-[0.06em] font-body font-light transition-opacity duration-300 ${textColor} ${
      pathname === to ? 'opacity-100' : 'opacity-50 hover:opacity-100'
    }`

  /* On the hero: hide nav links, show only a small centered logo.
     Once scrolled (or on any other page): full navbar with links. */
  const showLinks = !onHero

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: isHome ? 2.8 : 0, ease: 'easeOut' as const }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled && !menuOpen ? 'bg-cream/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      aria-label="Navegación principal"
    >
      <div className={`container-site px-5 md:px-8 lg:px-16 transition-all duration-500 ${
        onHero ? 'h-12 lg:h-14' : 'h-16 lg:h-20'
      } grid grid-cols-2 lg:grid-cols-3 items-center`}>
        {/* Mobile: logo / Desktop: left links */}
        <div>
          <Link
            to="/"
            className={`lg:hidden font-display tracking-[0.25em] text-lg transition-all duration-500 ${textColor} ${
              onHero ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="QUIO — Inicio"
          >
            QUIO
          </Link>
          <div className={`hidden lg:flex items-center gap-8 transition-opacity duration-500 ${
            showLinks ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
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

        {/* Desktop: centered logo — hidden on hero */}
        <Link
          to="/"
          className={`hidden lg:block text-center font-display tracking-[0.25em] transition-all duration-500 ${textColor} ${
            onHero ? 'text-xl opacity-0 pointer-events-none' : 'text-xl opacity-100'
          }`}
          aria-label="QUIO — Inicio"
        >
          QUIO
        </Link>

        {/* Mobile: hamburger / Desktop: right links */}
        <div className="flex items-center justify-end">
          <div className={`hidden lg:flex items-center gap-8 transition-opacity duration-500 ${
            showLinks ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
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

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' as const }}
            className="lg:hidden bg-cream/95 backdrop-blur-md overflow-hidden"
            role="menu"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {allLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  role="menuitem"
                  className={`font-body text-base text-forest py-2 ${
                    pathname === link.to ? 'opacity-100' : 'opacity-50'
                  }`}
                  aria-current={pathname === link.to ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
