import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

/* ── Scramble text hook ── */
function useScramble(text: string, trigger: boolean, speed = 30) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*'
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!trigger) return
    let iteration = 0
    const id = setInterval(() => {
      setOutput(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < iteration) return text[i]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      iteration += 0.5
      if (iteration >= text.length) {
        clearInterval(id)
        setOutput(text)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, trigger])

  return { output, done }
}

const Quote = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef(null)
  const founderRef = useRef(null)
  const founderInView = useInView(founderRef, { once: true, margin: '-50px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Word-by-word reveal driven by scroll
  const line1Words = ['"Companies', 'use', 'AI', 'to', 'filter', 'candidates.']
  const line2Words = ['I', 'gave', 'candidates', 'AI']
  const line3Words = ['to', 'choose', 'companies."']
  const allWords = [...line1Words, ...line2Words, ...line3Words]
  const totalWords = allWords.length

  // Scramble effects for founder info
  const { output: nameText, done: nameDone } = useScramble('Rachit Kakkad', founderInView, 25)
  const { output: roleText } = useScramble('FOUNDER & CREATOR', nameDone, 20)
  const { output: locationText } = useScramble('Gujarat, India', nameDone, 25)

  return (
    <section ref={sectionRef} className="relative py-8">
      {/* Sticky scroll container */}
      <div className="h-[250vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full -z-10 pointer-events-none"
            style={{
              background: isDark
                ? 'radial-gradient(circle, rgba(255,95,31,0.08) 0%, transparent 60%)'
                : 'radial-gradient(circle, rgba(255,95,31,0.05) 0%, transparent 60%)',
            }}
          />

          <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
            {/* Top decorative line */}
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
              className="w-px h-16 mb-10"
            >
              <div
                className="w-full h-full"
                style={{
                  background: isDark
                    ? 'linear-gradient(to bottom, transparent, rgba(255,95,31,0.4))'
                    : 'linear-gradient(to bottom, transparent, rgba(255,95,31,0.25))',
                }}
              />
            </motion.div>

            {/* Quote with scroll-driven word reveal */}
            <div className="font-serif italic font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight">
              {/* Line 1 */}
              <div className="mb-2">
                {line1Words.map((word, i) => {
                  const start = (i / totalWords) * 0.5 + 0.05
                  const end = start + 0.04
                  return (
                    <ScrollWord
                      key={`l1-${i}`}
                      word={word}
                      scrollYProgress={scrollYProgress}
                      start={start}
                      end={end}
                      color="var(--text-primary)"
                    />
                  )
                })}
              </div>

              {/* Line 2 — accent */}
              <div className="mb-2">
                {line2Words.map((word, i) => {
                  const globalIndex = line1Words.length + i
                  const start = (globalIndex / totalWords) * 0.5 + 0.05
                  const end = start + 0.04
                  return (
                    <ScrollWord
                      key={`l2-${i}`}
                      word={word}
                      scrollYProgress={scrollYProgress}
                      start={start}
                      end={end}
                      color="var(--accent)"
                      className="not-italic font-extrabold"
                      glow
                    />
                  )
                })}
              </div>

              {/* Line 3 */}
              <div>
                {line3Words.map((word, i) => {
                  const globalIndex = line1Words.length + line2Words.length + i
                  const start = (globalIndex / totalWords) * 0.5 + 0.05
                  const end = start + 0.04
                  return (
                    <ScrollWord
                      key={`l3-${i}`}
                      word={word}
                      scrollYProgress={scrollYProgress}
                      start={start}
                      end={end}
                      color="var(--text-primary)"
                    />
                  )
                })}
              </div>
            </div>

            {/* Founder card */}
            <div ref={founderRef} className="mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="flex items-center gap-5 px-6 py-4 rounded-2xl"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                  transition: 'all 0.4s ease',
                }}
              >
                {/* Avatar with gradient ring */}
                <div
                  className="w-14 h-14 rounded-full p-[2px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--accent), #ff8f5a, #ffd700)' }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center text-xl font-bold font-serif"
                    style={{
                      backgroundColor: isDark ? '#0a0a0a' : '#f5f5f0',
                      color: 'var(--accent)',
                      transition: 'background-color 0.4s ease',
                    }}
                  >
                    RK
                  </div>
                </div>

                <div className="text-left">
                  <div
                    className="font-mono font-bold text-lg tracking-tight"
                    style={{ color: 'var(--text-primary)', minWidth: '150px' }}
                  >
                    {nameText || '\u00A0'}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.15em] font-bold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {roleText || '\u00A0'}
                    </span>
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      · {locationText || '\u00A0'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom decorative line */}
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1]) }}
              className="w-px h-16 mt-10"
            >
              <div
                className="w-full h-full"
                style={{
                  background: isDark
                    ? 'linear-gradient(to top, transparent, rgba(255,95,31,0.4))'
                    : 'linear-gradient(to top, transparent, rgba(255,95,31,0.25))',
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Individual scroll-driven word component ── */
function ScrollWord({
  word,
  scrollYProgress,
  start,
  end,
  color,
  className = '',
  glow = false,
}: {
  word: string
  scrollYProgress: any
  start: number
  end: number
  color: string
  className?: string
  glow?: boolean
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])
  const y = useTransform(scrollYProgress, [start, end], [8, 0])
  const blur = useTransform(scrollYProgress, [start, end], [4, 0])

  return (
    <motion.span
      style={{
        opacity,
        y,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        color,
        textShadow: glow ? '0 0 30px var(--accent-glow)' : 'none',
      }}
      className={`inline-block mr-[0.3em] ${className}`}
    >
      {word}
    </motion.span>
  )
}

export default Quote
