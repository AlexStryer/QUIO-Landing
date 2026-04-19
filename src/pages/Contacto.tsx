import { motion } from 'framer-motion'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'

export default function Contacto() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="label-mono mb-6">Get in touch</p>
            <h1 className="heading-editorial mb-8">Hablemos</h1>
            <p className="text-lg text-muted leading-[1.7] max-w-lg">
              El primer paso para hacer crecer tu marca es una conversación. Sin compromiso,
              sin formalismos. Solo cuéntanos qué necesitas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Area ─── */}
      <section className="section-padding pt-0 pb-24">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Portrait photo */}
          <motion.div className="lg:col-span-6" {...fadeUp}>
            <img
              src={`${import.meta.env.BASE_URL}images/design-work-2.jpeg`}
              alt="Espacio creativo QUIO"
              className="w-full object-cover"
              style={{ aspectRatio: '4/5' }}
            />
          </motion.div>

          {/* Contact info blocks */}
          <motion.div
            className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center"
            {...fadeUpDelayed(0.15)}
          >
            {/* WhatsApp */}
            <div className="border-t border-sage/25 py-8">
              <p className="label-mono mb-4">WhatsApp</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn w-full text-center block"
              >
                Escríbenos
              </a>
            </div>

            {/* Instagram */}
            <div className="border-t border-sage/25 py-8">
              <p className="label-mono mb-3">Instagram</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-forest link-underline"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>

            {/* Location */}
            <div className="border-t border-sage/25 py-8">
              <p className="label-mono mb-3">Ubicación</p>
              <p className="text-[14px] text-forest">Querétaro, México</p>
            </div>

            {/* Quote */}
            <div className="border-t border-sage/25 py-8">
              <p className="text-[14px] text-muted leading-[1.8]">
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
