import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ArrowRight, Clock } from 'lucide-react';

const stages = [
  { name: 'Scan',      count: 1204, status: 'done' },
  { name: 'Score',     count: 48,   status: 'done' },
  { name: 'Optimize',  count: 12,   status: 'done' },
  { name: 'Apply',     count: 8,    status: 'active' },
  { name: 'Interview', count: 3,    status: 'pending' },
  { name: 'Negotiate', count: 0,    status: 'pending' },
];

export default function Pipeline() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[15px] font-semibold text-white/70">Pipeline</h2>
        <span className="text-[12px] text-white/30">6 stages</span>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
        <div className="flex items-center">
          {stages.map((stage, i) => (
            <React.Fragment key={stage.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className={`flex flex-col items-center flex-1 group ${
                  stage.status === 'pending' ? 'opacity-30' : ''
                }`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 border transition-colors ${
                  stage.status === 'done'   ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' :
                  stage.status === 'active' ? 'border-blue-500/30 bg-blue-500/10 text-blue-400' :
                                              'border-white/[0.08] bg-white/[0.02] text-white/30'
                }`}>
                  {stage.status === 'done' ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : stage.status === 'active' ? (
                    <Clock className="w-4 h-4 animate-pulse" />
                  ) : (
                    <Circle className="w-4 h-4" />
                  )}
                </div>

                {/* Count */}
                <span className="text-[20px] font-semibold tracking-[-0.03em] text-white leading-none">
                  {stage.count.toLocaleString()}
                </span>

                {/* Label */}
                <span className="text-[11px] text-white/30 mt-1.5 font-medium">{stage.name}</span>
              </motion.div>

              {/* Connector */}
              {i < stages.length - 1 && (
                <ArrowRight className={`w-4 h-4 flex-shrink-0 mx-1 ${
                  stages[i + 1].status !== 'pending' ? 'text-white/20' : 'text-white/8'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
