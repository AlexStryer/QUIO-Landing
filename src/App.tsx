import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingScreen from './components/LoadingScreen'

const Home = lazy(() => import('./pages/Home'))
const Servicios = lazy(() => import('./pages/Servicios'))
const Proyectos = lazy(() => import('./pages/Proyectos'))
const Metodo = lazy(() => import('./pages/Metodo'))
const Estudio = lazy(() => import('./pages/Estudio'))
const Contacto = lazy(() => import('./pages/Contacto'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      {isHome && <LoadingScreen />}
      <Suspense>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/metodo" element={<Metodo />} />
            <Route path="/estudio" element={<Estudio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
