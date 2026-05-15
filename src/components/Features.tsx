import { motion } from 'framer-motion'
import { Mic, Handshake, Building2, Share2 } from 'lucide-react'

const features = [
  { 
    title: "Voice Interview Sim", 
    desc: "Speak naturally to our AI agents. They simulate specialized technical rounds based on the target company's known interview loops.", 
    icon: <Mic className="w-6 h-6" />,
    badge: "LIVE",
    color: "from-blue-500/10 to-cyan-500/10"
  },
  { 
    title: "Salary Negotiation AI", 
    desc: "Train against an adversarial model designed to lowball you. Learn exactly which levers to pull for that extra $20k.", 
    icon: <Handshake className="w-6 h-6" />,
    color: "from-accent/10 to-green-500/10"
  },
  { 
    title: "Culture Score", 
    desc: "We synthesize 6+ data sources to give you the unvarnished truth about WLB, management style, and promotion velocity.", 
    icon: <Building2 className="w-6 h-6" />,
    color: "from-orange-500/10 to-red-500/10"
  },
  { 
    title: "Network Contact Graph", 
    desc: "See exactly who to ping and why. We map your 1st and 2nd degree connections to the target role automatically.", 
    icon: <Share2 className="w-6 h-6" />,
    color: "from-purple-500/10 to-pink-500/10"
  },
]

const Features = () => {
  return (
    <section className="py-32 border-b border-white/5 bg-[#0D0F1A]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-syne font-extrabold text-5xl md:text-7xl tracking-tighter mb-4 leading-none"
          >
            Features that don't <br /> exist anywhere else.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 rounded-3xl bg-gradient-to-br ${f.color} border border-white/5 group hover:border-white/10 transition-all duration-500 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-3xl -z-10 group-hover:bg-white/[0.05] transition-colors" />
              
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {f.icon}
                </div>
                {f.badge && (
                  <span className="text-[10px] font-mono font-bold px-3 py-1 bg-accent text-black rounded-full shadow-[0_0_15px_rgba(0,255,178,0.4)] animate-pulse">
                    {f.badge}
                  </span>
                )}
              </div>
              
              <h3 className="font-syne font-bold text-3xl mb-4 group-hover:text-white transition-colors tracking-tight">{f.title}</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-10 font-medium">{f.desc}</p>
              
              {/* Mini UI Preview */}
              <div className="mt-auto h-32 w-full bg-black/40 rounded-2xl border border-white/5 p-6 overflow-hidden relative group-hover:border-white/10 transition-colors">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="h-1.5 w-24 bg-white/10 rounded-full" />
                    <div className="ml-auto flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                    </div>
                 </div>
                 <div className="space-y-3">
                    <div className="h-1.5 w-full bg-white/5 rounded-full" />
                    <div className="h-1.5 w-5/6 bg-white/5 rounded-full" />
                    <div className="h-1.5 w-4/6 bg-white/5 rounded-full" />
                 </div>
                 
                 {/* Decorative overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
