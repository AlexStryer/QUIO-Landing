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
    <footer className="border-t border-sage/30 bg-cream">
      <div className="container-site px-[5%] md:px-[6%] lg:px-[7%] py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: QUIO */}
          <div>
            <span className="font-display text-xl tracking-[0.3em] text-forest">QUIO</span>
            <p className="label-mono mt-3" style={{ fontSize: '10px' }}>
              Marketing Studio
              <br />
              Querétaro
            </p>
          </div>

          {/* Column 2: Navigation */}
          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-muted link-underline transition-opacity duration-200 hover:opacity-100 opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact */}
          <div>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted link-underline transition-opacity duration-200 hover:opacity-100 opacity-60"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted link-underline transition-opacity duration-200 hover:opacity-100 opacity-60"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-site px-[5%] md:px-[6%] lg:px-[7%] border-t border-sage/15 py-6">
        <p className="text-[11px] text-muted">© {year} QUIO. Querétaro, México.</p>
      </div>
    </footer>
  )
}
