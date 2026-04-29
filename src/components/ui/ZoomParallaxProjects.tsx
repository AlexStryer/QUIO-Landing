import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

interface Tile {
  src: string
  alt: string
  positionClass: string
}

const tiles: readonly Tile[] = [
  // Center — the rose-blooming maguey ("florecer"). At scale 4 it fills the
  // viewport exactly, becoming the focal frame at end-of-scroll.
  {
    src: `${BASE}images/maguey/maguey-05.jpg`,
    alt: 'Maguey en flor — rosa',
    positionClass: '',
  },
  {
    src: `${BASE}images/swimmer.png`,
    alt: 'Alta Competencia — Contenido',
    positionClass:
      '[&>div]:!-top-[28vh] [&>div]:!-left-[6vw] [&>div]:!h-[28vh] [&>div]:!w-[28vw]',
  },
  {
    src: `${BASE}images/picnic.png`,
    alt: 'Garden Party — Estrategia',
    positionClass:
      '[&>div]:!-top-[18vh] [&>div]:!left-[22vw] [&>div]:!h-[26vh] [&>div]:!w-[22vw]',
  },
  {
    src: `${BASE}images/regina-palacios.png`,
    alt: 'Regina Palacios — Branding',
    positionClass:
      '[&>div]:!top-[22vh] [&>div]:!-left-[18vw] [&>div]:!h-[26vh] [&>div]:!w-[24vw]',
  },
  {
    src: `${BASE}images/vintage-car.png`,
    alt: 'Vintage Classics — Producción',
    positionClass:
      '[&>div]:!top-[20vh] [&>div]:!left-[20vw] [&>div]:!h-[22vh] [&>div]:!w-[22vw]',
  },
] as const

export default function ZoomParallaxProjects() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!isDesktop) return null

  return <ParallaxStage />
}

function ParallaxStage() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
  const scales = [scale4, scale5, scale6, scale6, scale7]

  return (
    <section
      ref={container}
      aria-label="Galería de proyectos en zoom"
      className="relative h-[200vh] bg-cloud-light"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.alt}
            style={{ scale: scales[i] }}
            className={`absolute top-0 flex h-full w-full items-center justify-center will-change-transform ${tile.positionClass}`}
          >
            <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-card shadow-elevated">
              <img
                src={tile.src}
                alt={tile.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
