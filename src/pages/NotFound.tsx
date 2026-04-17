import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 · QUIO'
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <span className="font-display text-8xl md:text-[10rem] text-stone/60 leading-none">
        404
      </span>
      <p className="font-display text-2xl md:text-3xl mt-4 mb-2">Página no encontrada</p>
      <p className="text-sm text-muted mb-8">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        to="/"
        className="outline-btn"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
