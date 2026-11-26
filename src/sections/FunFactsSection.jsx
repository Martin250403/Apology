import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import ContinueButton from '../components/ContinueButton'

const facts = [
  "You're still my favourite human. Unfortunately, this is scientifically unchangeable. 🔬",
  "I'd still pick you even if you stole all my fries. (Okay, I'd complain first.) 🍟",
  "My brain has approximately 1 million thoughts, and somehow 999,999 of them are you. 🧠",
  "You're cute. This is a serious problem. I have no cure. 💊",
  'I know I can be an idiot sometimes. I am currently applying for the position of "Boyfriend who does better." 📝',
  "I would fight a goose for you. And geese are terrifying. 🪿",
  "You make me want to be annoyingly romantic and I'm not even sorry about it. 🌹",
  "If loving you was a job, I'd be employee of the month. Every month. 🏆",
  "I looked up 'perfect' in the dictionary and it redirected me to your name. Well, not really. But it should. 📖",
  "You're the reason I smile at my phone like an idiot. People on the bus are concerned. 📱",
]

export default function FunFactsSection({ onContinue }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const showNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % facts.length)
  }

  return (
    <SectionWrapper className="bg-gradient-to-b from-cream via-lavender/20 to-cream">
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
          <span className="text-4xl mb-2 block">✨</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-2">
            Some important facts about us...
          </h2>
          <p className="text-text-muted text-sm">(Scientifically verified by my heart)</p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="relative mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg shadow-blush-dark/15 border border-blush/40 p-8 md:p-10 min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                className="font-handwritten text-xl md:text-2xl text-text-primary leading-relaxed"
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {facts[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Card count */}
          <div className="flex justify-center gap-1.5 mt-4">
            {facts.slice(0, 5).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i === currentIndex % 5 ? 'bg-soft-red' : 'bg-blush-dark/40'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <ContinueButton onClick={showNext} variant="secondary">
            More reasons to love you 💌
          </ContinueButton>
          <ContinueButton onClick={onContinue}>
            Continue ❤️
          </ContinueButton>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
