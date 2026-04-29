import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export interface ShowcaseDetail {
  title: string
  text: string
}

export interface ShowcaseService {
  /** Unique value used by the tab pill state. */
  value: string
  /** Short label shown in the tab pill and the "Sobre {label}" eyebrow. */
  label: string
  /** Expandable items shown as an accordion. Content changes per service. */
  details?: ShowcaseDetail[]
  /** Image source for the right panel. */
  src: string
  alt?: string
}

interface FeatureShowcaseProps {
  /** Section heading shown at the top of the left column. */
  title: string
  /** Section description shown below the heading. */
  description?: string
  services: ShowcaseService[]
  cta?: { label: string; to: string }
  defaultValue?: string
  /** Right panel height in px. */
  panelHeight?: number
  className?: string
}

const easeOut = [0.22, 1, 0.36, 1] as const

export default function FeatureShowcase({
  title,
  description,
  services,
  cta,
  defaultValue,
  panelHeight = 460,
  className = '',
}: FeatureShowcaseProps) {
  const [activeValue, setActiveValue] = useState(
    defaultValue ?? services[0]?.value ?? ''
  )
  const [openDetail, setOpenDetail] = useState<number | null>(null)
  const active = services.find((s) => s.value === activeValue) ?? services[0]

  useEffect(() => {
    setOpenDetail(null)
  }, [activeValue])

  if (!active) return null

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${className}`}>
      {/* ── Left column — static section heading + per-service accordion ── */}
      <div className="lg:col-span-6">
        <h2 className="display-lg text-forest text-balance mb-5">{title}</h2>
        {description && (
          <p className="text-[15px] md:text-[16px] text-forest/70 leading-[1.7] max-w-md mb-10">
            {description}
          </p>
        )}

        <div className="min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <p className="mono-label-sm text-forest/55 mb-4">
                Sobre {active.label}
              </p>

              {active.details && active.details.length > 0 && (
                <div className="border-t border-forest/10 max-w-md">
                  {active.details.map((d, i) => {
                    const isOpen = openDetail === i
                    return (
                      <div
                        key={`${active.value}-${i}`}
                        className="border-b border-forest/10"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDetail((prev) => (prev === i ? null : i))
                          }
                          aria-expanded={isOpen}
                          className="w-full text-left flex items-center justify-between gap-6 py-4 group"
                        >
                          <span
                            className={`text-[15px] font-medium transition-colors duration-300 ${
                              isOpen
                                ? 'text-forest'
                                : 'text-forest/75 group-hover:text-forest'
                            }`}
                          >
                            {d.title}
                          </span>
                          <span
                            aria-hidden="true"
                            className="relative shrink-0 w-4 h-4"
                          >
                            <span className="absolute inset-x-0 top-1/2 h-px bg-forest/60 -translate-y-1/2" />
                            <span
                              className={`absolute inset-y-0 left-1/2 w-px bg-forest/60 -translate-x-1/2 transition-opacity duration-300 ${
                                isOpen ? 'opacity-0' : 'opacity-100'
                              }`}
                            />
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: easeOut }}
                              style={{ overflow: 'hidden' }}
                            >
                              <p className="text-[14px] text-forest/70 leading-[1.7] pb-4 pr-6">
                                {d.text}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {cta && (
          <div className="mt-8">
            <Link to={cta.to} className="btn-primary">
              {cta.label}
            </Link>
          </div>
        )}
      </div>

      {/* ── Right column — media + tab pill ── */}
      <div className="lg:col-span-6">
        <div
          className="relative overflow-hidden rounded-card border border-forest/10 bg-cream/40"
          style={{
            height: panelHeight,
            boxShadow: '0 4px 10px rgba(48, 54, 37, 0.1)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active.value}
              src={active.src}
              alt={active.alt ?? active.label}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: easeOut }}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center px-4">
            <div
              className="flex gap-1 rounded-card border border-forest/10 bg-cream/85 p-1 backdrop-blur-md"
              style={{ boxShadow: '0 4px 10px rgba(48, 54, 37, 0.1)' }}
            >
              {services.map((s) => {
                const isActive = activeValue === s.value
                return (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setActiveValue(s.value)}
                    aria-pressed={isActive}
                    className={`rounded-[6px] px-4 py-2 text-[12px] font-medium tracking-[0.02em] transition-colors duration-300 ${
                      isActive
                        ? 'bg-forest text-cream'
                        : 'text-forest/65 hover:text-forest'
                    }`}
                  >
                    {s.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
