import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

export default function FinalScreen() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-cream via-petal/25 to-cream">
      <motion.div
        className="relative max-w-lg mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glowing heart */}
        <motion.div
          className="relative mb-10 inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          {/* Outer glow rings */}
          <motion.div
            className="absolute inset-0 bg-soft-red/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 200, height: 200, top: -55, left: -55 }}
          />
          <motion.div
            className="absolute inset-0 bg-warm-pink/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.15, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{ width: 150, height: 150, top: -30, left: -30 }}
          />

          <motion.svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ scale: [1, 1.08, 1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <defs>
              <linearGradient id="finalHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8757a" />
                <stop offset="40%" stopColor="#d4727a" />
                <stop offset="100%" stopColor="#f4a5a8" />
              </linearGradient>
              <filter id="finalGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="url(#finalHeartGrad)"
              filter="url(#finalGlow)"
            />
          </motion.svg>
        </motion.div>

        {/* Main message */}
        <motion.div
          className="space-y-2 mb-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            Whatever happens, I wanted you to know this:
          </p>
        </motion.div>

        <motion.div
          className="space-y-1 mb-12"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <p className="font-serif text-xl md:text-2xl font-semibold text-text-primary leading-relaxed">
            I'm sorry. I care about you.
          </p>
          <p className="font-serif text-xl md:text-2xl font-semibold text-text-primary leading-relaxed">
            And I want to do better.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <div className="w-16 h-px bg-blush-dark/30 mx-auto mb-6" />
          <p className="font-handwritten text-base md:text-lg text-text-muted">
            Made with love, a little regret, and an unreasonable number of heart animations. ❤️
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
