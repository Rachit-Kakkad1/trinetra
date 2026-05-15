import { motion } from 'framer-motion'

const testimonials = [
  { 
    quote: "Talent-OS found roles for me that didn't even show up on LinkedIn yet. The CV surgery is terrifyingly good.",
    name: "Sarah Chen",
    role: "Senior Staff at Figma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
  },
  { 
    quote: "I used the NegotiationSim to bump my base by $35k. It knew exactly what Stripe's compensation bands were.",
    name: "Marcus Thorne",
    role: "Lead Frontend at Vercel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
    featured: true
  },
  { 
    quote: "The voice coach simulation felt like a real technical interview. I've never felt more prepared for a loop.",
    name: "Elena Rodriguez",
    role: "AI Researcher at DeepMind",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena"
  },
]

const Testimonials = () => {
  return (
    <section className="py-40 border-b border-white/5 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary-indigo/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between group ${
                t.featured 
                ? 'border-primary-indigo/30 bg-primary-indigo/[0.03] shadow-2xl md:scale-105 z-10' 
                : 'border-white/10 bg-white/[0.01] hover:border-white/20'
              }`}
            >
              <div className="mb-12">
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(star => (
                    <span key={star} className="text-accent text-xs">✦</span>
                  ))}
                </div>
                <p className="text-white/80 text-xl font-medium leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full p-0.5 border border-white/10 bg-white/5 group-hover:border-primary-indigo transition-colors duration-500">
                  <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <div className="font-syne font-bold text-lg text-white group-hover:text-primary-indigo transition-colors">{t.name}</div>
                  <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mt-0.5 font-bold">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
