import { motion } from 'framer-motion'

export default function ContinueButton({
  onClick,
  children,
  variant = 'primary',
  className = '',
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm md:text-base tracking-wide transition-colors duration-300 cursor-pointer select-none overflow-hidden whitespace-nowrap'

  const variants = {
    primary:
      'bg-soft-red text-white shadow-lg shadow-soft-red/25 hover:bg-rose hover:shadow-xl hover:shadow-soft-red/35',
    secondary:
      'bg-white/90 text-text-secondary border border-blush-dark/60 shadow-md shadow-blush-dark/10 hover:bg-blush/50 hover:text-text-primary hover:shadow-lg',
    ghost:
      'bg-transparent text-text-secondary hover:text-soft-red hover:bg-blush/30',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
