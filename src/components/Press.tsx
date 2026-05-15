import { motion, useSpring, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Press = () => {
  const logos = ["Wired", "Business Insider", "Product Hunt", "Hacker News", "TechCrunch"]
  
  const starsRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = starsRef.current
    if (node) {
      const controls = animate(0, 1248, {
        duration: 3,
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString()
        },
      })
      return () => controls.stop()
    }
  }, [])

  return (
    <section className="py-24 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-16">
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-white/40 uppercase">Featured In</span>
          
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 opacity-30 grayscale brightness-200">
            {logos.map((logo) => (
              <span key={logo} className="font-syne font-extrabold text-2xl md:text-3xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">{logo}</span>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 mt-8 p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative group overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="text-5xl md:text-6xl font-syne font-extrabold tracking-tighter relative z-10">
                <span ref={starsRef} className="text-accent italic">0</span> <span className="text-white/80">stars</span>
             </div>
             <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-[0.2em] relative z-10">on GitHub and counting</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Press
