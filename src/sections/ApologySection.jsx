import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import ContinueButton from '../components/ContinueButton'

const paragraphs = [
  "I know I hurt you, and I am genuinely sorry. I don't want to brush it off, make excuses, or pretend it doesn't matter. Your feelings matter to me, and I wish I had handled things better.",
  "If I could rewind that moment, I would choose my words and actions differently. I can't undo what happened, but I can own it, learn from it, and try to be better.",
  "You deserve to be heard, understood, respected, and loved — not just through words, but through the way I treat you every day.",
]

export default function ApologySection({ onContinue }) {
  return (
    <SectionWrapper className="bg-gradient-to-b from-cream via-petal/30 to-cream">
      {/* Soft ambient glow */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-warm-pink/15 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative max-w-lg mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-4xl mb-2 block">💌</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary">
            I need to say this...
          </h2>
        </motion.div>

        <div className="space-y-6 mb-10">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className="font-sans text-base md:text-lg text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.6 + i * 0.7,
                ease: 'easeOut',
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <ContinueButton onClick={onContinue}>
            Continue ❤️
          </ContinueButton>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
