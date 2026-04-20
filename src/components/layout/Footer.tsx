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
    <footer className="relative bg-forest text-cream overflow-hidden">
      {/* Soft cloud gradient wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 80% at 15% 0%, rgba(133, 146, 109, 0.2), transparent 70%), radial-gradient(50% 60% at 90% 10%, rgba(118, 115, 68, 0.18), transparent 70%)',
        }}
      />

      <div className="container-site relative">
        <div className="pt-20 md:pt-28 pb-12 grid grid-cols-2 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <p className="mono-label-sm text-cream/50 mb-4">Marketing Studio</p>
            <p className="display-md text-cream max-w-md">
              Tu marca merece florecer — con raíces firmes y dirección clara.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cream mt-8"
            >
              Hablemos por WhatsApp →
            </a>
          </div>

          {/* Nav */}
          <nav className="md:col-span-3 md:col-start-7" aria-label="Pie de página — navegación">
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
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
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
          </div>
        </div>

        {/* Massive brand wordmark */}
        <div className="pt-8 pb-10 select-none pointer-events-none" aria-hidden="true">
          <p
            className="font-display text-cream leading-[0.82]"
            style={{
              fontSize: 'clamp(5rem, 22vw, 20rem)',
              letterSpacing: '-0.04em',
            }}
          >
            Quio
          </p>
        </div>

        <div className="border-t border-cream/10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="mono-label-sm text-cream/50">© {year} QUIO · Marketing Studio</p>
          <p className="mono-label-sm text-cream/40">
            Raíces quietas · Crecimiento estratégico
          </p>
        </div>
      </div>
    </footer>
  )
}
