import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Sparkle({ style }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 8,
        repeat: Infinity,
        repeatDelay: Math.random() * 6 + 3,
        ease: 'easeInOut',
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M5 0L5.9 3.1L9 3.5L6.5 5.8L7.2 9L5 7.4L2.8 9L3.5 5.8L1 3.5L4.1 3.1L5 0Z"
          fill="rgba(244, 165, 168, 0.6)"
        />
      </svg>
    </motion.div>
  )
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      },
    }))
    setSparkles(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} style={sparkle.style} />
      ))}
    </div>
  )
}
