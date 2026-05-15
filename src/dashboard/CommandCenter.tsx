import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const logs = [
  "> INITIALIZING MULTI-AGENT SWARM...",
  "> SYSTEM: Connected to secure websocket.",
  "> JOBSCOUT: Scanned 14,204 roles in last 60s.",
  "> FITSCORER: Analyzing Senior AI Engineer at Anthropic...",
  "> FITSCORER: Match confidence: 94.2%. Skill overlap: high.",
  "> CVTAILOR: Rewriting resume to highlight PyTorch scaling experience.",
  "> CVTAILOR: Optimization complete. ATS score projected: 99%.",
  "> APPLYPILOT: Initiating headless browser for workday instance.",
  "> APPLYPILOT: Checksum verified. Form submitted.",
];

export default function CommandCenter() {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < logs.length) {
        setDisplayedLogs(prev => [...prev, logs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLogs]);

  return (
    <section className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <Terminal className="text-white/60" /> Command Center
        </h2>
      </div>

      <div className="flex-1 rounded-3xl border border-white/10 bg-[#0a0a0c] p-6 relative overflow-hidden flex flex-col h-[320px]">
        {/* CRT Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20 z-20"></div>
        
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5 relative z-10">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <span className="ml-4 font-mono text-[10px] text-white/30 tracking-widest uppercase">root@talent-os:~</span>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto font-mono text-sm space-y-3 relative z-10 scrollbar-hide pr-4">
          {displayedLogs.map((log, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white/70"
            >
              <span className="text-dash-secondary mr-3">{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
              {log}
            </motion.div>
          ))}
          <div className="flex items-center text-white/70">
            <span className="text-dash-secondary mr-3">{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
            <span className="w-2 h-4 bg-white/70 animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
