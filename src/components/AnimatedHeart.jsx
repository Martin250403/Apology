import { motion } from 'framer-motion'

export default function AnimatedHeart({ size = 80, className = '' }) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{
        scale: [1, 1.15, 1, 1.12, 1],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8757a" />
            <stop offset="50%" stopColor="#d4727a" />
            <stop offset="100%" stopColor="#f4a5a8" />
          </linearGradient>
          <filter id="heartGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="url(#heartGrad)"
          filter="url(#heartGlow)"
        />
      </svg>
    </motion.div>
  )
}
