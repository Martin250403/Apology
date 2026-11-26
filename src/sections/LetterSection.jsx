import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import ContinueButton from '../components/ContinueButton'

export default function LetterSection({ onContinue }) {
  return (
    <SectionWrapper className="bg-gradient-to-b from-cream via-blush/15 to-cream">
      <motion.div
        className="relative max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-4xl mb-2 block">📜</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary">
            From my heart, to yours...
          </h2>
        </motion.div>

        {/* The letter */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          {/* Paper texture background */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-xl shadow-blush-dark/15 border border-blush/30 overflow-hidden">
            {/* Subtle paper lines */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #d4727a 31px, #d4727a 32px)',
                backgroundPosition: '0 24px',
              }}
            />
            {/* Left margin line */}
            <div className="absolute left-10 top-0 bottom-0 w-px bg-soft-red/10" />

            <div className="relative p-8 md:p-10">
              {/* Small decorative heart */}
              <motion.div
                className="absolute top-4 right-6 text-soft-red/20"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>

              <div className="space-y-5">
                <motion.p
                  className="font-handwritten text-lg md:text-xl text-text-primary leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  I don't expect a button, a website, or a bunch of words to fix everything. I just wanted you to know that you're important to me. Loving you also means learning how to listen better, understanding you better, and showing up in ways that make you feel loved.
                </motion.p>

                <motion.p
                  className="font-handwritten text-lg md:text-xl text-text-primary leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  I'm sorry for the moments when I didn't do that properly. I want to grow, not just say I will.
                </motion.p>

                <motion.p
                  className="font-handwritten text-lg md:text-xl text-text-primary leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                >
                  And even through this little website, I hope I can make you smile for a moment.
                </motion.p>

                <motion.p
                  className="font-handwritten text-lg md:text-xl text-rose pt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.6 }}
                >
                  — With all my love ❤️
                </motion.p>
              </div>
            </div>
          </div>

          {/* Soft shadow underneath */}
          <div className="absolute -bottom-2 left-4 right-4 h-4 bg-blush-dark/10 rounded-full blur-xl" />
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <ContinueButton onClick={onContinue}>
            There's one more thing... ❤️
          </ContinueButton>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
