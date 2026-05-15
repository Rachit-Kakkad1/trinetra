import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpRight, Minus } from 'lucide-react';

/* ── Data ── */
const summaryCards = [
  { label: 'Total Applications',  value: '24',   change: '+6',    trend: 'up' },
  { label: 'Avg Match Score',     value: '94.2%', change: '+2.1%', trend: 'up' },
  { label: 'Interview Rate',      value: '12.5%', change: '+3.2%', trend: 'up' },
  { label: 'Response Rate',       value: '33%',   change: '-4%',   trend: 'down' },
];

const weeklyData = [
  { week: 'W1', scanned: 812,  applied: 3,  interviews: 0 },
  { week: 'W2', scanned: 945,  applied: 5,  interviews: 1 },
  { week: 'W3', scanned: 1102, applied: 4,  interviews: 0 },
  { week: 'W4', scanned: 1204, applied: 6,  interviews: 2 },
  { week: 'W5', scanned: 1340, applied: 8,  interviews: 1 },
  { week: 'W6', scanned: 1520, applied: 12, interviews: 3 },
];

const topSkills = [
  { skill: 'Python',     demand: 94 },
  { skill: 'PyTorch',    demand: 88 },
  { skill: 'TypeScript', demand: 82 },
  { skill: 'Kubernetes', demand: 76 },
  { skill: 'Go',         demand: 71 },
  { skill: 'Rust',       demand: 65 },
];

const pipelineBreakdown = [
  { stage: 'Scanned',   count: 4523, pct: 100 },
  { stage: 'Scored',    count: 312,  pct: 6.9 },
  { stage: 'Applied',   count: 24,   pct: 0.53 },
  { stage: 'Interview', count: 3,    pct: 0.07 },
  { stage: 'Offer',     count: 0,    pct: 0 },
];

const maxScanned = Math.max(...weeklyData.map(w => w.scanned));

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'funnel'>('overview');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-white">Insights</h1>
        <p className="text-[14px] text-white/40 mt-1">Performance analytics and market intelligence</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
          >
            <div className="text-[12px] text-white/40 mb-3">{card.label}</div>
            <div className="text-[28px] font-semibold tracking-[-0.04em] text-white leading-none">{card.value}</div>
            <div className={`flex items-center gap-1 mt-2 text-[12px] font-mono ${
              card.trend === 'up' ? 'text-emerald-400' : card.trend === 'down' ? 'text-red-400' : 'text-white/30'
            }`}>
              {card.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : card.trend === 'down' ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
              {card.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-white/[0.06] pb-0">
        {(['overview', 'skills', 'funnel'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 pb-3 text-[13px] font-medium capitalize transition-colors border-b-2 ${
              activeTab === tab
                ? 'text-white border-white'
                : 'text-white/40 border-transparent hover:text-white/60'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'overview' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Weekly scan volume */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-[15px] font-semibold text-white/70 mb-1">Scan Volume</h3>
            <p className="text-[12px] text-white/30 mb-6">Opportunities discovered per week</p>
            <div className="flex items-end gap-3 h-[160px]">
              {weeklyData.map((w, i) => (
                <div key={w.week} className="flex-1 flex flex-col items-center justify-end h-full group">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(w.scanned / maxScanned) * 100}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full bg-white/[0.08] rounded-sm group-hover:bg-white/20 transition-colors relative"
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-white/50 whitespace-nowrap">
                      {w.scanned.toLocaleString()}
                    </div>
                  </motion.div>
                  <span className="text-[10px] text-white/20 mt-2 font-mono">{w.week}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications & Interviews */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-[15px] font-semibold text-white/70 mb-1">Conversion</h3>
            <p className="text-[12px] text-white/30 mb-6">Applications and interviews per week</p>
            <div className="space-y-4">
              {weeklyData.map(w => (
                <div key={w.week} className="flex items-center gap-4">
                  <span className="text-[11px] font-mono text-white/30 w-8">{w.week}</span>
                  <div className="flex-1 flex items-center gap-2 h-5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(w.applied / 12) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-white/[0.12] rounded-sm"
                    />
                    {w.interviews > 0 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(w.interviews / 3) * 30}%` }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-full bg-emerald-500/30 rounded-sm"
                      />
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-white/40 w-16 text-right">
                    {w.applied}a / {w.interviews}i
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-[10px] text-white/25">
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-white/[0.12] rounded-sm" /> Applied</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500/30 rounded-sm" /> Interviews</span>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'skills' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
          <h3 className="text-[15px] font-semibold text-white/70 mb-1">Market Demand</h3>
          <p className="text-[12px] text-white/30 mb-6">Skills in highest demand across your matched roles</p>
          <div className="space-y-4">
            {topSkills.map((s, i) => (
              <div key={s.skill} className="flex items-center gap-4">
                <span className="text-[13px] text-white/70 w-24 font-medium">{s.skill}</span>
                <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.demand}%` }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                    className="h-full bg-white/[0.15] rounded-full"
                  />
                </div>
                <span className="text-[12px] font-mono text-white/40 w-10 text-right">{s.demand}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'funnel' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
          <h3 className="text-[15px] font-semibold text-white/70 mb-1">Pipeline Funnel</h3>
          <p className="text-[12px] text-white/30 mb-6">Conversion at each stage</p>
          <div className="space-y-4">
            {pipelineBreakdown.map((s, i) => (
              <div key={s.stage} className="flex items-center gap-4">
                <span className="text-[13px] text-white/70 w-24 font-medium">{s.stage}</span>
                <div className="flex-1 h-6 bg-white/[0.03] rounded overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(s.pct, 1)}%` }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="h-full bg-white/[0.1] rounded"
                  />
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[14px] font-semibold text-white/60 tabular-nums w-14 text-right">{s.count.toLocaleString()}</span>
                  <span className="text-[11px] font-mono text-white/25 w-12 text-right">{s.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
