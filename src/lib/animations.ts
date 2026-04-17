import type { Variants, Transition } from 'framer-motion'

export const transitionBase: Transition = {
  duration: 0.6,
  ease: 'easeOut' as const,
}

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: transitionBase,
} as const

export const fadeUpDelayed = (delay: number) => ({
  ...fadeUp,
  transition: { ...transitionBase, delay },
}) as const

export const scaleIn = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true } as const,
  transition: { duration: 1, ease: 'easeOut' as const },
} as const

export const heroStagger: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay: i * 0.15 },
  }),
}
