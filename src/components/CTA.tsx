import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(91,111,255,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto rounded-[4rem] bg-gradient-to-br from-primary-indigo to-primary-violet p-12 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-primary-indigo/20"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] -z-10 rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[120px] -z-10 rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="font-syne font-extrabold text-5xl md:text-8xl tracking-tighter mb-16 leading-[0.9] text-white">
            Your next job is <br /> already posted. <br />
            <span className="text-accent italic underline decoration-white/20 underline-offset-[16px]">Are you scanning it?</span>
          </h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-8 relative z-10">
          <Link to="/dashboard">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 rounded-2xl bg-white text-black font-syne font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
            >
              Launch Dashboard →
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white font-syne font-black text-xl transition-all"
          >
            View on GitHub
          </motion.button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-12 left-12 opacity-10 font-mono text-xs font-bold tracking-widest hidden lg:block">TALENT-OS_PROTOCOL_v4.2</div>
        <div className="absolute bottom-12 right-12 opacity-10 font-mono text-xs font-bold tracking-widest hidden lg:block">SYSTEMS_GO_FOR_LAUNCH</div>
      </motion.div>
    </section>
  )
}

export default CTA
