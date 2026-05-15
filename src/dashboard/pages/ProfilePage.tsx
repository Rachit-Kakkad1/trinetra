import React from 'react';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Globe, MapPin, Calendar, Briefcase, TrendingUp,
  Brain, FileText, MessageSquare, Radio, Sparkles, ExternalLink
} from 'lucide-react';

/* ── Profile Metrics ── */
const metrics = [
  { label: 'Profile Strength',   value: '92%',    trend: '+4%' },
  { label: 'Match Readiness',    value: '94.2%',  trend: '+2.1%' },
  { label: 'Interview Ready',    value: '78%',    trend: '+12%' },
  { label: 'Pipeline Velocity',  value: '8/wk',   trend: '+3' },
];

/* ── Skills ── */
const skills = [
  { name: 'Python', level: 95 }, { name: 'PyTorch', level: 90 }, { name: 'React', level: 88 },
  { name: 'TypeScript', level: 85 }, { name: 'LLMs', level: 92 }, { name: 'Next.js', level: 82 },
  { name: 'Docker', level: 78 }, { name: 'AWS', level: 75 },
];

/* ── Memory Layers ── */
const memoryLayers = [
  { icon: Brain,          label: 'Interview Memory',     status: 'Learning', entries: 12 },
  { icon: FileText,       label: 'Writing Style',        status: 'Calibrated', entries: 34 },
  { icon: MessageSquare,  label: 'Communication Style',  status: 'Learning', entries: 8 },
  { icon: Briefcase,      label: 'Application Patterns', status: 'Active', entries: 24 },
  { icon: Radio,          label: 'Opportunity Signals',  status: 'Active', entries: 156 },
  { icon: Sparkles,       label: 'Recruiter Intel',      status: 'Building', entries: 5 },
];

/* ── Activity ── */
const recentActivity = [
  { action: 'Applied to Senior AI Engineer at Anthropic', time: '2h ago' },
  { action: 'Resume optimized for Scale AI posting', time: '4h ago' },
  { action: 'Mock interview completed — System Design', time: '1d ago' },
  { action: 'Referral path mapped to Vercel CTO', time: '1d ago' },
  { action: 'Salary research completed for Bay Area ML roles', time: '2d ago' },
];

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar + info */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-[22px] font-bold flex-shrink-0">
              RK
            </div>
            <div>
              <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-white">Rachit Kakkad</h1>
              <p className="text-[14px] text-white/40 mt-0.5">AI Engineer · 3 years</p>
              <div className="flex items-center gap-4 mt-2 text-[12px] text-white/30">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />Gujarat, India</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />Open to remote</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 md:ml-auto">
            <a href="https://github.com/Rachit-Kakkad1" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/[0.12] transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/rachit-kakkad" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/[0.12] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/[0.12] transition-colors">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg bg-white/[0.03] border border-white/[0.04] p-4"
            >
              <div className="text-[11px] text-white/30 mb-2">{m.label}</div>
              <div className="flex items-end justify-between">
                <span className="text-[24px] font-semibold tracking-[-0.03em] text-white">{m.value}</span>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />{m.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: Skills + Memory */}
        <div className="xl:col-span-2 space-y-6">
          {/* Skill graph */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-[15px] font-semibold text-white/70 mb-1">Skill Graph</h3>
            <p className="text-[12px] text-white/30 mb-6">Proficiency across your core skills</p>
            <div className="space-y-3">
              {skills.map((s, i) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="text-[13px] text-white/60 w-24 font-medium">{s.name}</span>
                  <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ delay: i * 0.05, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      className="h-full bg-white/[0.15] rounded-full"
                    />
                  </div>
                  <span className="text-[12px] font-mono text-white/30 w-10 text-right">{s.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Memory */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-[15px] font-semibold text-white/70 mb-1">AI Memory System</h3>
            <p className="text-[12px] text-white/30 mb-6">Intelligence layers that evolve with you</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {memoryLayers.map((layer, i) => {
                const Icon = layer.icon;
                return (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/30 group-hover:text-white/50 transition-colors flex-shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white/70 font-medium">{layer.label}</div>
                      <div className="text-[10px] text-white/25">{layer.entries} entries · {layer.status}</div>
                    </div>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      layer.status === 'Active' || layer.status === 'Calibrated' ? 'bg-emerald-400' : 'bg-amber-400'
                    }`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Activity */}
        <div className="space-y-6">
          {/* Preferences summary */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-[15px] font-semibold text-white/70 mb-4">Preferences</h3>
            <div className="space-y-3 text-[12px]">
              <div className="flex justify-between">
                <span className="text-white/40">Work type</span>
                <span className="text-white/70">Remote</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Company stage</span>
                <span className="text-white/70">Startup, Scale-up</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Industries</span>
                <span className="text-white/70">AI/ML, Dev Tools</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Expected CTC</span>
                <span className="text-white/70 font-mono">₹50L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Regions</span>
                <span className="text-white/70">India, US, Remote</span>
              </div>
            </div>
          </div>

          {/* Activity feed */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-[15px] font-semibold text-white/70 mb-4">Recent Activity</h3>
            <div className="space-y-1">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-white/[0.03] last:border-0">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/15 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-[12px] text-white/50 leading-relaxed">{a.action}</div>
                  </div>
                  <span className="text-[10px] text-white/20 font-mono flex-shrink-0">{a.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-[15px] font-semibold text-white/70 mb-4">Documents</h3>
            <div className="space-y-2">
              {['Master Resume', 'Anthropic Cover Letter', 'Portfolio Brief'].map(doc => (
                <div key={doc} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.03] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-white/20" />
                    <span className="text-[13px] text-white/60 group-hover:text-white/80 transition-colors">{doc}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
