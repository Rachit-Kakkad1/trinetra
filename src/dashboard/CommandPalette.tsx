import React, { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import {
  Search, Target, Scissors, Mic, Rocket, Network,
  BarChart3, LayoutDashboard, Settings, Play, Database,
  CornerDownLeft, Handshake, GitCommit, Globe, Map
} from 'lucide-react';

const DATA = [
  // Agents
  { id: 'jobscout',    title: 'JobScout',       subtitle: 'Job scanning agent',       category: 'Agents', icon: Search },
  { id: 'fitscorer',   title: 'FitScorer',      subtitle: 'Match analysis',           category: 'Agents', icon: Target },
  { id: 'cvtailor',    title: 'CVTailor',       subtitle: 'Resume optimization',      category: 'Agents', icon: Scissors },
  { id: 'voicecoach',  title: 'VoiceCoach',     subtitle: 'Interview simulation',     category: 'Agents', icon: Mic },
  { id: 'applypilot',  title: 'ApplyPilot',     subtitle: 'Autonomous applications',  category: 'Agents', icon: Rocket },
  { id: 'negotiation', title: 'NegotiationSim', subtitle: 'Offer optimization',       category: 'Agents', icon: Handshake },

  // Commands
  { id: 'cmd-cv',        title: 'Generate CV',        subtitle: 'Create tailored resume',     category: 'Commands', icon: Database },
  { id: 'cmd-interview', title: 'Mock Interview',      subtitle: 'Start voice simulation',     category: 'Commands', icon: Play },
  { id: 'cmd-scan',      title: 'Scan Opportunities',  subtitle: 'Trigger global search',      category: 'Commands', icon: Search },
  { id: 'cmd-pipeline',  title: 'Run Pipeline',        subtitle: 'Execute full workflow',       category: 'Commands', icon: Settings },
  { id: 'cmd-analyze',   title: 'Company Analysis',    subtitle: 'Deep dive on target company', category: 'Commands', icon: Globe },

  // Navigation
  { id: 'nav-dash',      title: 'Dashboard',   subtitle: 'Overview',           category: 'Navigation', icon: LayoutDashboard },
  { id: 'nav-analytics', title: 'Analytics',    subtitle: 'Performance data',   category: 'Navigation', icon: BarChart3 },
  { id: 'nav-pipeline',  title: 'Pipeline',     subtitle: 'Opportunity flow',   category: 'Navigation', icon: GitCommit },
  { id: 'nav-map',       title: 'Intel Map',    subtitle: 'Global hotspots',    category: 'Navigation', icon: Map },
];

export default function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen, open]);

  // Reset search when closing
  useEffect(() => {
    if (!open) setSearch('');
  }, [open]);

  const fuse = useMemo(() => new Fuse(DATA, {
    keys: ['title', 'subtitle', 'category'],
    threshold: 0.35,
  }), []);

  const results = search.trim() ? fuse.search(search).map(r => r.item) : DATA;

  const grouped = results.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof DATA>);

  const categories = ['Agents', 'Commands', 'Navigation'];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-[560px] pointer-events-auto"
            >
              <Command
                loop
                shouldFilter={false}
                className="bg-[#18181b] border border-white/[0.08] rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
              >
                {/* Input */}
                <div className="flex items-center gap-3 px-4 border-b border-white/[0.06]">
                  <Search className="w-4 h-4 text-white/30 flex-shrink-0" />
                  <Command.Input
                    autoFocus
                    placeholder="Type a command or search..."
                    value={search}
                    onValueChange={setSearch}
                    className="w-full bg-transparent text-[14px] text-white placeholder-white/30 h-12 focus:outline-none"
                  />
                </div>

                {/* Results */}
                <Command.List className="max-h-[320px] overflow-y-auto p-1.5">
                  {results.length === 0 && (
                    <div className="py-12 text-center">
                      <p className="text-[13px] text-white/30">No results found.</p>
                    </div>
                  )}

                  {categories.map(cat => {
                    if (!grouped[cat]) return null;
                    return (
                      <Command.Group
                        key={cat}
                        heading={
                          <div className="px-3 py-2 text-[11px] font-medium text-white/25 uppercase tracking-wider">
                            {cat}
                          </div>
                        }
                      >
                        {grouped[cat].map((item) => {
                          const Icon = item.icon;

                          // Highlight matching text
                          const highlightTitle = (title: string) => {
                            if (!search.trim()) return title;
                            const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                            const parts = title.split(regex);
                            return parts.map((part, i) =>
                              regex.test(part)
                                ? <span key={i} className="text-white font-semibold">{part}</span>
                                : <span key={i}>{part}</span>
                            );
                          };

                          return (
                            <Command.Item
                              key={item.id}
                              value={item.id}
                              onSelect={() => setOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-white/60 aria-selected:bg-white/[0.06] aria-selected:text-white transition-colors mx-1"
                            >
                              <Icon className="w-4 h-4 flex-shrink-0 opacity-50" strokeWidth={1.5} />
                              <div className="flex-1 min-w-0">
                                <div className="text-[13px]">{highlightTitle(item.title)}</div>
                                <div className="text-[11px] text-white/25 truncate">{item.subtitle}</div>
                              </div>
                              <CornerDownLeft className="w-3.5 h-3.5 opacity-0 aria-selected:opacity-100 text-white/30 flex-shrink-0" />
                            </Command.Item>
                          );
                        })}
                      </Command.Group>
                    );
                  })}
                </Command.List>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/[0.06] text-[11px] text-white/20 font-mono">
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1"><kbd className="bg-white/[0.06] px-1 py-0.5 rounded text-[10px]">↑↓</kbd> navigate</span>
                    <span className="flex items-center gap-1"><kbd className="bg-white/[0.06] px-1 py-0.5 rounded text-[10px]">↵</kbd> select</span>
                    <span className="flex items-center gap-1"><kbd className="bg-white/[0.06] px-1 py-0.5 rounded text-[10px]">esc</kbd> close</span>
                  </div>
                </div>
              </Command>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
