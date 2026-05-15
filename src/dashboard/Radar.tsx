import React from 'react';
import { motion } from 'framer-motion';

const opportunities = [
  { company: 'Anthropic',   role: 'Senior AI Engineer',    match: 94, status: 'Interview scheduled' },
  { company: 'Vercel',      role: 'Staff Frontend Eng',    match: 91, status: 'Application sent' },
  { company: 'Scale AI',    role: 'ML Infrastructure',     match: 88, status: 'Under review' },
  { company: 'Stripe',      role: 'AI/ML Engineer',        match: 85, status: 'Scored' },
];

export default function Radar() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[15px] font-semibold text-white/70">Top Opportunities</h3>
        <span className="text-[12px] text-white/30">{opportunities.length} tracked</span>
      </div>

      <div className="space-y-3">
        {opportunities.map((opp, i) => (
          <motion.div
            key={opp.company}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/[0.04] transition-colors group cursor-pointer"
          >
            {/* Company avatar */}
            <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-[12px] font-bold text-white/40 flex-shrink-0">
              {opp.company[0]}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors truncate">
                {opp.role}
              </div>
              <div className="text-[11px] text-white/30">{opp.company}</div>
            </div>

            {/* Match score */}
            <div className="flex flex-col items-end flex-shrink-0">
              <span className={`text-[14px] font-semibold tabular-nums ${
                opp.match >= 90 ? 'text-emerald-400' : 'text-white/60'
              }`}>
                {opp.match}%
              </span>
              <span className="text-[10px] text-white/20">{opp.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
