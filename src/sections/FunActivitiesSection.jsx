import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import ContinueButton from '../components/ContinueButton'

const heartTargets = [
  { id: 1, x: '16%', y: '24%', note: "Your laugh is literally my favorite sound 🎶" },
  { id: 2, x: '74%', y: '20%', note: "10/10 would share my last fry with you 🍟" },
  { id: 3, x: '45%', y: '48%', note: "You make every boring day feel special ✨" },
  { id: 4, x: '20%', y: '72%', note: "Still crazy about you. Not even sorry 😌" },
  { id: 5, x: '78%', y: '68%', note: "You're unfairly cute, honestly 🥺" },
  { id: 6, x: '50%', y: '18%', note: "I promise to listen better every day 💛" },
]

const coupons = [
  { id: 'movie', emoji: '🍕', title: 'Noshta date', sub: 'You pick a date' },
  { id: 'massage', emoji: '🍦', title: 'Ice Cream', sub: 'But ipothaiku vena.....' },
  { id: 'treat', emoji: '🍦', title: 'Dessert ', sub: 'Whenever you crave it, my treat' },

]

const hugReactions = ['🤗', '❤️', '🥰', '💐', '✨', '🤍']

export default function FunActivitiesSection({ onContinue }) {
  const [activeTab, setActiveTab] = useState('pop')
  const [poppedIds, setPoppedIds] = useState([])
  const [lastNote, setLastNote] = useState('Tap the hearts to collect sweet notes! 💕')
  const [claimedCoupons, setClaimedCoupons] = useState([])
  const [hugCount, setHugCount] = useState(0)
  const [bursts, setBursts] = useState([])

  const handlePopHeart = (target) => {
    if (!poppedIds.includes(target.id)) {
      setPoppedIds((prev) => [...prev, target.id])
    }
    setLastNote(target.note)
  }

  const resetHearts = () => {
    setPoppedIds([])
    setLastNote('Tap the hearts to collect sweet notes! 💕')
  }

  const toggleCoupon = (id) => {
    setClaimedCoupons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleHug = () => {
    setHugCount((prev) => prev + 1)
    const id = Date.now() + Math.random()
    const emoji = hugReactions[Math.floor(Math.random() * hugReactions.length)]
    const offsetX = Math.floor(Math.random() * 120) - 60
    setBursts((prev) => [...prev.slice(-8), { id, emoji, offsetX }])
  }

  const smilePercent = Math.round((poppedIds.length / heartTargets.length) * 100)

  const tabs = [
    { id: 'pop', label: '💖 Pop Hearts' },
    { id: 'coupons', label: '🎟️ Peace Coupons' },
    { id: 'hugs', label: '🤗 Hug Meter' },
  ]

  return (
    <SectionWrapper className="bg-gradient-to-b from-cream via-blush/20 to-cream">
      <motion.div
        className="relative w-full max-w-xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-4xl mb-2 block">🎀</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-2">
            A few little things to make you smile
          </h2>
          <p className="text-text-muted text-sm">
            Pick an activity — no rush, just play around ✨
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-soft-red text-white shadow-md shadow-soft-red/25'
                    : 'bg-white/80 text-text-secondary border border-blush-dark/40 hover:bg-blush/40'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Activity Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-blush-dark/15 border border-blush/50 p-6 md:p-8 mb-8">
          <AnimatePresence mode="wait">
            {activeTab === 'pop' && (
              <motion.div
                key="pop"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {/* Smile Meter */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs font-medium text-text-secondary mb-1.5 px-1">
                    <span>Smile Meter</span>
                    <span>{smilePercent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-blush/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-soft-red-light to-soft-red rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${smilePercent}%` }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Play Arena */}
                <div className="relative h-56 rounded-2xl bg-gradient-to-br from-cream via-petal/30 to-lavender/25 border border-blush/40 overflow-hidden mb-4">
                  {heartTargets.map((target, idx) => {
                    const isPopped = poppedIds.includes(target.id)
                    return (
                      <motion.button
                        key={target.id}
                        onClick={() => handlePopHeart(target)}
                        style={{ left: target.x, top: target.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none focus:outline-none"
                        animate={
                          isPopped
                            ? { scale: [1, 1.35, 0], opacity: [1, 1, 0] }
                            : { y: [0, -8, 0], rotate: [-4, 4, -4] }
                        }
                        transition={
                          isPopped
                            ? { duration: 0.35 }
                            : { duration: 2.2 + idx * 0.25, repeat: Infinity, ease: 'easeInOut' }
                        }
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-3xl md:text-4xl drop-shadow-sm">
                          {idx % 2 === 0 ? '💖' : '💗'}
                        </span>
                      </motion.button>
                    )
                  })}

                  {poppedIds.length === heartTargets.length && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-white/75 backdrop-blur-xs p-4"
                    >
                      <p className="font-serif text-xl font-semibold text-text-primary mb-2">
                        100% Smile Unlocked! 🎉
                      </p>
                      <p className="text-sm text-text-secondary mb-4">
                        You popped every single heart!
                      </p>
                      <button
                        onClick={resetHearts}
                        className="px-4 py-2 rounded-full bg-blush text-rose text-xs font-semibold hover:bg-blush-dark/50 transition-colors cursor-pointer"
                      >
                        Play again ↺
                      </button>
                    </motion.div>
                  )}
                </div>

                <p className="font-handwritten text-xl text-text-primary min-h-[2rem]">
                  {lastNote}
                </p>
              </motion.div>
            )}

            {activeTab === 'coupons' && (
              <motion.div
                key="coupons"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-text-secondary mb-4">
                  Tap any peace offering to claim it (redeemable immediately 😌):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  {coupons.map((coupon) => {
                    const claimed = claimedCoupons.includes(coupon.id)
                    return (
                      <motion.button
                        key={coupon.id}
                        onClick={() => toggleCoupon(coupon.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative p-4 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-left ${
                          claimed
                            ? 'bg-blush/40 border-soft-red/60 shadow-sm'
                            : 'bg-cream/60 border-blush-dark/50 hover:border-soft-red/40'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{coupon.emoji}</span>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm text-text-primary">
                              {coupon.title}
                            </h3>
                            <p className="text-xs text-text-muted mt-0.5">
                              {coupon.sub}
                            </p>
                          </div>
                        </div>
                        {claimed && (
                          <motion.span
                            initial={{ scale: 0, rotate: -12 }}
                            animate={{ scale: 1, rotate: -6 }}
                            className="inline-block mt-2.5 px-2.5 py-0.5 rounded-full bg-soft-red text-white text-[11px] font-semibold tracking-wide"
                          >
                            CLAIMED ✓
                          </motion.span>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'hugs' && (
              <motion.div
                key="hugs"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="py-4 flex flex-col items-center"
              >
                <p className="text-sm text-text-secondary mb-6">
                  Tap the button whenever you need a virtual squeeze:
                </p>

                <div className="relative mb-6">
                  {bursts.map((b) => (
                    <motion.span
                      key={b.id}
                      initial={{ opacity: 1, y: 0, x: 0, scale: 0.8 }}
                      animate={{ opacity: 0, y: -90, x: b.offsetX, scale: 1.4 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none text-2xl"
                    >
                      {b.emoji}
                    </motion.span>
                  ))}

                  <motion.button
                    onClick={handleHug}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-soft-red-light to-soft-red text-white shadow-xl shadow-soft-red/30 flex flex-col items-center justify-center cursor-pointer select-none"
                  >
                    <span className="text-4xl mb-1">🤗</span>
                    <span className="text-xs font-semibold tracking-wide">SEND HUG</span>
                  </motion.button>
                </div>

                <p className="font-handwritten text-2xl text-text-primary">
                  {hugCount === 0
                    ? '0 hugs sent so far 🥺'
                    : `${hugCount} ${hugCount === 1 ? 'hug' : 'hugs'} sent — still not enough ❤️`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ContinueButton onClick={onContinue}>
          Read my letter 💌
        </ContinueButton>
      </motion.div>
    </SectionWrapper>
  )
}
