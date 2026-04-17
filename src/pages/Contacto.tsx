import { motion } from 'framer-motion'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'

export default function Contacto() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="label-mono mb-4">Get in touch</p>
            {/* COPY: Contacto heading */}
            <h1 className="heading-editorial mb-6">Hablemos</h1>
            {/* COPY: Contacto intro */}
            <p className="text-lg max-w-lg text-muted leading-relaxed">
              El primer paso para hacer crecer tu marca es una conversación. Sin compromiso,
              sin formalismos. Solo cuéntanos qué necesitas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: Contact Area ─── */}
      <section className="section-padding pt-0 pb-24">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Image */}
          <motion.div className="lg:col-span-6" {...fadeUp}>
            {/* TODO: Replace with actual contact image */}
            <div
              className="w-full bg-stone/30 rounded"
              style={{ aspectRatio: '4/5' }}
              role="img"
              aria-label="Imagen de contacto QUIO"
            />
          </motion.div>

          {/* Info Blocks */}
          <motion.div
            className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center"
            {...fadeUpDelayed(0.15)}
          >
            {/* WhatsApp CTA */}
            <div className="border-t border-stone/40 py-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-center w-full block"
              >
                Escríbenos por WhatsApp
              </a>
            </div>

            {/* Social */}
            <div className="border-t border-stone/40 py-6">
              <p className="label-mono mb-2">Social</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-sage transition-colors duration-200"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>

            {/* Location */}
            <div className="border-t border-stone/40 py-6">
              <p className="label-mono mb-2">Ubicación</p>
              <p className="text-sm text-muted">Querétaro, México</p>
            </div>

            {/* Quote */}
            <div className="border-t border-stone/40 py-6">
              {/* COPY: Contact quote */}
              <p className="text-sm text-muted italic leading-relaxed">
                Nos encanta conocer nuevos proyectos. Si tienes un negocio, una marca o una
                idea, queremos escucharte.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
