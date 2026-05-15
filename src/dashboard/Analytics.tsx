import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp } from 'lucide-react';

export default function Analytics() {
  return (
    <section className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <BarChart3 className="text-dash-accent" /> Intelligence
        </h2>
      </div>

      <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden backdrop-blur-xl group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,255,178,0.05)_0%,transparent_50%)]"></div>
        
        <div className="flex flex-col h-full relative z-10">
          <div className="grid grid-cols-2 gap-6 mb-10">
             <div>
               <div className="text-white/40 font-mono text-xs uppercase tracking-widest mb-2">Avg Match Score</div>
               <div className="text-4xl font-bold text-white flex items-end gap-2">
                 94.2<span className="text-dash-accent text-lg font-mono tracking-tighter">%</span>
               </div>
             </div>
             <div>
               <div className="text-white/40 font-mono text-xs uppercase tracking-widest mb-2">Est. Comp Delta</div>
               <div className="text-4xl font-bold text-white flex items-end gap-2">
                 +18<span className="text-dash-secondary text-lg font-mono tracking-tighter">%</span>
               </div>
             </div>
          </div>

          <div className="flex-1 relative flex items-end justify-between gap-2 mt-auto border-b border-white/10 pb-2">
            {/* Fake chart bars */}
            {[40, 60, 45, 80, 55, 90, 75, 100, 85].map((height, i) => (
              <div key={i} className="w-full relative group/bar flex flex-col justify-end h-40">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
                  className="w-full bg-white/10 rounded-t-sm relative transition-all duration-300 group-hover/bar:bg-dash-primary/60"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-dash-primary opacity-0 group-hover/bar:opacity-100 shadow-[0_0_10px_rgba(91,111,255,1)]"></div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-xs font-mono text-white/30 tracking-widest">
            <span>LAST 30 DAYS</span>
            <span className="flex items-center gap-1 text-dash-accent"><TrendingUp className="w-3 h-3" /> GROWING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
