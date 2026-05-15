import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, Scissors, Mic, Handshake, Network, Rocket, Play, Pause, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  icon: typeof Search;
  model: string;
  status: 'active' | 'idle' | 'standby';
  description: string;
  tasks: number;
  uptime: string;
  lastRun: string;
  logs: string[];
}

const agentsData: Agent[] = [
  {
    id: 'jobscout', name: 'JobScout', icon: Search, model: 'Gemini Flash',
    status: 'active', description: 'Scans 45+ job portals every 2 minutes for new opportunities matching your profile.',
    tasks: 142, uptime: '99.8%', lastRun: '30s ago',
    logs: ['Scanned LinkedIn — 34 new roles', 'Scanned Indeed — 12 new roles', 'Scanned AngelList — 8 new roles', 'Deduplication complete — 48 unique']
  },
  {
    id: 'fitscorer', name: 'FitScorer', icon: Target, model: 'Gemini Pro',
    status: 'active', description: '10-dimension match analysis using RAG on your career profile and job descriptions.',
    tasks: 48, uptime: '99.2%', lastRun: '2m ago',
    logs: ['Scored Anthropic Sr. AI Eng — 94%', 'Scored Vercel Staff FE — 91%', 'Batch scoring complete — 48 roles']
  },
  {
    id: 'cvtailor', name: 'CVTailor', icon: Scissors, model: 'Claude 3.5',
    status: 'idle', description: 'Surgically rewrites your resume to mirror JD signals without losing authenticity.',
    tasks: 0, uptime: '98.5%', lastRun: '1h ago',
    logs: ['Waiting for new match assignments', 'Last optimization: ATS score 99%']
  },
  {
    id: 'networkmapper', name: 'NetworkMapper', icon: Network, model: 'Gemini',
    status: 'active', description: 'Maps referral paths through LinkedIn connections to find shortest route to hiring managers.',
    tasks: 23, uptime: '97.1%', lastRun: '5m ago',
    logs: ['Mapped path to Anthropic CTO — 2 hops', 'Draft outreach for Vercel connection', 'Analyzing mutual connections at Scale AI']
  },
  {
    id: 'voicecoach', name: 'VoiceCoach', icon: Mic, model: 'Gemini Live',
    status: 'standby', description: 'Live voice AI roleplay that critiques tone, technical depth, and interview presence.',
    tasks: 1, uptime: '95.0%', lastRun: '4h ago',
    logs: ['Mock interview session queued', 'Last feedback: improve system design articulation']
  },
  {
    id: 'negotiationsim', name: 'NegotiationSim', icon: Handshake, model: 'Claude 3.5',
    status: 'idle', description: 'Adversarial AI that simulates offer negotiations to maximize total compensation.',
    tasks: 0, uptime: '99.0%', lastRun: '2d ago',
    logs: ['No active negotiations', 'Last sim result: +18% TC improvement']
  },
  {
    id: 'applypilot', name: 'ApplyPilot', icon: Rocket, model: 'Playwright',
    status: 'active', description: 'Autonomous browser agent that fills application forms and handles bot checks.',
    tasks: 8, uptime: '96.3%', lastRun: '15m ago',
    logs: ['Submitted Greenhouse application — Vercel', 'Workday form for Anthropic — complete', 'Queued: Scale AI application']
  },
];

const statusConfig = {
  active:  { color: 'bg-emerald-500', label: 'Active',  textColor: 'text-emerald-400' },
  standby: { color: 'bg-amber-500',   label: 'Standby', textColor: 'text-amber-400' },
  idle:    { color: 'bg-white/20',     label: 'Idle',    textColor: 'text-white/40' },
};

export default function AgentsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const activeCount = agentsData.filter(a => a.status === 'active').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-white">Agents</h1>
          <p className="text-[14px] text-white/40 mt-1">
            {activeCount} of {agentsData.length} agents running
          </p>
        </div>
        <div className="flex gap-2">
          <button className="h-9 px-4 rounded-lg border border-white/[0.08] text-[13px] text-white/50 font-medium hover:text-white/80 hover:border-white/[0.15] transition-colors flex items-center gap-2">
            <RotateCcw className="w-3.5 h-3.5" /> Restart All
          </button>
          <button className="h-9 px-4 rounded-lg bg-white text-black text-[13px] font-medium flex items-center gap-2 hover:bg-white/90 transition-colors active:scale-[0.98]">
            <Play className="w-3.5 h-3.5" /> Deploy All
          </button>
        </div>
      </div>

      {/* Agent list */}
      <div className="space-y-3">
        {agentsData.map((agent, i) => {
          const Icon = agent.icon;
          const config = statusConfig[agent.status];
          const isExpanded = expandedId === agent.id;

          return (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              {/* Main row */}
              <div
                className="flex items-center gap-5 p-5 cursor-pointer hover:bg-white/[0.02] transition-colors"
                onClick={() => setExpandedId(isExpanded ? null : agent.id)}
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 flex-shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-medium text-white/90">{agent.name}</span>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${config.color}`} />
                      <span className={`text-[11px] font-mono ${config.textColor}`}>{config.label}</span>
                    </div>
                  </div>
                  <p className="text-[12px] text-white/30 mt-0.5 truncate">{agent.description}</p>
                </div>

                <div className="hidden md:flex items-center gap-8 flex-shrink-0 text-[12px] font-mono">
                  <div className="text-center">
                    <div className="text-white/60">{agent.tasks}</div>
                    <div className="text-white/20">tasks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/60">{agent.uptime}</div>
                    <div className="text-white/20">uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/60">{agent.lastRun}</div>
                    <div className="text-white/20">last run</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <span className="text-[11px] font-mono text-white/20 mr-2 hidden lg:block">{agent.model}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-white/30" /> : <ChevronDown className="w-4 h-4 text-white/30" />}
                </div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 border-t border-white/[0.04]">
                      <div className="flex items-center justify-between mt-4 mb-3">
                        <span className="text-[11px] font-mono text-white/25 uppercase tracking-wider">Recent Logs</span>
                        <div className="flex gap-2">
                          {agent.status === 'active' ? (
                            <button className="h-7 px-3 rounded-md border border-white/[0.08] text-[11px] text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5">
                              <Pause className="w-3 h-3" /> Pause
                            </button>
                          ) : (
                            <button className="h-7 px-3 rounded-md border border-white/[0.08] text-[11px] text-emerald-400 hover:bg-emerald-500/10 transition-colors flex items-center gap-1.5">
                              <Play className="w-3 h-3" /> Start
                            </button>
                          )}
                          <button className="h-7 px-3 rounded-md border border-white/[0.08] text-[11px] text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5">
                            <RotateCcw className="w-3 h-3" /> Restart
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {agent.logs.map((log, li) => (
                          <div key={li} className="text-[12px] font-mono text-white/40 flex items-start gap-2">
                            <span className="text-white/15 mt-0.5">›</span>
                            <span>{log}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
