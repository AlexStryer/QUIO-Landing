import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 · QUIO'
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-[5%] text-center bg-cream">
      <span className="font-display text-8xl md:text-[10rem] text-sage/15 leading-none font-bold">
        404
      </span>
      <p className="font-display text-2xl md:text-3xl mt-6 mb-3 text-forest">Página no encontrada</p>
      <p className="text-[14px] text-muted mb-10">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        to="/"
        className="cta-btn"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
