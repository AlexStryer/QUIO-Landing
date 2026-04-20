import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-cloud-light"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="flex items-baseline gap-3 select-none pointer-events-none"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span
              className="font-display text-forest text-5xl md:text-7xl"
              style={{ letterSpacing: '-0.035em' }}
            >
              QUIO
            </span>
            <span className="mono-label-sm text-forest/60 pb-2">marketing studio</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
