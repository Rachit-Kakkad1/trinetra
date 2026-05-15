import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Scissors, Mic, Network, Rocket } from 'lucide-react';

const agents = [
  { name: 'JobScout',      icon: Search,   status: 'active',  model: 'Gemini Flash', tasks: 142 },
  { name: 'FitScorer',     icon: Target,   status: 'active',  model: 'Gemini Pro',   tasks: 48 },
  { name: 'CVTailor',      icon: Scissors, status: 'idle',    model: 'Claude 3.5',   tasks: 0 },
  { name: 'NetworkMapper', icon: Network,  status: 'active',  model: 'Gemini',       tasks: 23 },
  { name: 'VoiceCoach',    icon: Mic,      status: 'standby', model: 'Gemini Live',  tasks: 1 },
  { name: 'ApplyPilot',    icon: Rocket,   status: 'active',  model: 'Playwright',   tasks: 8 },
];

const statusColors: Record<string, string> = {
  active:  'bg-emerald-500',
  standby: 'bg-amber-500',
  idle:    'bg-white/20',
};

export default function AgentGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[15px] font-semibold text-white/70">Agents</h2>
        <span className="text-[12px] text-white/30 font-mono">
          {agents.filter(a => a.status === 'active').length} active
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {agents.map((agent, i) => {
          const Icon = agent.icon;
          return (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                <div className={`w-2 h-2 rounded-full ${statusColors[agent.status]}`} />
              </div>
              <div className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors">{agent.name}</div>
              <div className="text-[11px] text-white/25 mt-1 font-mono">{agent.model}</div>
              {agent.status === 'active' && (
                <div className="text-[11px] text-white/30 mt-2">{agent.tasks} tasks</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
