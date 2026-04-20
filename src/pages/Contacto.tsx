import { motion } from 'framer-motion'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants'
import { fadeUp, fadeUpDelayed, transitionBase } from '../lib/animations'

export default function Contacto() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-cloud-light overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="relative container-site max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
          >
            <p className="mono-label mb-5">Contacto</p>
            <h1 className="display-xl text-forest mb-8">Hablemos.</h1>
            <p className="text-lg text-forest/75 leading-[1.6] max-w-xl">
              El primer paso para hacer crecer tu marca es una conversación. Sin compromiso,
              sin formalismos. Solo cuéntanos qué necesitas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact cards ─── */}
      <section className="section-padding pt-0">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <motion.div className="lg:col-span-6" {...fadeUp}>
            <div className="rounded-card overflow-hidden card-surface">
              <img
                src={`${import.meta.env.BASE_URL}images/design-work-2.jpeg`}
                alt="Espacio creativo QUIO"
                className="w-full object-cover"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 flex flex-col gap-5"
            {...fadeUpDelayed(0.15)}
          >
            <div className="card-surface p-7 md:p-8">
              <p className="mono-label-sm text-forest/60 mb-3">Vía directa</p>
              <h2 className="display-md text-forest mb-3">WhatsApp</h2>
              <p className="text-[14px] text-forest/70 leading-[1.7] mb-6">
                Respondemos en minutos durante horas hábiles. La forma más rápida de
                empezar una conversación.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Escríbenos por WhatsApp →
              </a>
            </div>

            <div className="card-surface p-7 md:p-8">
              <p className="mono-label-sm text-forest/60 mb-3">Redes</p>
              <h2 className="display-md text-forest mb-3">Instagram</h2>
              <p className="text-[14px] text-forest/70 leading-[1.7] mb-6">
                Síguenos para ver trabajo reciente, detrás de cámaras y notas del estudio.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                {INSTAGRAM_HANDLE} →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="card-surface p-6">
                <p className="mono-label-sm text-forest/60 mb-2">Ubicación</p>
                <p className="text-[15px] text-forest">Querétaro, México</p>
              </div>
              <div className="card-surface p-6">
                <p className="mono-label-sm text-forest/60 mb-2">Horario</p>
                <p className="text-[15px] text-forest">Lun–Vie · 10–19h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
