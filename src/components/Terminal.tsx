import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Terminal = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 1.6 },
    },
  }

  const line = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  }

  const rows = [
    { score: '4.4', company: 'Prevail', title: 'Mid-Level Full Stack Developer (Ruby on Rails)' },
    { score: '4.4', company: 'VC Lab (Decile Gr...', title: 'Senior Ruby on Rails Engineer (Remote)' },
    { score: '4.2', company: 'Doximity', title: 'Software Engineer (Ruby/Rails), Advertising Platform' },
    { score: '4.1', company: 'Corporate Tools LLC', title: 'Senior Software Engineer (Ruby on Rails)' },
    { score: '4.0', company: 'Kooth Digital Health', title: 'Senior Full Stack Engineer I' },
  ]

  const evalRows = [
    { score: '4.0', company: 'Mudflap', title: 'Software Engineer, Ruby on Rails' },
    { score: '3.9', company: 'Maxima Health', title: 'Senior Fullstack Engineer (Remote)' },
  ]

  const bg = isDark ? '#0f0f0f' : '#f8f8f5'
  const headerBg = isDark ? '#1a1a1a' : '#eee'
  const textDim = isDark ? '#8a8a8a' : '#999'
  const textBright = isDark ? 'rgba(255,255,255,0.9)' : '#333'
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'

  return (
    <div
      className="relative w-full max-w-xl rounded-xl overflow-hidden font-mono text-[11px] leading-relaxed flex flex-col h-[320px]"
      style={{
        backgroundColor: bg,
        border: `1px solid ${borderColor}`,
        boxShadow: isDark ? '0 20px 50px -12px rgba(0,0,0,0.6)' : '0 20px 50px -12px rgba(0,0,0,0.1)',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-3 h-8 shrink-0"
        style={{
          backgroundColor: headerBg,
          borderBottom: `1px solid ${borderColor}`,
          transition: 'all 0.4s ease',
        }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
      </div>

      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2 shrink-0"
        style={{ borderBottom: `1px solid ${borderColor}`, transition: 'all 0.4s ease' }}
      >
        <span className="text-[#64b5f6] font-semibold tracking-wide">TALENT-OS PIPELINE</span>
        <div
          className="flex items-center rounded px-2 py-0.5 text-[10px] w-48 gap-1.5"
          style={{
            backgroundColor: isDark ? '#1a1a1a' : '#e8e8e3',
            border: `1px solid ${borderColor}`,
            color: textDim,
            transition: 'all 0.4s ease',
          }}
        >
          <Search className="w-3 h-3 flex-shrink-0" />
          <span>Search sessions, agents...</span>
        </div>
      </div>

      {/* Tabs */}
      <div
        className="flex items-center gap-3 px-4 py-1.5 text-[10px] font-semibold shrink-0"
        style={{ borderBottom: `1px solid ${borderColor}`, color: textDim, transition: 'all 0.4s ease' }}
      >
        <span className="text-[#64b5f6] relative pb-1">
          ALL (32)
          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#64b5f6] rounded-full" />
        </span>
        <span>EVALUATED (20)</span>
        <span>APPLIED (5)</span>
        <span>INTERVIEW (0)</span>
        <span>TOP ≥4 (12)</span>
        <span>SKIP (0)</span>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="px-4 py-3 overflow-hidden flex-1"
        style={{ color: textDim }}
      >
        <motion.div variants={line} className="mb-2">
          <span className="text-[#64b5f6]">Applied:5</span> Evaluated:20{' '}
          <span style={{ color: textDim }}>Rejected:2 Discarded:5</span>
          <br />
          <span style={{ color: textDim }}>[Sort: score] [View: grouped] 32 shown</span>
        </motion.div>

        <motion.div variants={line} className="mb-1" style={{ color: textDim }}>
          -- APPLIED (5) -------------------------------------------------
        </motion.div>

        <div className="space-y-px">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              variants={line}
              className="grid grid-cols-[28px_1fr_2fr] gap-1.5 px-1 -mx-1 rounded hover:bg-white/5 transition-colors"
            >
              <span className="text-[#27c93f]">{r.score}</span>
              <span style={{ color: textBright }} className="truncate">{r.company}</span>
              <span style={{ color: textDim }} className="truncate">{r.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div variants={line} className="mt-2 mb-1" style={{ color: textDim }}>
          -- EVALUATED (20) ----------------------------------------------
        </motion.div>

        <div className="space-y-px opacity-60">
          {evalRows.map((r, i) => (
            <motion.div
              key={i}
              variants={line}
              className="grid grid-cols-[28px_1fr_2fr] gap-1.5 px-1 -mx-1 rounded hover:bg-white/5 transition-colors"
            >
              <span className="text-[#27c93f]">{r.score}</span>
              <span style={{ color: textBright }} className="truncate">{r.company}</span>
              <span style={{ color: textDim }} className="truncate">{r.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Cursor */}
        <motion.div variants={line}>
          <div className="w-2 h-3 mt-1 animate-cursor-blink" style={{ backgroundColor: 'var(--accent)' }} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Terminal
