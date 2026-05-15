import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function Radar() {
  return (
    <section className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <Target className="text-dash-warning" /> Career Radar
        </h2>
      </div>

      <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.02] p-6 relative overflow-hidden flex items-center justify-center min-h-[400px] backdrop-blur-xl">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Radar rings */}
          {[1, 2, 3, 4].map((ring) => (
            <div 
              key={ring}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dash-warning/20"
              style={{ width: `${ring * 25}%`, height: `${ring * 25}%` }}
            ></div>
          ))}

          {/* Sweeping line */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent to-dash-warning/80 origin-left -translate-y-1/2"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255,184,77,0.8))' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[conic-gradient(from_270deg,transparent_0deg,rgba(255,184,77,0.2)_90deg,transparent_90deg)] -translate-y-1/2 translate-x-1/2 rounded-full blur-md mix-blend-screen"></div>
          </motion.div>

          {/* Targets */}
          {[
            { angle: 45, distance: 30, color: 'bg-dash-primary', label: 'OpenAI' },
            { angle: 120, distance: 70, color: 'bg-dash-accent', label: 'Anthropic' },
            { angle: 210, distance: 50, color: 'bg-white', label: 'Google' },
            { angle: 300, distance: 85, color: 'bg-dash-secondary', label: 'Stripe' },
          ].map((target, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{ 
                transform: `rotate(${target.angle}deg) translateX(${target.distance}%) rotate(-${target.angle}deg)` 
              }}
            >
              <div className={`relative group cursor-pointer`}>
                <div className={`w-3 h-3 rounded-full ${target.color} shadow-[0_0_15px_currentColor]`}></div>
                <div className={`absolute inset-0 rounded-full ${target.color} animate-ping opacity-50`}></div>
                
                <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap border border-white/10 z-10">
                  {target.label}
                </div>
              </div>
            </div>
          ))}

          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-dash-warning shadow-[0_0_20px_rgba(255,184,77,1)]"></div>
        </div>
      </div>
    </section>
  );
}
