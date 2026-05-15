import React, { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import Hero from './Hero';
import AgentGrid from './AgentGrid';
import Pipeline from './Pipeline';
import Analytics from './Analytics';
import CommandCenter from './CommandCenter';
import Radar from './Radar';
import GlobalMap from './GlobalMap';

export default function DashboardLayout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enable Lenis smooth scrolling for the dashboard container
    // We can just use native CSS smooth scroll for this container or framer-motion if needed
  }, []);

  return (
    <div className="flex h-screen bg-dash-bg text-white overflow-hidden font-sans selection:bg-dash-primary selection:text-white">
      {/* Global Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-dash-primary/20 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-dash-secondary/10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <Sidebar />
      
      <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
        <TopNav />
        
        <main 
          ref={containerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth perspective-1000"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-[1600px] mx-auto px-6 pb-32 space-y-32 mt-10">
            <Hero />
            <AgentGrid />
            <Pipeline />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              <Analytics />
              <CommandCenter />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              <Radar />
              <GlobalMap />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
