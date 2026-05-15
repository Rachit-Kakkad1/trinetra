import { motion, useScroll, useTransform } from 'framer-motion'
import Terminal from './Terminal'
import { useRef } from 'react'
import { useTheme } from '../hooks/useTheme'

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const Hero = () => {
  const { theme } = useTheme()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0])
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  const line1Words = 'You got the job,'.split(' ')
  const line2Words = "and it didn't cost you a".split(' ')

  const isDark = theme === 'dark'

  return (
    <section ref={sectionRef} className="relative h-[140vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 pt-14">
        <motion.div
          style={{ scale, opacity, y: cardY }}
          className="relative w-full max-w-[1400px] rounded-3xl overflow-hidden will-change-transform"
        >
          {/* ── Card with theme-aware background ── */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              backgroundColor: isDark ? '#131210' : '#eae8e0',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              transition: 'background-color 0.4s ease, border-color 0.4s ease',
            }}
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isDark
                  ? 'radial-gradient(ellipse at 30% 40%, rgba(60,30,5,0.6) 0%, transparent 60%)'
                  : 'radial-gradient(ellipse at 30% 40%, rgba(255,140,60,0.08) 0%, transparent 60%)',
                transition: 'background 0.4s ease',
              }}
            />

            {/* Halftone circle */}
            <div
              className="absolute right-[-5%] top-[-5%] w-[550px] h-[550px] lg:w-[650px] lg:h-[650px] rounded-full halftone-circle pointer-events-none"
              style={{
                opacity: isDark ? 0.7 : 0.15,
                maskImage: 'radial-gradient(circle, black 35%, transparent 65%)',
                WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 65%)',
                transition: 'opacity 0.4s ease',
              }}
            />

            {/* ── Content Grid ── */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 px-8 sm:px-12 lg:px-20 py-16 lg:py-24 items-center min-h-[80vh]">
              {/* Left: Text */}
              <div className="flex flex-col items-start max-w-lg z-10">
                {/* Line 1 */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] tracking-tight mb-2">
                  <span className="flex flex-wrap gap-x-[0.3em]">
                    {line1Words.map((word, i) => (
                      <motion.span
                        key={word + i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={wordVariants}
                        className="inline-block"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                </h1>

                {/* Line 2 */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] tracking-tight mb-10">
                  <span className="flex flex-wrap gap-x-[0.3em]">
                    {line2Words.map((word, i) => (
                      <motion.span
                        key={word + i}
                        custom={i + line1Words.length}
                        initial="hidden"
                        animate="visible"
                        variants={wordVariants}
                        className="inline-block"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {word}
                      </motion.span>
                    ))}
                    <motion.span
                      custom={line1Words.length + line2Words.length}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                      className="inline-block italic glow-text"
                      style={{ color: 'var(--accent)' }}
                    >
                      thing.
                    </motion.span>
                  </span>
                </h1>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                  className="space-y-1 mb-10"
                >
                  <p className="text-lg font-sans" style={{ color: 'var(--text-secondary)' }}>
                    Open source AI-powered job search.
                  </p>
                  <p className="text-lg font-sans" style={{ color: 'var(--text-secondary)' }}>
                    Runs in your CLI. Your data, your machine.
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <button className="btn-primary gap-2 group">
                    Run it now
                    <span className="w-[3px] h-4 bg-white/80 animate-cursor-blink" />
                  </button>
                  <button className="btn-ghost">View source</button>
                </motion.div>
              </div>

              {/* Right: Terminal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full flex justify-center lg:justify-end lg:translate-y-8 animate-float"
              >
                <Terminal />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] tracking-[0.2em] font-bold uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            Scroll to explore
          </span>
          <div
            className="w-[1px] h-6"
            style={{
              background: isDark
                ? 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)'
                : 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
