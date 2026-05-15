import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Search, Target, Scissors, VenetianMask, Network, Mic, Handshake, Rocket } from 'lucide-react'

const agents = [
  {
    name: 'JobScout',
    model: 'GEMINI FLASH',
    icon: Search,
    desc: 'Always-on scanner hitting 45+ job portals every 2 minutes.',
    gradient: ['#3b82f6', '#60a5fa'],
  },
  {
    name: 'FitScorer',
    model: 'GEMINI PRO',
    icon: Target,
    desc: '10-dimension match analysis using specialized RAG on your career.',
    gradient: ['#ff5f1f', '#ff8f5a'],
  },
  {
    name: 'CVTailor',
    model: 'CLAUDE 3.5',
    icon: Scissors,
    desc: 'Surgical resume edits that mirror JD intent without losing your soul.',
    gradient: ['#a855f7', '#c084fc'],
  },
  {
    name: 'CultureAnalyst',
    model: 'GEMINI PRO',
    icon: VenetianMask,
    desc: 'Synthesizes Glassdoor, Reddit, and LinkedIn to find the real vibe.',
    gradient: ['#f97316', '#fb923c'],
  },
  {
    name: 'NetworkMapper',
    model: 'GEMINI',
    icon: Network,
    desc: 'Finds the shortest path to a referral and drafts the perfect ping.',
    gradient: ['#ec4899', '#f472b6'],
  },
  {
    name: 'VoiceCoach',
    model: 'GEMINI LIVE',
    icon: Mic,
    desc: 'Live voice roleplay that critiques your tone and technical depth.',
    gradient: ['#22c55e', '#4ade80'],
    live: true,
  },
  {
    name: 'NegotiationSim',
    model: 'CLAUDE 3.5',
    icon: Handshake,
    desc: 'Adversarial AI that helps you squeeze every dollar out of the offer.',
    gradient: ['#eab308', '#facc15'],
  },
  {
    name: 'ApplyPilot',
    model: 'PLAYWRIGHT',
    icon: Rocket,
    desc: 'Autonomous browser agent that fills forms and handles bot checks.',
    gradient: ['#ef4444', '#f87171'],
    isNew: true,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const AgentsGrid = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="agents"
      className="py-32 relative overflow-hidden"
      style={{
        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
        transition: 'border-color 0.4s ease',
      }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -z-10 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(255,95,31,0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,95,31,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-5 mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            The Roster
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-bold text-5xl md:text-7xl tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            8 agents. <span className="italic" style={{ color: 'var(--accent)' }}>One mission.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg max-w-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Each agent is purpose-built, model-optimized, and runs autonomously in your pipeline.
          </motion.p>
        </div>

        {/* Agents Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={cardVariants}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.025)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                  transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
                  el.style.borderColor = `${agent.gradient[0]}33`
                  el.style.boxShadow = `0 8px 40px -12px ${agent.gradient[0]}30`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.025)'
                  el.style.borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Hover gradient line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(to right, ${agent.gradient[0]}, ${agent.gradient[1]})` }}
                />

                <div className="p-7 flex flex-col h-full min-h-[240px]">
                  {/* Top row: icon + badges */}
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400"
                      style={{
                        background: `linear-gradient(135deg, ${agent.gradient[0]}25, ${agent.gradient[1]}15)`,
                        border: `1px solid ${agent.gradient[0]}20`,
                        color: agent.gradient[0]
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="text-[8px] font-mono font-bold px-2 py-1 rounded-md tracking-widest uppercase"
                        style={{
                          backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                          color: 'var(--text-muted)',
                        }}
                      >
                        {agent.model}
                      </span>
                      {agent.live && (
                        <div
                          className="flex items-center gap-1.5 px-2 py-0.5 rounded-md"
                          style={{
                            backgroundColor: 'rgba(34,197,94,0.1)',
                            border: '1px solid rgba(34,197,94,0.2)',
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[8px] font-mono font-bold text-green-500 uppercase tracking-widest">
                            LIVE
                          </span>
                        </div>
                      )}
                      {agent.isNew && (
                        <span
                          className="text-[8px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-widest text-white"
                          style={{ backgroundColor: agent.gradient[0] }}
                        >
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Agent name */}
                  <h3
                    className="font-serif font-bold text-xl mb-3 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={() => {}}
                  >
                    {agent.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {agent.desc}
                  </p>

                  {/* Bottom action */}
                  <div className="mt-auto flex items-center gap-2">
                    <span
                      className="text-[10px] font-mono font-bold tracking-wider transition-colors duration-300"
                      style={{ color: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)' }}
                    >
                      VIEW_PROTOCOL
                    </span>
                    <span
                      className="text-[10px] group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)' }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AgentsGrid
