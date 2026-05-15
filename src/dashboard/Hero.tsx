import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Briefcase, FileCheck } from 'lucide-react';

const stats = [
  { label: 'Applications', value: '24', change: '+6 this week', icon: Briefcase, trend: 'up' },
  { label: 'Match Score',  value: '94%', change: '+2.1% avg', icon: TrendingUp, trend: 'up' },
  { label: 'Interviews',   value: '3', change: '2 scheduled', icon: FileCheck, trend: 'neutral' },
];

export default function Hero() {
  return (
    <section className="space-y-6">
      {/* Header row */}
      <div className="flex items-end justify-between">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[28px] font-semibold tracking-[-0.03em] text-white"
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[14px] text-white/40 mt-1"
          >
            Your autonomous pipeline is running. All systems nominal.
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="h-9 px-4 rounded-lg bg-white text-black text-[13px] font-medium flex items-center gap-2 hover:bg-white/90 transition-colors active:scale-[0.98]"
        >
          Deploy agents <ArrowUpRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.06 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] text-white/40 font-medium">{stat.label}</span>
                <Icon className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
              </div>
              <div className="text-[32px] font-semibold tracking-[-0.04em] text-white leading-none">
                {stat.value}
              </div>
              <div className="text-[12px] text-white/30 mt-2 font-mono">{stat.change}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
