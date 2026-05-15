import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const logs = [
  { agent: 'SCOUT',  msg: 'Scanned 14,204 roles across 45 portals', type: 'info' },
  { agent: 'SCORER', msg: 'Sr. AI Engineer @ Anthropic — 94.2% match', type: 'success' },
  { agent: 'TAILOR', msg: 'Resume rewrite complete. ATS score: 99%', type: 'success' },
  { agent: 'PILOT',  msg: 'Workday form submitted — checksum OK', type: 'info' },
  { agent: 'SCOUT',  msg: 'Found unlisted role via Discord: Vercel AI', type: 'info' },
  { agent: 'SCORER', msg: 'ML Lead @ Scale AI — 87.1% match', type: 'info' },
  { agent: 'MAPPER', msg: 'Referral path identified — 2 hops to CTO', type: 'success' },
  { agent: 'PILOT',  msg: 'Greenhouse submission queued', type: 'info' },
];

const agentColors: Record<string, string> = {
  SCOUT:  'text-blue-400',
  SCORER: 'text-amber-400',
  TAILOR: 'text-violet-400',
  PILOT:  'text-emerald-400',
  MAPPER: 'text-pink-400',
};

export default function CommandCenter() {
  const [displayed, setDisplayed] = useState<typeof logs>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      if (idx < logs.length) {
        setDisplayed(prev => [...prev, logs[idx]]);
        idx++;
      } else {
        clearInterval(timer);
      }
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [displayed]);

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] flex flex-col h-full min-h-[300px]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 h-11 border-b border-white/[0.06] flex-shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-[11px] text-white/25 font-mono ml-3">live feed</span>
      </div>

      {/* Log stream */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2">
        {displayed.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-3 text-[12px] font-mono leading-relaxed"
          >
            <span className={`font-semibold flex-shrink-0 w-14 text-right ${agentColors[log.agent] || 'text-white/40'}`}>
              {log.agent}
            </span>
            <span className="text-white/50">{log.msg}</span>
          </motion.div>
        ))}
        {/* Cursor */}
        <div className="flex gap-3 text-[12px] font-mono">
          <span className="w-14" />
          <span className="w-[6px] h-[14px] bg-white/40 animate-pulse rounded-[1px]" />
        </div>
      </div>
    </div>
  );
}
