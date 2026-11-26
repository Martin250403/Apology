import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import ContinueButton from '../components/ContinueButton'

const notAnOptionMessages = [
  "Not an option! Nice try 😌❤️",
  "Nope, that button is officially out of service 🚫💌",
  "Error 404: 'Need time' not found. Try the other one 🥺",
  "Nice try, cutie — you're stuck with me ❤️",
]

export default function QuestionSection({ onContinue }) {
  const [accepted, setAccepted] = useState(false)
  const [denyClicks, setDenyClicks] = useState(0)

  const handleDeny = () => {
    setDenyClicks((prev) => prev + 1)
  }

  return (
    <SectionWrapper className="bg-gradient-to-b from-cream via-lavender/15 to-cream">
      <motion.div
        className="relative w-full max-w-lg mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {!accepted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              {/* Soft ambient glow */}
              <motion.div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lavender/20 rounded-full blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.span
                className="text-5xl block mb-6"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                🥺
              </motion.span>

              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary leading-snug mb-8 px-2">
                Can I try to make things a little better, one day at a time?
              </h2>

              <AnimatePresence mode="wait">
                {denyClicks > 0 && (
                  <motion.div
                    key={denyClicks}
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      x: [0, -6, 6, -4, 4, 0],
                    }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.45 }}
                    className="mb-6 px-5 py-2.5 rounded-full bg-blush/80 border border-soft-red/30 text-rose font-medium text-sm md:text-base shadow-sm"
                  >
                    {notAnOptionMessages[(denyClicks - 1) % notAnOptionMessages.length]}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <ContinueButton
                  onClick={() => setAccepted(true)}
                  className="w-full sm:w-auto"
                >
                  Okay, let's talk ❤️
                </ContinueButton>
                <ContinueButton
                  onClick={handleDeny}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {denyClicks > 0 ? 'Still not an option 😌' : 'I still need some time 🥺'}
                </ContinueButton>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-md mx-auto flex flex-col items-center"
            >
              <motion.div
                className="text-5xl mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              >
                🤍
              </motion.div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-blush-dark/15 border border-blush/40 p-8 mb-8">
                <motion.p
                  className="font-handwritten text-2xl text-text-primary leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Thank you for giving me the chance to listen. No grand promises — just genuine effort, more care, and a little extra love. ❤️
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <ContinueButton onClick={onContinue}>
                  One last thing... ❤️
                </ContinueButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}
