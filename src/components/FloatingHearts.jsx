import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const heartColors = [
  'rgba(232, 117, 122, 0.3)',
  'rgba(244, 165, 168, 0.25)',
  'rgba(247, 197, 197, 0.3)',
  'rgba(212, 114, 122, 0.2)',
  'rgba(232, 218, 245, 0.3)',
  'rgba(252, 228, 236, 0.35)',
]

const heartSizes = [14, 18, 22, 26, 12, 16, 20]

function Heart({ delay, duration, startX, size, color }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      initial={{ 
        x: startX, 
        y: '110vh', 
        opacity: 0,
        rotate: Math.random() * 40 - 20,
        scale: 0.5,
      }}
      animate={{
        y: '-10vh',
        opacity: [0, 0.7, 0.7, 0],
        rotate: [null, Math.random() * 60 - 30],
        scale: [0.5, 1, 1, 0.8],
        x: [startX, startX + Math.random() * 80 - 40, startX + Math.random() * 60 - 30],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ fontSize: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  )
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 12,
      duration: 12 + Math.random() * 10,
      startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
      size: heartSizes[i % heartSizes.length],
      color: heartColors[i % heartColors.length],
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  )
}
