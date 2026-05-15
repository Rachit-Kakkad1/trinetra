import React from 'react';
import { motion } from 'framer-motion';
import { Network, Search, Zap, User, Settings, Database, MessageSquare, Activity } from 'lucide-react';

const navItems = [
  { icon: Search, label: 'Search', active: false },
  { icon: Network, label: 'Pipeline', active: true },
  { icon: Zap, label: 'Agents', active: false },
  { icon: Database, label: 'Data', active: false },
  { icon: MessageSquare, label: 'Comms', active: false },
  { icon: Activity, label: 'Metrics', active: false },
];

export default function Sidebar() {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-20 lg:w-64 flex flex-col border-r border-white/5 bg-dash-surface backdrop-blur-3xl z-20 transition-all duration-500 hover:w-64 group/sidebar"
    >
      <div className="p-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dash-primary to-dash-secondary flex items-center justify-center font-bold shadow-[0_0_20px_rgba(91,111,255,0.4)] flex-shrink-0">
          TO
        </div>
        <span className="font-bold text-xl tracking-tight hidden lg:block group-hover/sidebar:block whitespace-nowrap opacity-0 lg:opacity-100 group-hover/sidebar:opacity-100 transition-opacity">
          Talent-OS
        </span>
      </div>

      <nav className="flex-1 mt-10 flex flex-col gap-2 px-4">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                item.active ? 'text-white' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.active && (
                <div className="absolute inset-0 bg-dash-primary/10 border border-dash-primary/20 rounded-xl"></div>
              )}
              {item.active && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute left-0 w-1 h-1/2 top-1/4 bg-dash-primary rounded-r-full shadow-[0_0_10px_rgba(91,111,255,1)]"
                />
              )}
              <Icon className={`w-5 h-5 flex-shrink-0 relative z-10 ${item.active ? 'text-dash-primary' : ''}`} />
              <span className="font-mono text-sm tracking-widest uppercase hidden lg:block group-hover/sidebar:block whitespace-nowrap relative z-10 opacity-0 lg:opacity-100 group-hover/sidebar:opacity-100 transition-opacity">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-3 flex items-center gap-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 relative">
            <User className="w-5 h-5 text-white/70" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-dash-accent rounded-full border-2 border-dash-bg shadow-[0_0_10px_rgba(0,255,178,0.8)]"></div>
          </div>
          <div className="hidden lg:flex group-hover/sidebar:flex flex-col overflow-hidden">
            <span className="font-bold text-sm whitespace-nowrap text-white/90">Rachit Kakkad</span>
            <span className="font-mono text-[10px] text-dash-accent tracking-widest uppercase">System Admin</span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
