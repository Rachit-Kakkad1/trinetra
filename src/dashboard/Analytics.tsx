import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const data = [35, 52, 40, 65, 48, 78, 55, 88, 72, 95, 80, 68];
const maxVal = Math.max(...data);

export default function Analytics() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[15px] font-semibold text-white/70">Match Performance</h3>
          <p className="text-[12px] text-white/30 mt-0.5">Last 12 weeks</p>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 text-[12px] font-medium">
          <TrendingUp className="w-3.5 h-3.5" />
          +12.4%
        </div>
      </div>

      {/* Big number */}
      <div className="mb-6">
        <div className="text-[40px] font-semibold tracking-[-0.04em] text-white leading-none">
          94.2<span className="text-[20px] text-white/30">%</span>
        </div>
        <div className="text-[12px] text-white/30 mt-1">Average match score</div>
      </div>

      {/* Bar chart */}
      <div className="flex-1 flex items-end gap-[6px] min-h-[120px]">
        {data.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full group">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(val / maxVal) * 100}%` }}
              transition={{ delay: i * 0.04, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="w-full bg-white/[0.08] rounded-sm group-hover:bg-white/20 transition-colors relative"
            >
              {/* Tooltip on hover */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-white/60 bg-[#18181b] px-1.5 py-0.5 rounded whitespace-nowrap pointer-events-none">
                {val}%
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* X-axis labels */}
      <div className="flex items-center justify-between mt-3 text-[10px] font-mono text-white/15">
        <span>W1</span>
        <span>W6</span>
        <span>W12</span>
      </div>
    </div>
  );
}
