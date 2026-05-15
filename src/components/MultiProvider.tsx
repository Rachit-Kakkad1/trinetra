import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Settings, Zap, Shield, Cpu } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const providers = [
  { name: 'Gemini 1.5 Pro', type: 'PRIMARY', icon: Zap, color: '#4285f4', dotColor: '#34a853' },
  { name: 'Claude 3.5 Sonnet', type: 'SECONDARY', icon: Shield, color: '#a855f7', dotColor: '#a855f7' },
  { name: 'Groq Llama 3', type: 'FALLBACK', icon: Cpu, color: '#ff5f1f', dotColor: '#ff5f1f' },
]

const features = [
  {
    title: 'Zero Latency',
    desc: 'Global edge points ensure agents respond in sub-200ms windows.',
    stat: '<200ms',
  },
  {
    title: 'Context Overflow',
    desc: 'Long-form JDs are automatically routed to 2M token window models.',
    stat: '2M tokens',
  },
  {
    title: 'Cost Optimized',
    desc: 'Heuristic engine picks the cheapest model that clears the quality bar.',
    stat: '73% saved',
  },
]

const MultiProvider = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-40 relative overflow-hidden"
      style={{
        backgroundColor: isDark ? '#070809' : '#f0f0eb',
        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
        transition: 'all 0.4s ease',
      }}
    >
      {/* Ambient radial */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-0"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(255,95,31,0.04) 0%, transparent 60%)'
            : 'radial-gradient(circle, rgba(255,95,31,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase mb-6 block"
          style={{ color: 'var(--accent)' }}
        >
          Multi-Model Engine
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          Always on.
          <br />
          <span className="italic" style={{ color: 'var(--accent)' }}>
            Never rate-limited.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg max-w-2xl mx-auto leading-relaxed mb-24"
          style={{ color: 'var(--text-secondary)' }}
        >
          Talent-OS uses an intelligent routing engine that rotates between providers based on latency,
          cost, and context length availability.
        </motion.p>

        {/* Provider Cards + Router Diagram */}
        <div className="relative flex flex-col items-center max-w-4xl mx-auto">
          {/* Provider cards row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-20 relative z-10">
            {providers.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl p-6 text-left relative overflow-hidden"
                  style={{
                    backgroundColor: isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.025)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = `${p.color}40`
                    ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px -12px ${p.color}25`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = isDark
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(0,0,0,0.06)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: p.color }}
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${p.color}15`, border: `1px solid ${p.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: p.color }} />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                        {p.name}
                      </div>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div
                    className="h-1 rounded-full overflow-hidden mb-3"
                    style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
                  >
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ delay: 0.8 + i * 0.3, duration: 1.5, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: p.color }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase"
                      style={{ color: p.type === 'PRIMARY' ? 'var(--accent)' : 'var(--text-muted)' }}
                    >
                      {p.type}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: p.dotColor }}
                      />
                      <span className="text-[9px] font-mono" style={{ color: 'var(--text-muted)' }}>
                        online
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* SVG Connector Lines */}
          <div className="absolute top-[calc(100%-200px)] left-1/2 -translate-x-1/2 w-[600px] h-32 pointer-events-none hidden md:block">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 600 128">
              <motion.path
                d="M100 0 L300 120 M300 0 L300 120 M500 0 L300 120"
                fill="none"
                stroke={isDark ? 'rgba(255,95,31,0.2)' : 'rgba(255,95,31,0.15)'}
                strokeWidth="1.5"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* Router Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-4"
          >
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-default"
              style={{
                backgroundColor: isDark ? '#0f0f0f' : '#e8e8e3',
                border: `2px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                boxShadow: isDark ? '0 0 60px rgba(255,95,31,0.15)' : '0 0 40px rgba(255,95,31,0.08)',
                transition: 'all 0.4s ease',
              }}
            >
              <Settings
                className="w-8 h-8 group-hover:rotate-90 transition-transform duration-700"
                style={{ color: 'var(--text-primary)' }}
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-1">
              <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>
                Multi-Model Router v2.4
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                Automatic Fallback Enabled
              </span>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div
          className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-5 pt-16"
          style={{
            borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
          }}
        >
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="text-left rounded-2xl p-6"
              style={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'}`,
              }}
            >
              <div className="font-mono font-bold text-2xl mb-3" style={{ color: 'var(--accent)' }}>
                {item.stat}
              </div>
              <h4 className="font-serif font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MultiProvider
