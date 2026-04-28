import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_URL } from '../../constants'

const navLinks = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/metodo', label: 'Método' },
  { to: '/estudio', label: 'Estudio' },
] as const

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [menuOpen])

  const toggleMenu = useCallback(() => setMenuOpen((p) => !p), [])

  const linkClass = (to: string) =>
    `text-[13px] font-medium transition-opacity duration-300 ${
      pathname === to ? 'text-forest opacity-100' : 'text-forest/70 hover:opacity-100'
    }`

  const floating = scrolled && !menuOpen

  // One shared transition contract: same duration + easing across every
  // animating property so the navbar moves as a single object.
  const NAV_EASE = 'cubic-bezier(0.32, 0.72, 0, 1)'
  const NAV_DURATION = '700ms'
  const navTransitionStyle = {
    transitionDuration: NAV_DURATION,
    transitionTimingFunction: NAV_EASE,
  } as const

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
      style={navTransitionStyle}
      className={[
        'fixed left-0 right-0 z-50 mx-auto',
        'transition-[max-width,width,top,background-color,border-color,box-shadow,border-radius]',
        'will-change-[max-width,top,background-color]',
        floating
          ? 'top-4 w-[calc(100%-1rem)] max-w-[1080px] bg-cream/85 backdrop-blur-md border border-forest/10 rounded-card shadow-elevated'
          : menuOpen
            ? 'top-0 w-full max-w-none bg-cream/95 backdrop-blur-md border border-transparent border-b-forest/10 rounded-none'
            : 'top-0 w-full max-w-none bg-transparent border border-transparent rounded-none',
      ].join(' ')}
      aria-label="Navegación principal"
    >
      <nav
        style={navTransitionStyle}
        className={[
          'flex items-center justify-between gap-8',
          'transition-[height,padding]',
          floating ? 'h-14 px-4 md:px-5' : 'h-16 md:h-[72px] container-site',
        ].join(' ')}
      >
        {/* Wordmark */}
        <Link to="/" className="flex items-baseline gap-2 group" aria-label="QUIO — Inicio">
          <span className="font-display text-forest text-[22px] tracking-[-0.03em] leading-none">
            QUIO
          </span>
          <span
            style={navTransitionStyle}
            className={`mono-label-sm text-forest/50 pb-[2px] transition-[opacity,max-width,margin] overflow-hidden whitespace-nowrap ${
              floating ? 'opacity-0 max-w-0 ml-0 sm:inline' : 'hidden sm:inline opacity-100 max-w-[200px] ml-0'
            }`}
          >
            marketing studio
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkClass(link.to)}
              aria-current={pathname === link.to ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contacto" className="btn-outline">
            Contacto
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Empezar →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-forest"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-[1.5px] bg-current transition-transform duration-300 origin-center ${
              menuOpen ? 'translate-y-[3.25px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-transform duration-300 origin-center ${
              menuOpen ? '-translate-y-[3.25px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-cream z-40 flex flex-col justify-between px-6 pb-10 pt-10"
            role="menu"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    role="menuitem"
                    className={`font-display text-4xl text-forest ${
                      pathname === link.to ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{ letterSpacing: '-0.025em' }}
                    aria-current={pathname === link.to ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <Link
                  to="/contacto"
                  role="menuitem"
                  className="font-display text-4xl text-forest opacity-50"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  Contacto
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Empezar por WhatsApp
              </a>
              <p className="mono-label-sm text-forest/60 text-center">
                Querétaro · México
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
