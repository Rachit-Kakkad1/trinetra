import React, { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { Search, Bot, Zap, Scissors, Mic, Rocket, Map, Activity, BarChart, Settings, Play, Database, History, CornerDownLeft, Target, GitCommit, Handshake } from 'lucide-react';

const DATA = [
  // AGENTS
  { id: 'jobscout', title: 'JobScout', subtitle: 'Autonomous job scanning', category: 'AGENTS', icon: Search },
  { id: 'fitscorer', title: 'FitScorer', subtitle: 'RAG-powered matching', category: 'AGENTS', icon: Target },
  { id: 'cvtailor', title: 'CVTailor', subtitle: 'Surgical ATS optimization', category: 'AGENTS', icon: Scissors },
  { id: 'voicecoach', title: 'VoiceCoach', subtitle: 'Live interview sim', category: 'AGENTS', icon: Mic },
  { id: 'applypilot', title: 'ApplyPilot', subtitle: 'Headless form submission', category: 'AGENTS', icon: Rocket },
  { id: 'negotiation', title: 'NegotiationSim', subtitle: 'Offer optimization AI', category: 'AGENTS', icon: Handshake },
  
  // COMMANDS
  { id: 'cmd-generate-cv', title: 'Generate CV', subtitle: 'Create tailored resume for role', category: 'COMMANDS', icon: Database },
  { id: 'cmd-interview-sim', title: 'Start Interview Simulation', subtitle: 'Voice AI mock interview', category: 'COMMANDS', icon: Play },
  { id: 'cmd-scan', title: 'Scan Opportunities', subtitle: 'Trigger global market search', category: 'COMMANDS', icon: Activity },
  { id: 'cmd-pipeline', title: 'Run Pipeline', subtitle: 'Execute full autonomous workflow', category: 'COMMANDS', icon: Settings },
  { id: 'cmd-deep-analysis', title: 'Deep Company Analysis', subtitle: 'Culture & financials intel', category: 'COMMANDS', icon: Bot },
  
  // NAVIGATION
  { id: 'nav-dashboard', title: 'Dashboard', subtitle: 'Main command center', category: 'NAVIGATION', icon: Map },
  { id: 'nav-analytics', title: 'Analytics', subtitle: 'Match intelligence metrics', category: 'NAVIGATION', icon: BarChart },
  { id: 'nav-pipeline', title: 'Pipeline', subtitle: 'Opportunity flow', category: 'NAVIGATION', icon: GitCommit },
  { id: 'nav-reports', title: 'Reports', subtitle: 'System activity logs', category: 'NAVIGATION', icon: Database },
  { id: 'nav-intel-map', title: 'Intelligence Map', subtitle: 'Global hiring hotspots', category: 'NAVIGATION', icon: Map },
  
  // COMPANIES
  { id: 'comp-openai', title: 'OpenAI', subtitle: 'San Francisco, CA · 98% Match', category: 'COMPANIES', icon: Bot },
  { id: 'comp-anthropic', title: 'Anthropic', subtitle: 'San Francisco, CA · 94% Match', category: 'COMPANIES', icon: Bot },
  { id: 'comp-perplexity', title: 'Perplexity', subtitle: 'San Francisco, CA · 91% Match', category: 'COMPANIES', icon: Bot },
  { id: 'comp-elevenlabs', title: 'ElevenLabs', subtitle: 'Remote · 88% Match', category: 'COMPANIES', icon: Bot },
  { id: 'comp-scale', title: 'Scale AI', subtitle: 'San Francisco, CA · 85% Match', category: 'COMPANIES', icon: Bot },
];

export default function CommandPalette({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const [search, setSearch] = useState('');
  
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  const fuse = useMemo(() => new Fuse(DATA, {
    keys: ['title', 'subtitle', 'category'],
    threshold: 0.3,
    includeMatches: true
  }), []);

  const results = search ? fuse.search(search).map(r => r.item) : DATA;

  // Group results
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof DATA>);

  const categories = ['AGENTS', 'COMMANDS', 'NAVIGATION', 'COMPANIES'];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Blur Overlay */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/60 pointer-events-none"
          />

          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-[720px]"
            >
              <Command 
                loop
                className="w-full bg-dash-surface backdrop-blur-3xl rounded-[24px] border border-white/10 shadow-[0_0_100px_rgba(91,111,255,0.15)] overflow-hidden flex flex-col"
                shouldFilter={false} // We handle filtering via Fuse.js
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setOpen(false);
                }}
              >
                {/* Search Input */}
                <div className="flex items-center px-4 border-b border-white/10 relative">
                  <Search className="w-5 h-5 text-dash-primary mr-3" />
                  <Command.Input 
                    autoFocus
                    placeholder="Search agents, jobs, commands, companies..."
                    value={search}
                    onValueChange={setSearch}
                    className="w-full bg-transparent border-none text-lg text-white placeholder-white/30 h-16 focus:outline-none focus:ring-0 font-sans"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-dash-primary to-transparent opacity-50"></div>
                </div>

                {/* Command List */}
                <Command.List className="max-h-[400px] overflow-y-auto scrollbar-hide p-2 py-4">
                  {results.length === 0 && (
                    <div className="py-14 text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                        <Activity className="w-6 h-6 text-white/30" />
                      </div>
                      <p className="text-white/50 font-mono text-sm">No neural matches detected.</p>
                      <p className="text-white/30 text-xs mt-2">Try scanning a different sector.</p>
                    </div>
                  )}

                  {categories.map(category => {
                    if (!groupedResults[category]) return null;
                    return (
                      <Command.Group 
                        key={category} 
                        heading={
                          <div className="px-4 py-2 text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">
                            {category}
                          </div>
                        }
                      >
                        {groupedResults[category].map((item, i) => {
                          const Icon = item.icon;
                          
                          // Custom highlighting for matching letters could be implemented here based on Fuse.js matches
                          // For now we'll do a simple dynamic highlighting if search exists
                          const titleParts = search ? item.title.split(new RegExp(`(${search})`, 'gi')) : [item.title];

                          return (
                            <Command.Item
                              key={item.id}
                              value={item.id}
                              onSelect={() => setOpen(false)}
                              className="group relative flex items-center gap-4 px-4 py-3 mx-2 my-1 rounded-xl cursor-pointer aria-selected:bg-white/[0.06]"
                            >
                              {/* Left Accent Bar */}
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-dash-primary rounded-r-full transition-all duration-200 group-aria-selected:h-1/2 shadow-[0_0_10px_rgba(91,111,255,0.8)] opacity-0 group-aria-selected:opacity-100"></div>

                              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-aria-selected:text-dash-primary group-aria-selected:bg-dash-primary/10 group-aria-selected:border-dash-primary/30 transition-colors shadow-inner">
                                <Icon className="w-5 h-5" />
                              </div>

                              <div className="flex flex-col flex-1">
                                <div className="text-white font-medium group-aria-selected:text-white transition-colors">
                                  {titleParts.map((part, i) => 
                                    part.toLowerCase() === search.toLowerCase() ? (
                                      <span key={i} className="text-dash-warning font-bold drop-shadow-[0_0_8px_rgba(255,184,77,0.8)]">{part}</span>
                                    ) : (
                                      <span key={i}>{part}</span>
                                    )
                                  )}
                                </div>
                                <div className="text-white/40 text-xs mt-0.5">{item.subtitle}</div>
                              </div>

                              <div className="opacity-0 group-aria-selected:opacity-100 transition-opacity">
                                <CornerDownLeft className="w-4 h-4 text-dash-primary" />
                              </div>

                              {/* Hover Glow Background */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-dash-primary/0 via-dash-primary/5 to-transparent opacity-0 group-aria-selected:opacity-100 pointer-events-none"></div>
                            </Command.Item>
                          );
                        })}
                      </Command.Group>
                    );
                  })}
                </Command.List>
                
                {/* Footer bar */}
                <div className="px-4 py-3 border-t border-white/10 bg-black/20 flex items-center justify-between">
                   <div className="flex items-center gap-4 text-xs text-white/30 font-mono">
                      <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">↑</kbd><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">↓</kbd> to navigate</span>
                      <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">↵</kbd> to select</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-dash-primary animate-pulse"></span>
                     <span className="text-[10px] text-dash-primary font-mono tracking-widest uppercase">Neural Search Active</span>
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
