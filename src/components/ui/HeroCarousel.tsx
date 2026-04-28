import { useEffect, useRef } from 'react'

export interface HeroCarouselImage {
  src: string
  alt: string
  rotation: number
}

interface HeroCarouselProps {
  images: HeroCarouselImage[]
  /** Horizontal orbit radius in px. */
  radiusX?: number
  /** Vertical orbit radius in px. Different from `radiusX` to make the orbit elliptical. */
  radiusY?: number
  /** Degrees per second. */
  speed?: number
  className?: string
}

// Drives transform/opacity/z-index per frame via refs — no React state in the
// hot loop, so the orbit stays smooth even on heavier pages.
export default function HeroCarousel({
  images,
  radiusX = 150,
  radiusY = 210,
  speed = 5,
  className = '',
}: HeroCarouselProps) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const hoveringRef = useRef(false)

  useEffect(() => {
    let angle = 0
    let last = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      const factor = hoveringRef.current ? 0.25 : 1
      angle = (angle + speed * factor * dt) % 360
      const total = images.length

      for (let i = 0; i < cardRefs.current.length; i++) {
        const el = cardRefs.current[i]
        if (!el) continue
        const a = ((angle + (i * 360) / total) * Math.PI) / 180
        const x = Math.cos(a) * radiusX
        const y = Math.sin(a) * radiusY
        const depth = (Math.sin(a) + 1) / 2 // 0 (back) → 1 (front)
        const scale = 0.78 + depth * 0.34
        const opacity = 0.4 + depth * 0.6
        el.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${images[i].rotation}deg) scale(${scale.toFixed(3)})`
        el.style.opacity = opacity.toFixed(3)
        el.style.zIndex = String(Math.round(depth * 100))
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [images, radiusX, radiusY, speed])

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => { hoveringRef.current = true }}
      onMouseLeave={() => { hoveringRef.current = false }}
      aria-hidden="true"
    >
      {images.map((image, i) => (
        <div
          key={image.src}
          ref={(el) => { cardRefs.current[i] = el }}
          className="absolute top-1/2 left-1/2 w-[108px] h-[140px] md:w-[124px] md:h-[160px] rounded-card overflow-hidden bg-cream/70 will-change-transform"
          style={{
            boxShadow: '0 12px 30px rgba(48, 54, 37, 0.2)',
            border: '1px solid rgba(48, 54, 37, 0.06)',
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="eager"
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}
