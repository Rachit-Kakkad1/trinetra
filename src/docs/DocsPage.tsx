import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Copy, Check, CheckCircle2, Circle, Terminal, Download,
  Key, Cpu, Globe, ChevronDown, ChevronRight, ExternalLink, Github,
  Search, Command as CmdIcon, Zap, BookOpen, Code2, Rocket, Shield,
  Settings, BarChart3, AlertTriangle
} from 'lucide-react';

/* ═══════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════ */

function CodeBlock({ code, lang = 'bash', filename }: { code: string; lang?: string; filename?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0c0c0e] overflow-hidden group my-6">
      {filename && (
        <div className="flex items-center justify-between px-4 h-9 border-b border-white/[0.04] text-[11px]">
          <span className="font-mono text-white/25">{filename}</span>
          <span className="font-mono text-white/15 uppercase">{lang}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-5 overflow-x-auto text-[13px] font-mono leading-relaxed text-white/70 scrollbar-hide">
          <code>{code}</code>
        </pre>
        <button
          onClick={copy}
          className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/[0.08] transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}

function AnimatedTerminal({ lines }: { lines: string[] }) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let i = 0;
    const timer = setInterval(() => {
      if (i < lines.length) { setDisplayed(p => [...p, lines[i]]); i++; }
      else clearInterval(timer);
    }, 600);
    return () => clearInterval(timer);
  }, [lines]);

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0c0c0e] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-white/[0.04]">
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
        <span className="ml-3 text-[10px] font-mono text-white/20">talent-os</span>
      </div>
      <div className="p-5 font-mono text-[13px] space-y-1.5 min-h-[180px]">
        {displayed.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
            {line.startsWith('✓') ? (
              <><span className="text-emerald-400">✓</span><span className="text-white/60">{line.slice(2)}</span></>
            ) : line.startsWith('›') ? (
              <><span className="text-white/20">›</span><span className="text-white/50">{line.slice(2)}</span></>
            ) : (
              <span className="text-white/40">{line}</span>
            )}
          </motion.div>
        ))}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-white/20">›</span>
          <span className="w-[6px] h-[14px] bg-white/40 animate-pulse rounded-[1px]" />
        </div>
      </div>
    </div>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors">
        <span className="text-[14px] font-medium text-white/80">{title}</span>
        <ChevronDown className={`w-4 h-4 text-white/30 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-5 pb-5 text-[13px] text-white/50 leading-relaxed border-t border-white/[0.04] pt-4">{children}</div>}
    </div>
  );
}

/* ═══════════════════════════════════════════
   SIDEBAR SECTIONS
   ═══════════════════════════════════════════ */

const sections = [
  { id: 'overview',       label: 'Overview' },
  { id: 'prerequisites',  label: 'Prerequisites' },
  { id: 'ai-assistant',   label: 'AI Assistant' },
  { id: 'installation',   label: 'Installation' },
  { id: 'profile',        label: 'Profile Setup' },
  { id: 'providers',      label: 'AI Providers' },
  { id: 'first-scan',     label: 'First Scan' },
  { id: 'dashboard',      label: 'Dashboard' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
];

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -60% 0px' }
    );
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#07090F] text-white font-sans antialiased">
      {/* ── Top Nav ── */}
      <header className="sticky top-0 z-50 h-14 border-b border-white/[0.06] bg-[#07090F]/80 backdrop-blur-xl flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center text-[10px] font-bold text-black">TO</div>
            <span className="text-[14px] font-semibold tracking-[-0.02em]">Docs</span>
          </Link>
          <span className="text-white/15">|</span>
          <span className="text-[13px] text-white/40">Terminal Setup Guide</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/Rachit-Kakkad1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/[0.04] transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <Link to="/dashboard" className="h-8 px-3 rounded-lg bg-white/[0.06] border border-white/[0.06] text-[12px] text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors flex items-center gap-1.5">
            Dashboard <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto flex">
        {/* ── Left Sidebar ── */}
        <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-14 h-[calc(100vh-56px)] py-6 px-4 border-r border-white/[0.04] overflow-y-auto">
          <nav className="space-y-1">
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`block px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  activeSection === s.id ? 'text-white bg-white/[0.06] font-medium' : 'text-white/35 hover:text-white/60 hover:bg-white/[0.03]'
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 min-w-0 px-8 lg:px-16 py-12 max-w-3xl">

          {/* HERO */}
          <section id="overview" className="mb-20">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-mono text-white/25 uppercase tracking-widest">Getting Started</span>
                <span className="text-white/10">·</span>
                <span className="text-[11px] font-mono text-white/25">~8 min setup</span>
              </div>
              <h1 className="text-[36px] font-semibold tracking-[-0.04em] text-white leading-[1.15] mb-4">
                Terminal Setup &<br />AI Environment Guide
              </h1>
              <p className="text-[16px] text-white/40 leading-relaxed max-w-lg mb-8">
                Initialize your local AI career operating system. This guide walks you through
                installing Talent-OS, configuring AI providers, and running your first autonomous scan.
              </p>
              <div className="flex gap-2 mb-10">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] text-white/30">Node 18+</span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] text-white/30">macOS / Linux / Windows</span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] text-white/30">Git</span>
              </div>
            </motion.div>

            <AnimatedTerminal lines={[
              '› Initializing talent-os...',
              '✓ Neural agents loaded',
              '✓ AI providers verified',
              '✓ Career profile synced',
              '✓ Opportunity engine online',
              '› Environment ready.',
            ]} />
          </section>

          {/* SECTION 1 — Prerequisites */}
          <section id="prerequisites" className="mb-20">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white mb-2">Before You Start</h2>
            <p className="text-[14px] text-white/40 mb-6">Make sure you have the following installed.</p>

            <div className="space-y-2">
              {[
                { name: 'Node.js 18+', desc: 'JavaScript runtime', cmd: 'node --version' },
                { name: 'Git', desc: 'Version control', cmd: 'git --version' },
                { name: 'npm or pnpm', desc: 'Package manager', cmd: 'npm --version' },
                { name: 'GitHub Account', desc: 'For cloning the repo', cmd: null },
                { name: 'Terminal', desc: 'bash, zsh, or PowerShell', cmd: null },
              ].map(item => (
                <div key={item.name} className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400/60 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-[13px] text-white/80 font-medium">{item.name}</div>
                    <div className="text-[11px] text-white/30">{item.desc}</div>
                  </div>
                  {item.cmd && <code className="text-[11px] font-mono text-white/20 bg-white/[0.03] px-2 py-1 rounded">{item.cmd}</code>}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2 — AI Assistant */}
          <section id="ai-assistant" className="mb-20">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white mb-2">Install an AI Assistant</h2>
            <p className="text-[14px] text-white/40 mb-6">Choose your preferred AI coding assistant. Any of these work with Talent-OS.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: 'Claude Code', cmd: 'npm i -g @anthropic-ai/claude-code', difficulty: 'Easy', icon: Shield },
                { name: 'Gemini CLI', cmd: 'npm i -g @anthropic-ai/gemini-cli', difficulty: 'Easy', icon: Zap },
                { name: 'OpenCode', cmd: 'go install github.com/opencode/cli', difficulty: 'Medium', icon: Code2 },
                { name: 'Codex', cmd: 'npm i -g @openai/codex', difficulty: 'Easy', icon: Cpu },
              ].map(tool => {
                const Icon = tool.icon;
                return (
                  <div key={tool.name} className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-5 hover:bg-white/[0.03] hover:border-white/[0.1] transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 group-hover:text-white/50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-medium text-white/80">{tool.name}</div>
                        <div className="text-[11px] text-white/25">{tool.difficulty}</div>
                      </div>
                    </div>
                    <code className="text-[11px] font-mono text-white/40 bg-white/[0.03] px-2.5 py-1.5 rounded-md block overflow-x-auto">{tool.cmd}</code>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 3 — Installation */}
          <section id="installation" className="mb-20">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white mb-2">Install Talent-OS</h2>
            <p className="text-[14px] text-white/40 mb-6">Clone the repository and install dependencies.</p>

            <CodeBlock filename="terminal" lang="bash" code={`# Clone the repository
git clone https://github.com/Rachit-Kakkad1/trinetra.git talent-os
cd talent-os

# Install dependencies
npm install

# Start the development server
npm run dev`} />

            <p className="text-[13px] text-white/40 leading-relaxed mt-4">
              The dev server will start at <code className="text-white/60 bg-white/[0.04] px-1.5 py-0.5 rounded text-[12px]">http://localhost:5173</code>. 
              Open it in your browser to access the Talent-OS interface.
            </p>
          </section>

          {/* SECTION 4 — Profile Setup */}
          <section id="profile" className="mb-20">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white mb-2">Initialize Your Profile</h2>
            <p className="text-[14px] text-white/40 mb-6">Navigate to the onboarding flow to set up your AI career profile.</p>

            <div className="space-y-4">
              {[
                { step: '01', title: 'Navigate to onboarding', desc: 'Visit /onboarding or click "Get Started" from the landing page.' },
                { step: '02', title: 'Enter your identity', desc: 'Name, role, years of experience, and professional links.' },
                { step: '03', title: 'Upload your resume', desc: 'Drag and drop your PDF. The AI extracts skills, domains, and technologies.' },
                { step: '04', title: 'Verify skills', desc: 'Review AI-detected skills and adjust your proficiency graph.' },
                { step: '05', title: 'Set preferences', desc: 'Work type, salary expectations, industries, and target companies.' },
                { step: '06', title: 'Initialize AI memory', desc: 'Watch your 6 intelligence layers activate in real time.' },
              ].map(item => (
                <div key={item.step} className="flex gap-5 p-4 rounded-xl border border-white/[0.06] bg-white/[0.01]">
                  <span className="text-[12px] font-mono text-white/15 mt-0.5 flex-shrink-0">{item.step}</span>
                  <div>
                    <div className="text-[14px] font-medium text-white/80 mb-0.5">{item.title}</div>
                    <div className="text-[12px] text-white/35">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5 — AI Providers */}
          <section id="providers" className="mb-20">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white mb-2">AI Provider Setup</h2>
            <p className="text-[14px] text-white/40 mb-6">
              Configure at least one AI provider. Talent-OS routes between them automatically.
            </p>

            <div className="space-y-3">
              {[
                { name: 'Google Gemini', env: 'GEMINI_API_KEY', url: 'ai.google.dev', recommended: true },
                { name: 'Anthropic Claude', env: 'ANTHROPIC_API_KEY', url: 'console.anthropic.com', recommended: true },
                { name: 'OpenAI', env: 'OPENAI_API_KEY', url: 'platform.openai.com', recommended: false },
                { name: 'Groq', env: 'GROQ_API_KEY', url: 'console.groq.com', recommended: false },
              ].map(provider => (
                <div key={provider.name} className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-5 hover:bg-white/[0.03] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Key className="w-4 h-4 text-white/20" />
                      <span className="text-[14px] font-medium text-white/80">{provider.name}</span>
                    </div>
                    {provider.recommended && (
                      <span className="text-[10px] font-mono text-emerald-400/70 bg-emerald-400/[0.08] px-2 py-0.5 rounded">Recommended</span>
                    )}
                  </div>
                  <code className="text-[12px] font-mono text-white/40 bg-white/[0.03] px-3 py-2 rounded-lg block">
                    {provider.env}=sk-your-key-here
                  </code>
                  <div className="text-[11px] text-white/25 mt-2">
                    Get your key at <a href={`https://${provider.url}`} target="_blank" rel="noopener noreferrer" className="text-white/40 underline underline-offset-2 hover:text-white/60 transition-colors">{provider.url}</a>
                  </div>
                </div>
              ))}
            </div>

            <CodeBlock filename=".env.local" lang="env" code={`# Add your API keys here
GEMINI_API_KEY=your-gemini-key
ANTHROPIC_API_KEY=your-anthropic-key

# Optional
OPENAI_API_KEY=your-openai-key
GROQ_API_KEY=your-groq-key`} />
          </section>

          {/* SECTION 6 — First Scan */}
          <section id="first-scan" className="mb-20">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white mb-2">Run Your First Scan</h2>
            <p className="text-[14px] text-white/40 mb-6">Open the dashboard and trigger an autonomous opportunity scan.</p>

            <CodeBlock filename="terminal" lang="bash" code={`# Start the dashboard
npm run dev

# In the dashboard, use CMD+K to open the command palette
# Then type: "Scan Opportunities"

# Or navigate to the Agents page and click "Deploy All"`} />

            <AnimatedTerminal lines={[
              '› JobScout scanning 45+ portals...',
              '✓ LinkedIn — 34 new roles found',
              '✓ Indeed — 12 new roles found',
              '✓ AngelList — 8 new roles found',
              '› FitScorer analyzing matches...',
              '✓ Sr. AI Engineer @ Anthropic — 94% match',
              '✓ Staff FE @ Vercel — 91% match',
              '› Pipeline ready. 3 high-confidence matches.',
            ]} />
          </section>

          {/* SECTION 7 — Dashboard */}
          <section id="dashboard" className="mb-20">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white mb-2">Using the Dashboard</h2>
            <p className="text-[14px] text-white/40 mb-6">Your AI command center for managing the entire career pipeline.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: BarChart3, title: 'Overview', desc: 'Stats, agent status, analytics, and live feed.' },
                { icon: Search, title: 'Discover', desc: 'Browse and filter scanned opportunities.' },
                { icon: Zap, title: 'Agents', desc: 'Monitor, pause, and restart individual agents.' },
                { icon: BarChart3, title: 'Insights', desc: 'Match performance, skill demand, pipeline funnel.' },
                { icon: Settings, title: 'Settings', desc: 'API keys, notifications, automation config.' },
                { icon: CmdIcon, title: 'CMD+K', desc: 'Global command palette for instant actions.' },
              ].map(card => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-4 flex gap-3 hover:bg-white/[0.03] transition-colors">
                    <Icon className="w-4 h-4 text-white/20 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[13px] font-medium text-white/80">{card.title}</div>
                      <div className="text-[11px] text-white/30 mt-0.5">{card.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 8 — Troubleshooting */}
          <section id="troubleshooting" className="mb-20">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white mb-2">Troubleshooting</h2>
            <p className="text-[14px] text-white/40 mb-6">Common issues and their solutions.</p>

            <div className="space-y-2">
              <Accordion title="npm install fails with dependency conflicts">
                Try running with the legacy peer deps flag:
                <code className="block mt-2 text-[12px] font-mono text-white/40 bg-white/[0.03] px-3 py-2 rounded-lg">npm install --legacy-peer-deps</code>
              </Accordion>
              <Accordion title="Port 5173 is already in use">
                Kill the existing process or use a different port:
                <code className="block mt-2 text-[12px] font-mono text-white/40 bg-white/[0.03] px-3 py-2 rounded-lg">npm run dev -- --port 3000</code>
              </Accordion>
              <Accordion title="AI provider returns 401 Unauthorized">
                Double-check your API key in <code className="text-white/50">.env.local</code>. Ensure there are no extra spaces or quotes around the key value.
              </Accordion>
              <Accordion title="Resume upload doesn't parse">
                Ensure your file is PDF, DOC, or DOCX and under 10 MB. The parser uses Gemini by default — verify your Gemini API key is set.
              </Accordion>
              <Accordion title="Dashboard shows no data">
                Navigate to the Agents page and click "Deploy All" to start the scanning agents. First scan takes 30-60 seconds.
              </Accordion>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-white/[0.04] pt-8 mt-12 flex items-center justify-between text-[12px] text-white/20">
            <span>Talent-OS Docs · Built by Rachit Kakkad</span>
            <Link to="/dashboard" className="text-white/40 hover:text-white/60 transition-colors flex items-center gap-1">
              Open Dashboard <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </main>

        {/* ── Right Sidebar (TOC) ── */}
        <aside className="hidden xl:block w-48 flex-shrink-0 sticky top-14 h-[calc(100vh-56px)] py-8 px-4 overflow-y-auto">
          <div className="text-[11px] font-medium text-white/25 uppercase tracking-wider mb-4">On this page</div>
          <nav className="space-y-1">
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`block py-1.5 text-[12px] transition-colors border-l-2 pl-3 ${
                  activeSection === s.id
                    ? 'text-white/80 border-white'
                    : 'text-white/25 border-transparent hover:text-white/50 hover:border-white/[0.1]'
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
