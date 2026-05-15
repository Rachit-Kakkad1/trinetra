import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Github, Linkedin, Globe } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

function Field({ label, placeholder, icon, value, onChange, type = 'text' }: {
  label: string; placeholder: string; icon?: React.ReactNode; value: string;
  onChange: (v: string) => void; type?: string;
}) {
  return (
    <div>
      <label className="text-[12px] text-white/40 mb-2 block font-medium">{label}</label>
      <div className="relative">
        {icon && <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20">{icon}</div>}
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-11 rounded-lg border border-white/[0.08] bg-white/[0.03] text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors ${icon ? 'pl-10' : 'pl-4'} pr-4`}
        />
      </div>
    </div>
  );
}

export default function IdentityStep({ onNext, onBack }: Props) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [years, setYears] = useState('');
  const [location, setLocation] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');

  return (
    <div className="max-w-lg mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">Step 1</span>
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white mt-3">
          Who are you?
        </h2>
        <p className="text-[14px] text-white/40 mt-2 mb-10">
          Help your AI system understand your professional identity.
        </p>
      </motion.div>

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Full name" placeholder="Rachit Kakkad" value={name} onChange={setName} />
          <Field label="Current role" placeholder="AI Engineer" value={title} onChange={setTitle} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Years of experience" placeholder="3" value={years} onChange={setYears} type="number" />
          <Field label="Location" placeholder="Gujarat, India" value={location} onChange={setLocation} />
        </div>

        <div className="h-px bg-white/[0.04] my-2" />

        <Field label="GitHub" placeholder="https://github.com/username" value={github} onChange={setGithub} icon={<Github className="w-4 h-4" />} />
        <Field label="LinkedIn" placeholder="https://linkedin.com/in/username" value={linkedin} onChange={setLinkedin} icon={<Linkedin className="w-4 h-4" />} />
        <Field label="Portfolio" placeholder="https://yoursite.dev" value={portfolio} onChange={setPortfolio} icon={<Globe className="w-4 h-4" />} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12">
        <button onClick={onBack} className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button onClick={onNext} className="h-10 px-6 rounded-lg bg-white text-black text-[13px] font-medium flex items-center gap-2 hover:bg-white/90 active:scale-[0.98] transition-all">
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
