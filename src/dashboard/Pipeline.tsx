import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Search, Zap, CheckCircle2, Send, Rocket } from 'lucide-react';

const stages = [
  { name: 'SCAN', count: 1204, active: true, icon: Search, color: 'text-blue-400', border: 'border-blue-400/30' },
  { name: 'SCORE', count: 48, active: true, icon: Zap, color: 'text-orange-400', border: 'border-orange-400/30' },
  { name: 'OPTIMIZE', count: 12, active: true, icon: CheckCircle2, color: 'text-purple-400', border: 'border-purple-400/30' },
  { name: 'APPLY', count: 8, active: true, icon: Send, color: 'text-dash-primary', border: 'border-dash-primary/30' },
  { name: 'INTERVIEW', count: 3, active: false, icon: Rocket, color: 'text-white/40', border: 'border-white/10' },
];

export default function Pipeline() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <GitCommit className="text-dash-secondary" /> Opportunity Flow
        </h2>
      </div>

      <div className="relative w-full rounded-3xl border border-white/10 bg-black/20 p-8 lg:p-12 overflow-hidden flex flex-col backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row justify-between relative z-10">
          
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-white/5 -translate-y-1/2 hidden lg:block rounded-full"></div>
          {/* Animated Progress Line */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-10 h-1 bg-gradient-to-r from-dash-primary via-dash-secondary to-dash-accent -translate-y-1/2 hidden lg:block rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)]"
          ></motion.div>

          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center group mb-10 lg:mb-0"
              >
                {/* Number Badge */}
                <div className="mb-6 font-mono text-3xl font-bold tracking-tighter" style={{ color: stage.active ? 'var(--text-primary)' : 'rgba(255,255,255,0.2)' }}>
                  {stage.count}
                </div>

                {/* Node */}
                <div className={`w-16 h-16 rounded-full border-2 ${stage.border} flex items-center justify-center bg-dash-bg relative z-10 transition-transform duration-300 group-hover:scale-110 shadow-2xl`}>
                  {stage.active && (
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full ${stage.color.replace('text-', 'bg-')} blur-md opacity-30`}
                    />
                  )}
                  <Icon className={`w-6 h-6 ${stage.color} relative z-10`} />
                </div>

                {/* Label */}
                <div className={`mt-6 font-mono text-sm tracking-widest uppercase font-bold ${stage.active ? 'text-white' : 'text-white/30'}`}>
                  {stage.name}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
