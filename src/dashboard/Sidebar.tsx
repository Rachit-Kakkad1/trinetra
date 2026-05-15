import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, Search, Zap, BarChart3, Settings, User,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export type Page = 'overview' | 'discover' | 'agents' | 'insights' | 'profile' | 'settings';

const navItems: { icon: typeof LayoutDashboard; label: string; page: Page }[] = [
  { icon: LayoutDashboard, label: 'Overview', page: 'overview' },
  { icon: Search,          label: 'Discover', page: 'discover' },
  { icon: Zap,             label: 'Agents',   page: 'agents' },
  { icon: BarChart3,       label: 'Insights', page: 'insights' },
  { icon: User,            label: 'Profile',  page: 'profile' },
  { icon: Settings,        label: 'Settings', page: 'settings' },
];

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export default function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col border-r border-white/[0.06] bg-[#09090b] relative z-20 select-none"
    >
      {/* Logo */}
      <Link to="/" className="h-14 flex items-center px-5 gap-3 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors">
        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-[11px] text-black tracking-tight flex-shrink-0">
          TO
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              className="font-semibold text-[15px] tracking-[-0.02em] text-white whitespace-nowrap"
            >
              Talent-OS
            </motion.span>
          )}
        </AnimatePresence>
      </Link>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.page;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page)}
              className={`flex items-center gap-3 h-10 rounded-lg transition-colors duration-150 relative overflow-hidden ${
                collapsed ? 'justify-center px-0' : 'px-3'
              } ${
                isActive
                  ? 'bg-white/[0.08] text-white'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
              }`}
            >
              <Icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={isActive ? 2 : 1.5} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[13px] font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-[#18181b] border border-white/[0.08] rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-colors z-30"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>

      {/* Profile */}
      <div className="p-3 border-t border-white/[0.06]">
        <div
          onClick={() => onNavigate('profile')}
          className={`flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] cursor-pointer transition-colors ${collapsed ? 'justify-center' : ''} ${activePage === 'profile' ? 'bg-white/[0.06]' : ''}`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
            RK
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col min-w-0"
              >
                <span className="text-[13px] font-medium text-white/90 truncate">Rachit Kakkad</span>
                <span className="text-[11px] text-white/30">Pro Plan</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
}
