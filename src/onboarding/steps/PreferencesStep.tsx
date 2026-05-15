import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

type Option = { label: string; description?: string };

function SelectGrid({ title, options, selected, onToggle, multi = true }: {
  title: string; options: Option[]; selected: Set<string>; onToggle: (v: string) => void; multi?: boolean;
}) {
  return (
    <div>
      <div className="text-[12px] text-white/40 mb-3 font-medium">{title}</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {options.map(opt => {
          const isSelected = selected.has(opt.label);
          return (
            <button
              key={opt.label}
              onClick={() => onToggle(opt.label)}
              className={`relative p-4 rounded-xl border text-left transition-all duration-150 ${
                isSelected
                  ? 'bg-white/[0.06] border-white/[0.15] text-white'
                  : 'bg-white/[0.01] border-white/[0.06] text-white/40 hover:text-white/60 hover:border-white/[0.1]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-black" />
                </div>
              )}
              <div className="text-[13px] font-medium">{opt.label}</div>
              {opt.description && <div className="text-[11px] text-white/20 mt-1">{opt.description}</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PreferencesStep({ onNext, onBack }: Props) {
  const [workType, setWorkType] = useState<Set<string>>(new Set(['Remote']));
  const [companyType, setCompanyType] = useState<Set<string>>(new Set(['Startup']));
  const [industries, setIndustries] = useState<Set<string>>(new Set(['AI/ML']));
  const [salary, setSalary] = useState(50);

  const toggleIn = (set: Set<string>, value: string): Set<string> => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value); else next.add(value);
    return next;
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">Step 4</span>
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white mt-3">
          What are you looking for?
        </h2>
        <p className="text-[14px] text-white/40 mt-2 mb-10">
          These preferences power your opportunity matching engine.
        </p>
      </motion.div>

      <div className="space-y-8">
        <SelectGrid
          title="Work type"
          options={[
            { label: 'Remote', description: 'Work from anywhere' },
            { label: 'Hybrid', description: '2-3 days in office' },
            { label: 'On-site', description: 'Full-time in office' },
          ]}
          selected={workType}
          onToggle={v => setWorkType(toggleIn(workType, v))}
        />

        <SelectGrid
          title="Company stage"
          options={[
            { label: 'Startup', description: 'Early to growth' },
            { label: 'Scale-up', description: 'Series B+' },
            { label: 'Enterprise', description: 'Public / large' },
          ]}
          selected={companyType}
          onToggle={v => setCompanyType(toggleIn(companyType, v))}
        />

        <SelectGrid
          title="Industries"
          options={[
            { label: 'AI/ML' },
            { label: 'Fintech' },
            { label: 'Developer Tools' },
            { label: 'Healthcare' },
            { label: 'SaaS' },
            { label: 'Crypto / Web3' },
          ]}
          selected={industries}
          onToggle={v => setIndustries(toggleIn(industries, v))}
        />

        {/* Salary slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[12px] text-white/40 font-medium">Expected compensation (LPA)</span>
            <span className="text-[14px] font-semibold text-white font-mono">₹{salary}L</span>
          </div>
          <input
            type="range"
            min={5}
            max={150}
            step={5}
            value={salary}
            onChange={e => setSalary(Number(e.target.value))}
            className="w-full h-1 bg-white/[0.08] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex items-center justify-between mt-2 text-[10px] text-white/15 font-mono">
            <span>₹5L</span>
            <span>₹150L</span>
          </div>
        </div>
      </div>

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
