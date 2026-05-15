import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const activity = [
  { time: '2m ago',  event: 'JobScout scanned 1,204 new roles' },
  { time: '5m ago',  event: 'FitScorer matched you to Anthropic — 94%' },
  { time: '12m ago', event: 'CVTailor optimized resume for Scale AI' },
  { time: '18m ago', event: 'ApplyPilot submitted Greenhouse application' },
  { time: '1h ago',  event: 'NetworkMapper found referral path to Vercel CTO' },
  { time: '2h ago',  event: 'VoiceCoach completed mock interview session' },
];

export default function GlobalMap() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[15px] font-semibold text-white/70">Activity</h3>
        <Clock className="w-4 h-4 text-white/20" />
      </div>

      <div className="space-y-1">
        {activity.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 py-2.5 border-b border-white/[0.04] last:border-0"
          >
            {/* Timeline dot */}
            <div className="mt-1.5 flex flex-col items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[12px] text-white/50 leading-relaxed">{item.event}</div>
            </div>

            <span className="text-[11px] text-white/20 font-mono flex-shrink-0 mt-0.5">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
