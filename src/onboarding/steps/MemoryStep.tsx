import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Brain, FileText, MessageSquare, Briefcase, Radio, Sparkles } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const memoryNodes = [
  { icon: Brain,          label: 'Interview Memory',       desc: 'Remembers every answer you practice',    delay: 0 },
  { icon: FileText,       label: 'Writing Adaptation',     desc: 'Learns your professional writing style', delay: 0.3 },
  { icon: MessageSquare,  label: 'Communication Style',    desc: 'Adapts tone for each recruiter',         delay: 0.6 },
  { icon: Briefcase,      label: 'Application Patterns',   desc: 'Tracks what works and what doesn\'t',    delay: 0.9 },
  { icon: Radio,          label: 'Opportunity Signals',    desc: 'Detects hidden market patterns',         delay: 1.2 },
  { icon: Sparkles,       label: 'Recruiter Intelligence', desc: 'Learns recruiter preferences over time', delay: 1.5 },
];

export default function MemoryStep({ onNext, onBack }: Props) {
  const [activated, setActivated] = useState<number>(0);

  // Simulate nodes activating one by one
  useEffect(() => {
    const timer = setInterval(() => {
      setActivated(prev => {
        if (prev >= memoryNodes.length) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-lg mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">Step 5</span>
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white mt-3">
          Your AI memory is forming
        </h2>
        <p className="text-[14px] text-white/40 mt-2 mb-10">
          These intelligence layers will learn and evolve as you use Talent-OS.
        </p>
      </motion.div>

      <div className="space-y-3">
        {memoryNodes.map((node, i) => {
          const Icon = node.icon;
          const isActive = i < activated;
          return (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: node.delay * 0.5, duration: 0.4 }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 ${
                isActive
                  ? 'bg-white/[0.04] border-white/[0.1]'
                  : 'bg-white/[0.01] border-white/[0.04]'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                isActive
                  ? 'bg-white/[0.08] text-white'
                  : 'bg-white/[0.02] text-white/15'
              }`}>
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className={`text-[13px] font-medium transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-white/25'}`}>
                  {node.label}
                </div>
                <div className={`text-[11px] transition-colors duration-500 ${isActive ? 'text-white/40' : 'text-white/15'}`}>
                  {node.desc}
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-500 ${
                isActive ? 'bg-emerald-400' : 'bg-white/[0.08]'
              }`} />
            </motion.div>
          );
        })}
      </div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: activated >= memoryNodes.length ? 1 : 0.3 }}
        className="mt-8 text-center"
      >
        <p className="text-[12px] font-mono text-white/30">
          {activated >= memoryNodes.length ? 'All memory layers initialized' : `Initializing ${activated} of ${memoryNodes.length}...`}
        </p>
      </motion.div>

      <div className="flex items-center justify-between mt-12">
        <button onClick={onBack} className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button onClick={onNext} disabled={activated < memoryNodes.length} className="h-10 px-6 rounded-lg bg-white text-black text-[13px] font-medium flex items-center gap-2 hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
