import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

export default function GlobalMap() {
  return (
    <section className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <Globe2 className="text-dash-primary" /> Intelligence Map
        </h2>
      </div>

      <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden flex flex-col justify-between min-h-[400px] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-10 blur-[1px]"></div>
        
        {/* Nodes */}
        <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-dash-primary rounded-full shadow-[0_0_20px_rgba(91,111,255,1)]">
          <div className="absolute inset-0 bg-dash-primary rounded-full animate-ping opacity-50"></div>
        </div>
        <div className="absolute top-[40%] left-[80%] w-2 h-2 bg-dash-accent rounded-full shadow-[0_0_15px_rgba(0,255,178,1)]"></div>
        <div className="absolute top-[25%] left-[50%] w-4 h-4 bg-dash-secondary rounded-full shadow-[0_0_25px_rgba(0,229,255,1)]">
          <div className="absolute inset-0 bg-dash-secondary rounded-full animate-ping opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col gap-4 max-w-xs mt-auto bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/50 uppercase">SF Bay Area</span>
            <span className="text-dash-primary font-bold text-sm">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/50 uppercase">London</span>
            <span className="text-dash-secondary font-bold text-sm">Surging</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/50 uppercase">Singapore</span>
            <span className="text-dash-accent font-bold text-sm">Stable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
