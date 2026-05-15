import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Command, Bell, BookOpen } from 'lucide-react';
import CommandPalette from './CommandPalette';

export default function TopNav() {
  const [time, setTime] = useState(new Date());
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const greeting = (() => {
    const h = time.getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  })();

  return (
    <header className="h-14 border-b border-white/[0.06] flex items-center justify-between px-8 flex-shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-[15px] text-white/50 font-medium">
          {greeting}, <span className="text-white">Rachit</span>
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Search trigger */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 h-8 px-3 rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/30 hover:text-white/50 hover:border-white/[0.12] transition-colors text-[13px]"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Search...</span>
          <kbd className="hidden md:flex items-center gap-0.5 ml-6 text-[10px] text-white/20 font-mono">
            <Command className="w-2.5 h-2.5" />K
          </kbd>
        </button>

        {/* Docs */}
        <Link to="/docs" className="flex items-center gap-1.5 h-8 px-3 rounded-lg text-white/30 hover:text-white/50 hover:bg-white/[0.04] transition-colors text-[12px]">
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Docs</span>
        </Link>

        {/* Notifications */}
        <button className="relative w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/[0.04] transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
        </button>

        {/* Time */}
        <span className="text-[12px] font-mono text-white/20 tabular-nums hidden lg:block">
          {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      <CommandPalette open={searchOpen} setOpen={setSearchOpen} />
    </header>
  );
}
