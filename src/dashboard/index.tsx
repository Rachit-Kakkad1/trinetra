import React, { useState } from 'react';
import Sidebar, { type Page } from './Sidebar';
import TopNav from './TopNav';
import OverviewPage from './pages/OverviewPage';
import DiscoverPage from './pages/DiscoverPage';
import AgentsPage from './pages/AgentsPage';
import InsightsPage from './pages/InsightsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

const pageComponents: Record<Page, React.FC> = {
  overview: OverviewPage,
  discover: DiscoverPage,
  agents:   AgentsPage,
  insights: InsightsPage,
  profile:  ProfilePage,
  settings: SettingsPage,
};

export default function DashboardLayout() {
  const [activePage, setActivePage] = useState<Page>('overview');
  const ActivePage = pageComponents[activePage];

  return (
    <div className="flex h-screen bg-[#09090b] text-white overflow-hidden font-sans antialiased selection:bg-white/20">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <TopNav />

        <main className="flex-1 overflow-y-auto overflow-x-hidden" key={activePage}>
          <div className="max-w-[1400px] mx-auto px-8 py-8">
            <ActivePage />
            <div className="h-12" />
          </div>
        </main>
      </div>
    </div>
  );
}
