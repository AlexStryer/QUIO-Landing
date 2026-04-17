import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'QUIO · Marketing Studio',
    description: 'Estudio boutique de marketing en Querétaro. Estrategia, contenido y publicidad digital para marcas que quieren crecer con intención.',
  },
  '/servicios': {
    title: 'Servicios · QUIO',
    description: 'Servicios de marketing digital: contenido, copywriting, publicidad, gestión de redes sociales, estudios de mercado y más.',
  },
  '/proyectos': {
    title: 'Proyectos · QUIO',
    description: 'Una selección curada de nuestro trabajo en branding, contenido, estrategia y publicidad digital.',
  },
  '/metodo': {
    title: 'Método QUIO',
    description: 'Nuestro proceso: análisis, estrategia, producción, publicidad y optimización continua para tu marca.',
  },
  '/estudio': {
    title: 'Estudio · QUIO',
    description: 'Conoce QUIO: un estudio boutique de marketing en Querétaro con raíces profundas y crecimiento estratégico.',
  },
  '/contacto': {
    title: 'Contacto · QUIO',
    description: 'Hablemos sobre tu marca. Contacta a QUIO para una conversación sin compromiso.',
  },
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/']
    document.title = meta.title

    let descTag = document.querySelector('meta[name="description"]')
    if (!descTag) {
      descTag = document.createElement('meta')
      descTag.setAttribute('name', 'description')
      document.head.appendChild(descTag)
    }
    descTag.setAttribute('content', meta.description)
  }, [pathname])

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content" key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
