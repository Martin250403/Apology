import { motion } from 'framer-motion'

export default function SectionWrapper({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className={`relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 ${className}`}
    >
      {children}
    </motion.section>
  )
}
