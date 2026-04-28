import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Persists for the SPA session — so the splash only runs on the
// initial load / hard reload, not when navigating back to "/".
let hasShownSplash = false

export default function LoadingScreen() {
  const [visible, setVisible] = useState(!hasShownSplash)

  useEffect(() => {
    if (hasShownSplash) return
    const timer = setTimeout(() => {
      hasShownSplash = true
      setVisible(false)
    }, 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-cloud-light"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.span
            className="font-display text-forest text-5xl md:text-7xl select-none pointer-events-none"
            initial={{ opacity: 0, y: 6, letterSpacing: '-0.035em' }}
            animate={{
              opacity: 1,
              y: 0,
              letterSpacing: '-0.035em',
              transition: { duration: 0.5, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              letterSpacing: '0.6em',
              transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            QUIO
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
