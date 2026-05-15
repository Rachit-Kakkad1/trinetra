import React from 'react';
import Hero from '../Hero';
import AgentGrid from '../AgentGrid';
import Pipeline from '../Pipeline';
import Analytics from '../Analytics';
import CommandCenter from '../CommandCenter';
import Radar from '../Radar';
import GlobalMap from '../GlobalMap';

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <Hero />
      <AgentGrid />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <Analytics />
        </div>
        <CommandCenter />
      </div>
      <Pipeline />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Radar />
        <GlobalMap />
      </div>
    </div>
  );
}
