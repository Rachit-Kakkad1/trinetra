import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Key, Bell, Palette, Shield, Globe, ChevronRight, Check, ExternalLink } from 'lucide-react';

/* ── Toggle Component ── */
function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-10 h-[22px] rounded-full transition-colors ${checked ? 'bg-white' : 'bg-white/[0.1]'}`}
    >
      <motion.div
        animate={{ x: checked ? 20 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-[3px] w-4 h-4 rounded-full ${checked ? 'bg-[#09090b]' : 'bg-white/40'}`}
      />
    </button>
  );
}

/* ── Section Component ── */
function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
      <div className="px-6 py-4 border-b border-white/[0.04]">
        <h3 className="text-[14px] font-semibold text-white/80">{title}</h3>
      </div>
      <div className="divide-y divide-white/[0.04]">{children}</div>
    </div>
  );
}

function SettingsRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div>
        <div className="text-[13px] text-white/80">{label}</div>
        {description && <div className="text-[11px] text-white/30 mt-0.5">{description}</div>}
      </div>
      {children}
    </div>
  );
}

export default function SettingsPage() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [autoApply, setAutoApply] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const apiKeys = [
    { name: 'Google Gemini', status: 'connected', model: 'gemini-1.5-flash' },
    { name: 'Anthropic Claude', status: 'connected', model: 'claude-3.5-sonnet' },
    { name: 'Groq', status: 'not connected', model: '—' },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-white">Settings</h1>
        <p className="text-[14px] text-white/40 mt-1">Manage your account and preferences</p>
      </div>

      {/* Profile */}
      <SettingsSection title="Profile">
        <div className="px-6 py-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-[18px] font-bold flex-shrink-0">
            RK
          </div>
          <div className="flex-1">
            <div className="text-[15px] font-medium text-white">Rachit Kakkad</div>
            <div className="text-[12px] text-white/30 mt-0.5">rachit@talent-os.dev · Pro Plan</div>
          </div>
          <button className="h-8 px-4 rounded-lg border border-white/[0.08] text-[12px] text-white/50 hover:text-white/80 hover:border-white/[0.15] transition-colors">
            Edit
          </button>
        </div>
      </SettingsSection>

      {/* API Keys */}
      <SettingsSection title="API Providers">
        {apiKeys.map(key => (
          <div key={key.name} className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <Key className="w-4 h-4 text-white/20" />
              <div>
                <div className="text-[13px] text-white/80">{key.name}</div>
                <div className="text-[11px] text-white/30 font-mono mt-0.5">{key.model}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {key.status === 'connected' ? (
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <Check className="w-3 h-3" /> Connected
                </span>
              ) : (
                <button className="h-7 px-3 rounded-md border border-white/[0.08] text-[11px] text-white/40 hover:text-white/70 transition-colors">
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </SettingsSection>

      {/* Notifications */}
      <SettingsSection title="Notifications">
        <SettingsRow label="Email notifications" description="Get notified when agents find high-match roles">
          <Toggle checked={emailNotifs} onChange={() => setEmailNotifs(!emailNotifs)} />
        </SettingsRow>
        <SettingsRow label="Push notifications" description="Browser notifications for real-time updates">
          <Toggle checked={pushNotifs} onChange={() => setPushNotifs(!pushNotifs)} />
        </SettingsRow>
        <SettingsRow label="Weekly digest" description="Summary report every Monday morning">
          <Toggle checked={weeklyReport} onChange={() => setWeeklyReport(!weeklyReport)} />
        </SettingsRow>
      </SettingsSection>

      {/* Automation */}
      <SettingsSection title="Automation">
        <SettingsRow label="Auto-apply mode" description="Let ApplyPilot submit applications without confirmation">
          <Toggle checked={autoApply} onChange={() => setAutoApply(!autoApply)} />
        </SettingsRow>
        <SettingsRow label="Match threshold" description="Minimum score for auto-processing">
          <span className="text-[13px] font-mono text-white/50">85%</span>
        </SettingsRow>
        <SettingsRow label="Target regions" description="Preferred job locations">
          <span className="text-[12px] text-white/40">Remote, India, US</span>
        </SettingsRow>
      </SettingsSection>

      {/* Appearance */}
      <SettingsSection title="Appearance">
        <SettingsRow label="Dark mode" description="Use dark theme across the dashboard">
          <Toggle checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </SettingsRow>
      </SettingsSection>

      {/* Danger zone */}
      <div className="rounded-xl border border-red-500/10 bg-red-500/[0.02] p-6">
        <h3 className="text-[14px] font-semibold text-red-400/80 mb-1">Danger Zone</h3>
        <p className="text-[12px] text-white/30 mb-4">Irreversible actions</p>
        <div className="flex gap-3">
          <button className="h-8 px-4 rounded-lg border border-red-500/20 text-[12px] text-red-400/70 hover:bg-red-500/10 transition-colors">
            Delete all data
          </button>
          <button className="h-8 px-4 rounded-lg border border-red-500/20 text-[12px] text-red-400/70 hover:bg-red-500/10 transition-colors">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
