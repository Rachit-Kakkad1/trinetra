import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Search, Zap, Scissors, Rocket, IndianRupee } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Scan',
    desc: 'Agents hit 45+ portals, GitHub, and Discord to find unlisted roles.',
    icon: Search,
    detail: '45+ sources · every 2 min',
  },
  {
    num: '02',
    title: 'Score',
    desc: "FitScorer runs 10D analysis to filter for your 'A' grade matches.",
    icon: Zap,
    detail: '10 dimensions · RAG-powered',
  },
  {
    num: '03',
    title: 'Tailor',
    desc: 'CVTailor surgically rewrites your profile for specific JD signals.',
    icon: Scissors,
    detail: 'JD-matched · ATS-optimized',
  },
  {
    num: '04',
    title: 'Apply',
    desc: 'ApplyPilot autonomously handles the submission and bot checks.',
    icon: Rocket,
    detail: 'Playwright · anti-bot',
  },
  {
    num: '05',
    title: 'Negotiate',
    desc: 'NegotiationSim roleplays the offer close to maximize TC.',
    icon: IndianRupee,
    detail: 'adversarial AI · TC max',
  },
]

/* ── Animated counter hook ── */
function useCounter(target: number, trigger: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const id = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(id)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(id)
  }, [target, trigger, duration])
  return count
}

const Pipeline = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Animated connecting line width driven by scroll
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.5], ['0%', '100%'])

  // Active step highlight driven by scroll
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const step = Math.floor(v * steps.length * 1.5)
      setActiveStep(Math.min(step, steps.length - 1))
    })
  }, [scrollYProgress])

  const statsInView = useInView(sectionRef, { once: true, margin: '-200px' })
  const stat1 = useCounter(45, statsInView)
  const stat2 = useCounter(10, statsInView)
  const stat3 = useCounter(98, statsInView)

  return (
    <section
      ref={sectionRef}
      id="pipeline"
      className="py-32 relative overflow-hidden"
      style={{
        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
        transition: 'border-color 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase mb-5 block"
            style={{ color: 'var(--accent)' }}
          >
            The Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-bold text-5xl md:text-7xl tracking-tight leading-[1.1]"
            style={{ color: 'var(--text-primary)' }}
          >
            From discovery to offer.
            <br />
            <span className="italic" style={{ color: 'var(--accent)' }}>
              Automated.
            </span>
          </motion.h2>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center gap-10 md:gap-20 mb-24"
        >
          {[
            { value: stat1, suffix: '+', label: 'Portals Scanned' },
            { value: stat2, suffix: 'D', label: 'Match Dimensions' },
            { value: stat3, suffix: '%', label: 'Automation Rate' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono font-bold text-3xl md:text-4xl" style={{ color: 'var(--accent)' }}>
                {s.value}
                <span className="text-lg">{s.suffix}</span>
              </div>
              <div className="text-[10px] font-mono tracking-widest uppercase mt-1" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pipeline Steps */}
        <div ref={gridRef} className="relative px-4">
          {/* Connecting line background (desktop) */}
          <div
            className="absolute top-10 left-[5%] right-[5%] h-[2px] hidden lg:block"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            }}
          />
          {/* Animated progress line */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-10 left-[5%] h-[2px] hidden lg:block z-10"
          >
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(to right, var(--accent), #ff8f5a, var(--accent))`,
                boxShadow: '0 0 12px var(--accent-glow)',
              }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-16">
            {steps.map((step, i) => {
              const isActive = i <= activeStep
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Step circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-8 transition-all duration-500 relative"
                    style={{
                      backgroundColor: isActive
                        ? 'var(--accent)'
                        : isDark
                        ? 'rgba(255,255,255,0.04)'
                        : 'rgba(0,0,0,0.04)',
                      border: `2px solid ${
                        isActive
                          ? 'var(--accent)'
                          : isDark
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.08)'
                      }`,
                      boxShadow: isActive ? '0 0 30px var(--accent-glow)' : 'none',
                      transition: 'all 0.5s ease',
                    }}
                  >
                    <span
                      className="transition-transform duration-300 group-hover:scale-125"
                      style={{
                        color: isActive ? '#000' : 'var(--text-muted)',
                        filter: isActive ? 'none' : 'grayscale(0.5)',
                      }}
                    >
                      <Icon className="w-8 h-8" />
                    </span>

                    {/* Step number badge */}
                    <span
                      className="absolute -top-1 -right-1 text-[9px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: isDark ? '#1f1f1f' : '#e8e8e3',
                        color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                        transition: 'color 0.5s ease',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif font-bold text-2xl mb-3 transition-colors duration-500"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4 max-w-[220px]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {step.desc}
                  </p>

                  {/* Detail tag */}
                  <span
                    className="text-[9px] font-mono tracking-widest uppercase px-2 py-1 rounded-md"
                    style={{
                      backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {step.detail}
                  </span>

                  {/* Mobile connector line */}
                  <div
                    className="absolute top-10 left-[-12px] w-[2px] h-full lg:hidden opacity-10"
                    style={{
                      background: `linear-gradient(to bottom, var(--accent), transparent)`,
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pipeline
