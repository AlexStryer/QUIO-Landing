import { useEffect, useRef, useState } from 'react'
import { motion, type PanInfo } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

type Direction = 'left' | 'right'

interface PhotoSlot {
  x: number
  y: number
  zIndex: number
}

// Five fan-out positions. The dragged photo snaps to the nearest one on release.
const SLOTS: readonly PhotoSlot[] = [
  { x: -320, y: 15, zIndex: 50 },
  { x: -160, y: 32, zIndex: 40 },
  { x: 0,    y: 8,  zIndex: 30 },
  { x: 160,  y: 22, zIndex: 20 },
  { x: 320,  y: 44, zIndex: 10 },
] as const

interface PhotoData {
  id: number
  src: string
  alt: string
  direction: Direction
}

const PHOTOS: readonly PhotoData[] = [
  { id: 1, src: `${BASE}images/swimmer.png`,         alt: 'Sesión de fotografía deportiva', direction: 'left'  },
  { id: 2, src: `${BASE}images/picnic.png`,          alt: 'Producción editorial',           direction: 'left'  },
  { id: 3, src: `${BASE}images/regina-palacios.png`, alt: 'Identidad personal',             direction: 'right' },
  { id: 4, src: `${BASE}images/vintage-car.png`,     alt: 'Dirección de arte',              direction: 'right' },
  { id: 5, src: `${BASE}images/baby-car.png`,        alt: 'Producción de contenido',        direction: 'left'  },
] as const

const PHOTO_SIZE = 200

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min

const findNearestSlot = (x: number, y: number): number => {
  let best = 0
  let bestDist = Infinity
  SLOTS.forEach((s, i) => {
    const dx = s.x - x
    const dy = s.y - y
    const d = dx * dx + dy * dy
    if (d < bestDist) {
      bestDist = d
      best = i
    }
  })
  return best
}

// Snap-to-slot spring. Damping ratio ~1.10 (slightly overdamped) for a confident,
// no-wobble settle that still feels alive — same spring is reused for the
// entrance fan-out and the live preview shuffle.
const settleSpring = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 26,
  mass: 0.7,
}

// Faster, tighter spring for the lift on hover / pickup. Reads as "instant"
// without being snappy — separated from settleSpring so scale changes don't
// share its longer time constant.
const liftSpring = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 28,
  mass: 0.6,
}

interface PhotoProps {
  src: string
  alt: string
  direction: Direction
  slot: PhotoSlot
  isLoaded: boolean
  isDragging: boolean
  staggerDelay: number
  onDragStart: () => void
  onDrag: (info: PanInfo) => void
  onDragEnd: () => void
}

function Photo({
  src, alt, direction, slot, isLoaded, isDragging,
  staggerDelay, onDragStart, onDrag, onDragEnd,
}: PhotoProps) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setRotation(randomInRange(1, 4) * (direction === 'left' ? -1 : 1))
  }, [direction])

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={onDragStart}
      onDrag={(_, info) => onDrag(info)}
      onDragEnd={onDragEnd}
      initial={{ x: 0, y: 0, rotate: 0 }}
      animate={{
        x: isLoaded ? slot.x : 0,
        y: isLoaded ? slot.y : 0,
        rotate: isLoaded ? rotation : 0,
      }}
      transition={{
        ...settleSpring,
        delay: isLoaded && !isDragging ? staggerDelay : 0,
      }}
      whileHover={{
        scale: 1.06,
        rotateZ: 2 * (direction === 'left' ? -1 : 1),
        zIndex: 9999,
        transition: liftSpring,
      }}
      whileDrag={{
        scale: 1.08,
        zIndex: 9999,
        transition: liftSpring,
      }}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: PHOTO_SIZE,
        height: PHOTO_SIZE,
        zIndex: slot.zIndex,
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        touchAction: 'none',
      }}
      className="cursor-grab active:cursor-grabbing"
      tabIndex={0}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-card bg-cream"
        style={{ boxShadow: '0 14px 32px rgba(48, 54, 37, 0.18)' }}
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  )
}

interface PhotoGalleryProps {
  /** Seconds of delay before the fan-out starts. */
  animationDelay?: number
}

export default function PhotoGallery({ animationDelay = 0.3 }: PhotoGalleryProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  // orderIds[slotIndex] = photoId currently committed to that slot.
  const [orderIds, setOrderIds] = useState<number[]>(() => PHOTOS.map((p) => p.id))
  // Live drag state — drives the preview shuffle while a photo is in flight.
  const [dragState, setDragState] = useState<{
    photoId: number
    fromSlot: number
  } | null>(null)
  const [previewToSlot, setPreviewToSlot] = useState<number | null>(null)
  // Mirror of state for use inside drag callbacks (which would otherwise close
  // over a stale snapshot of orderIds / dragState).
  const orderRef = useRef(orderIds)
  const dragRef = useRef(dragState)
  const previewRef = useRef(previewToSlot)
  orderRef.current = orderIds
  dragRef.current = dragState
  previewRef.current = previewToSlot

  useEffect(() => {
    const a = setTimeout(() => setIsVisible(true), animationDelay * 1000)
    const b = setTimeout(() => setIsLoaded(true), (animationDelay + 0.4) * 1000)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [animationDelay])

  const handleDragStart = (photoId: number) => {
    const fromSlot = orderRef.current.indexOf(photoId)
    if (fromSlot === -1) return
    setDragState({ photoId, fromSlot })
    setPreviewToSlot(fromSlot)
  }

  const handleDrag = (photoId: number, info: PanInfo) => {
    const drag = dragRef.current
    if (!drag || drag.photoId !== photoId) return
    const fromCoords = SLOTS[drag.fromSlot]
    const cx = fromCoords.x + info.offset.x
    const cy = fromCoords.y + info.offset.y
    const nearest = findNearestSlot(cx, cy)
    if (nearest !== previewRef.current) {
      setPreviewToSlot(nearest)
    }
  }

  const handleDragEnd = (photoId: number) => {
    const drag = dragRef.current
    const toSlot = previewRef.current
    setDragState(null)
    setPreviewToSlot(null)
    if (!drag || drag.photoId !== photoId) return
    if (toSlot === null || toSlot === drag.fromSlot) return
    setOrderIds((current) => {
      const next = [...current]
      ;[next[drag.fromSlot], next[toSlot]] = [next[toSlot], next[drag.fromSlot]]
      return next
    })
  }

  return (
    <div className="relative h-[200px] sm:h-[260px] lg:h-[300px] w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative mx-auto flex w-full justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="relative h-[200px] w-[200px] origin-center scale-[0.5] sm:scale-[0.7] lg:scale-100">
          {orderIds.map((photoId, committedSlotIdx) => {
            const photo = PHOTOS.find((p) => p.id === photoId)!
            const isDragging = dragState?.photoId === photoId

            // Visual slot logic — drives the live preview shuffle:
            // While a drag is in flight and hovering over a different slot,
            // the photo currently at that target slot displays at the dragged
            // photo's origin slot, telegraphing the swap before release.
            let visualSlotIdx = committedSlotIdx
            if (
              dragState &&
              previewToSlot !== null &&
              previewToSlot !== dragState.fromSlot &&
              !isDragging &&
              committedSlotIdx === previewToSlot
            ) {
              visualSlotIdx = dragState.fromSlot
            }
            const visualSlot = SLOTS[visualSlotIdx]

            return (
              <Photo
                key={photoId}
                src={photo.src}
                alt={photo.alt}
                direction={photo.direction}
                slot={visualSlot}
                isLoaded={isLoaded}
                isDragging={isDragging}
                staggerDelay={committedSlotIdx * 0.15}
                onDragStart={() => handleDragStart(photoId)}
                onDrag={(info) => handleDrag(photoId, info)}
                onDragEnd={() => handleDragEnd(photoId)}
              />
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
