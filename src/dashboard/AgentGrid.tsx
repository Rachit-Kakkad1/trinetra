import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Scissors, Mic, Handshake, Network, Rocket, Activity } from 'lucide-react';

const agents = [
  { name: 'JobScout', status: 'ACTIVE', color: 'text-blue-400', bg: 'bg-blue-400', icon: Search, load: '94%' },
  { name: 'FitScorer', status: 'ACTIVE', color: 'text-orange-400', bg: 'bg-orange-400', icon: Target, load: '42%' },
  { name: 'CVTailor', status: 'SLEEP', color: 'text-purple-400', bg: 'bg-purple-400', icon: Scissors, load: '0%' },
  { name: 'NetworkMapper', status: 'ACTIVE', color: 'text-pink-400', bg: 'bg-pink-400', icon: Network, load: '78%' },
  { name: 'VoiceCoach', status: 'STANDBY', color: 'text-green-400', bg: 'bg-green-400', icon: Mic, load: '5%' },
  { name: 'ApplyPilot', status: 'ACTIVE', color: 'text-red-400', bg: 'bg-red-400', icon: Rocket, load: '88%' },
];

export default function AgentGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <Activity className="text-dash-primary" /> Active Swarm
        </h2>
        <span className="font-mono text-xs text-white/40 tracking-widest uppercase border border-white/10 px-3 py-1 rounded-md">
          Live Status
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {agents.map((agent, i) => {
          const Icon = agent.icon;
          const isActive = agent.status === 'ACTIVE';
          return (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(91,111,255,0.15)] flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${agent.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-white/10 bg-black/40">
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? agent.bg + ' animate-pulse shadow-[0_0_5px_currentColor]' : 'bg-white/20'}`}></span>
                  <span className={`text-[9px] font-mono font-bold tracking-wider ${isActive ? agent.color : 'text-white/40'}`}>
                    {agent.status}
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-base mb-1 group-hover:text-dash-secondary transition-colors">{agent.name}</h3>
              
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                 <span className="text-xs font-mono text-white/40">Load</span>
                 <span className={`text-xs font-mono font-bold ${isActive ? 'text-dash-accent' : 'text-white/40'}`}>{agent.load}</span>
              </div>

              {isActive && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-dash-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
