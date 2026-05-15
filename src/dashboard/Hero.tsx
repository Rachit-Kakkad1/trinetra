import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Zap, Box } from 'lucide-react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Hero() {
  return (
    <section className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-10 lg:p-16 overflow-hidden flex flex-col lg:flex-row gap-12 items-center min-h-[500px]">
      {/* Background glow for hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-dash-primary/10 to-transparent pointer-events-none blur-3xl"></div>

      <div className="flex-1 relative z-10 flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="px-3 py-1 rounded-full border border-dash-primary/30 bg-dash-primary/10 text-dash-primary font-mono text-[10px] tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(91,111,255,0.2)]">
            <Activity className="w-3 h-3" /> Core Engine V4.2
          </div>
          <div className="px-3 py-1 rounded-full border border-dash-accent/30 bg-dash-accent/10 text-dash-accent font-mono text-[10px] tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,178,0.1)]">
            <Zap className="w-3 h-3" /> Fully Autonomous
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          Autonomous Career <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-dash-primary via-dash-secondary to-dash-accent">
            Intelligence.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/50 max-w-xl leading-relaxed font-mono mt-4"
        >
          &gt; System running at optimal capacity. <br/>
          &gt; 45+ agent swarms deployed. <br/>
          &gt; Real-time market arbitrage active.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mt-8"
        >
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-dash-secondary hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 flex items-center gap-2 group">
            <Cpu className="w-5 h-5 group-hover:animate-spin-slow" /> Deploy Agents
          </button>
          <button className="px-8 py-4 border border-white/20 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            View Logs
          </button>
        </motion.div>
      </div>

      <div className="flex-1 w-full relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center">
        {/* Placeholder for 3D Globe - To be fully implemented with R3F later if performance allows, using CSS for now to guarantee no errors */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-64 h-64">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dash-primary/30 border-dashed"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dash-secondary/30 border-dotted"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-12 rounded-full bg-gradient-to-tr from-dash-primary to-dash-secondary opacity-20 blur-xl"
              ></motion.div>
              <div className="absolute inset-16 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(91,111,255,0.5)]">
                 <Box className="w-12 h-12 text-dash-secondary animate-pulse" />
              </div>

              {/* Orbiting nodes */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-dash-accent rounded-full shadow-[0_0_10px_rgba(0,255,178,1)]"
                  style={{ transformOrigin: 'center center' }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 2
                  }}
                >
                  <div className="absolute -top-32 left-0 w-full h-full"></div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
