import { Link } from 'react-router-dom'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../constants'

const navLinks = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/metodo', label: 'Método' },
  { to: '/estudio', label: 'Estudio' },
  { to: '/contacto', label: 'Contacto' },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone/40 px-5 md:px-8 lg:px-20 py-16 md:py-20">
      <div className="container-site grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {/* Column 1: Logo */}
        <div>
          <span className="font-display text-2xl tracking-[0.3em] text-forest">QUIO</span>
          <p className="text-xs text-muted mt-2">Marketing Studio · Querétaro</p>
        </div>

        {/* Column 2: Navigation */}
        <nav aria-label="Navegación del pie de página">
          <p className="label-mono mb-4">Navegación</p>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted hover:text-forest transition-colors duration-200 py-1 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Contact */}
        <div>
          <p className="label-mono mb-4">Contacto</p>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-forest transition-colors duration-200 py-1 inline-block"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-forest transition-colors duration-200 py-1 inline-block"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-site border-t border-stone/40 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-muted">© {year} QUIO. Querétaro, México.</p>
        <p className="text-xs text-muted">Estrategia · Contenido · Publicidad</p>
      </div>
    </footer>
  )
}
