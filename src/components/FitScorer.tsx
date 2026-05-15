import { motion } from 'framer-motion'

const scores = [
  { label: "Skills Match", value: 94, color: "bg-accent" },
  { label: "Seniority Fit", value: 88, color: "bg-accent" },
  { label: "Culture Signal", value: 76, color: "bg-yellow-400" },
  { label: "Remote Policy", value: 100, color: "bg-accent" },
  { label: "Tech Stack", value: 92, color: "bg-accent" },
  { label: "Growth Signal", value: 64, color: "bg-orange-500" },
]

const FitScorer = () => {
  return (
    <section id="features" className="py-32 border-b border-white/5 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] font-mono font-bold tracking-[0.4em] text-accent uppercase mb-4 block"
          >
            Feature Spotlight
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-syne font-extrabold text-5xl md:text-6xl tracking-tighter mb-8 leading-[0.9]"
          >
            Know your odds <br />
            <span className="italic text-white/30 underline decoration-accent/30 underline-offset-[12px]">before</span> you apply.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-10 leading-relaxed max-w-lg font-medium"
          >
            FitScorer doesn't just look for keywords. It analyzes 10 dimensions of compatibility — from deep architectural alignment to "hidden" culture signals in job descriptions.
          </motion.p>
          
          <ul className="space-y-6">
            {["Semantic depth analysis", "Automated Glassdoor synthesis", "Historical hiring pattern matching"].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center text-[10px] group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  ✓
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative">
          {/* Card UI Mock */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0D0F1A] border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -z-10" />
            
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="font-syne font-bold text-2xl text-white tracking-tight">Staff Engineer</h3>
                <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] mt-2">Stripe • Remote • Full-time</p>
              </div>
              <div className="flex flex-col items-center">
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, delay: 0.5 }}
                  className="text-7xl font-syne font-extrabold text-accent leading-none italic"
                >
                  A
                </motion.span>
                <span className="text-[8px] font-mono font-bold text-accent uppercase tracking-widest mt-2 opacity-60">Overall Grade</span>
              </div>
            </div>

            <div className="space-y-7">
              {scores.map((score, i) => (
                <div key={score.label}>
                  <div className="flex justify-between text-[10px] font-mono font-bold uppercase tracking-widest mb-2.5">
                    <span className="text-white/30">{score.label}</span>
                    <span className="text-white/80">{score.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${score.value}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full ${score.color} relative shadow-[0_0_15px_rgba(0,255,178,0.2)]`}
                    >
                      <div className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-sm" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
               <div className="flex items-center gap-3">
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border border-[#0D0F1A] bg-white/10 flex items-center justify-center text-[10px] font-bold backdrop-blur-md">
                       <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                         {i === 1 ? 'G' : i === 2 ? 'C' : 'P'}
                       </div>
                     </div>
                   ))}
                 </div>
                 <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">3 Models Engaged</span>
               </div>
               <span className="font-mono text-[9px] text-accent/40 animate-pulse uppercase tracking-[0.2em]">Analyzing...</span>
            </div>
          </motion.div>

          {/* Decorative glow */}
          <div className="absolute -inset-20 bg-primary-indigo/10 blur-[100px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default FitScorer
