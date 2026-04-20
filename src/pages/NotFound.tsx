import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 · QUIO'
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-cloud-light">
      <p className="mono-label mb-6">Error 404</p>
      <span
        className="font-display text-forest/15 leading-[0.85] select-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        404
      </span>
      <p className="display-md text-forest mt-6 mb-3">Página no encontrada.</p>
      <p className="text-[15px] text-forest/65 mb-10 max-w-md">
        La página que buscas no existe o fue movida. Vuelve al inicio para seguir explorando.
      </p>
      <Link to="/" className="btn-primary">
        Volver al inicio →
      </Link>
    </div>
  )
}
