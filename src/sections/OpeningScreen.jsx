import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import AnimatedHeart from '../components/AnimatedHeart'
import ContinueButton from '../components/ContinueButton'

export default function OpeningScreen({ onContinue }) {
  return (
    <SectionWrapper className="bg-gradient-to-b from-cream via-blush/20 to-cream">
      <motion.div
        className="flex flex-col items-center text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Soft glow behind heart */}
        <div className="relative mb-8">
          <motion.div
            className="absolute inset-0 bg-soft-red/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 160, height: 160, top: -40, left: -40 }}
          />
          <AnimatedHeart size={80} />
        </div>

        <motion.h1
          className="font-serif text-4xl md:text-5xl font-semibold text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hey, you... <span className="inline-block">🥺</span>
        </motion.h1>

        <motion.p
          className="font-sans text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I made something for you. And no, it's not an excuse... just me trying to make you smile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <ContinueButton onClick={onContinue}>
            Okay, tell me ❤️
          </ContinueButton>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
