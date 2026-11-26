import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import FloatingHearts from './components/FloatingHearts'
import Sparkles from './components/Sparkles'
import OpeningScreen from './sections/OpeningScreen'
import ApologySection from './sections/ApologySection'
import FunFactsSection from './sections/FunFactsSection'
import FunActivitiesSection from './sections/FunActivitiesSection'
import LetterSection from './sections/LetterSection'
import QuestionSection from './sections/QuestionSection'
import FinalScreen from './sections/FinalScreen'

function App() {
  const [currentSection, setCurrentSection] = useState(0)

  const totalSections = 7

  const goToNext = () => {
    setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1))
  }

  const sections = [
    <OpeningScreen key="opening" onContinue={goToNext} />,
    <ApologySection key="apology" onContinue={goToNext} />,
    <FunFactsSection key="funfacts" onContinue={goToNext} />,
    <FunActivitiesSection key="activities" onContinue={goToNext} />,
    <LetterSection key="letter" onContinue={goToNext} />,
    <QuestionSection key="question" onContinue={goToNext} />,
    <FinalScreen key="final" />,
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-cream">
      <FloatingHearts />
      <Sparkles />

      {/* Subtle progress dots */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blush/40 shadow-sm">
        {sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => idx <= currentSection && setCurrentSection(idx)}
            aria-label={`Step ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSection
                ? 'w-6 bg-soft-red'
                : idx < currentSection
                  ? 'w-2 bg-soft-red-light cursor-pointer hover:bg-soft-red'
                  : 'w-2 bg-blush-dark/40 cursor-default'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {sections[currentSection]}
      </AnimatePresence>
    </div>
  )
}

export default App
