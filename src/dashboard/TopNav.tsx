import React, { useEffect, useState } from 'react';
import { Bell, Command, Search, Cpu } from 'lucide-react';
import CommandPalette from './CommandPalette';

export default function TopNav() {
  const [time, setTime] = useState(new Date());
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-20 border-b border-white/5 bg-dash-surface/50 backdrop-blur-md flex items-center justify-between px-8 z-10 sticky top-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <Cpu className="w-5 h-5 text-dash-primary relative z-10" />
            <div className="absolute inset-0 bg-dash-primary/30 blur-md rounded-full animate-pulse"></div>
          </div>
          <span className="font-mono text-xs text-dash-primary tracking-widest uppercase">System Online</span>
        </div>

        <div className="h-6 w-px bg-white/10"></div>

        <div className="font-mono text-xs text-white/40 tracking-widest uppercase flex items-center gap-2">
          <span>{time.toLocaleTimeString('en-US', { hour12: false })}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-dash-accent animate-pulse shadow-[0_0_8px_rgba(0,255,178,0.8)]"></span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div 
          className="relative group cursor-text"
          onClick={() => setSearchOpen(true)}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-white/40 group-hover:text-dash-primary transition-colors" />
          </div>
          <div className="flex items-center w-64 md:w-96 pl-10 pr-3 py-2 border border-white/10 rounded-lg bg-black/20 text-white/40 font-mono text-xs hover:bg-black/40 hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(91,111,255,0.1)]">
            Search agents, jobs, commands...
          </div>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-white/20 font-mono text-xs flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded">
              <Command className="w-3 h-3" /> K
            </span>
          </div>
        </div>

        <button className="relative p-2 text-white/40 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-dash-warning rounded-full border border-dash-bg shadow-[0_0_8px_rgba(255,184,77,0.8)]"></span>
        </button>
      </div>

      <CommandPalette open={searchOpen} setOpen={setSearchOpen} />
    </header>
  );
}
