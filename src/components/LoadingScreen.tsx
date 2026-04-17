import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Start container fade while letters are still visible
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Letters fade in and expand, then HOLD — container handles the fade out */}
          <motion.span
            className="font-display text-cream text-5xl md:text-7xl lg:text-[5.5rem] select-none pointer-events-none"
            initial={{ letterSpacing: '-0.05em', opacity: 0 }}
            animate={{
              letterSpacing: ['-0.05em', '-0.05em', '0.5em'],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1.8,
              times: [0, 0.12, 1],
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            QUIO
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
