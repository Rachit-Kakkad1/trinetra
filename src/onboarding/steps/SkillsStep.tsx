import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, X, Plus } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const categories = [
  { name: 'AI / ML', skills: ['Python', 'PyTorch', 'TensorFlow', 'LLMs', 'RLHF', 'NLP', 'Computer Vision', 'RAG'] },
  { name: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vue', 'Svelte'] },
  { name: 'Backend', skills: ['Node.js', 'Go', 'Rust', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Redis'] },
  { name: 'Cloud', skills: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Vercel'] },
  { name: 'Systems', skills: ['Linux', 'Networking', 'Distributed Systems', 'CUDA', 'C++'] },
  { name: 'Leadership', skills: ['Team Lead', 'Architecture', 'Mentoring', 'Product Strategy'] },
];

export default function SkillsStep({ onNext, onBack }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set(['Python', 'PyTorch', 'React', 'TypeScript', 'LLMs', 'Next.js', 'Docker', 'AWS']));
  const [customSkill, setCustomSkill] = useState('');

  const toggle = (skill: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(skill)) next.delete(skill); else next.add(skill);
      return next;
    });
  };

  const addCustom = () => {
    if (customSkill.trim()) {
      setSelected(prev => new Set(prev).add(customSkill.trim()));
      setCustomSkill('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">Step 3</span>
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white mt-3">
          Verify your skills
        </h2>
        <p className="text-[14px] text-white/40 mt-2 mb-2">
          We detected these from your profile. Tap to adjust.
        </p>
        <p className="text-[12px] text-white/20 mb-10 font-mono">{selected.size} skills selected</p>
      </motion.div>

      <div className="space-y-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.05 }}
          >
            <div className="text-[11px] text-white/25 font-medium uppercase tracking-wider mb-3">{cat.name}</div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => {
                const isSelected = selected.has(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggle(skill)}
                    className={`h-8 px-3.5 rounded-lg text-[12px] font-medium border transition-all duration-150 ${
                      isSelected
                        ? 'bg-white/[0.1] border-white/[0.2] text-white'
                        : 'bg-transparent border-white/[0.06] text-white/30 hover:text-white/50 hover:border-white/[0.1]'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Custom skill input */}
        <div className="flex gap-2 mt-4">
          <input
            value={customSkill}
            onChange={e => setCustomSkill(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addCustom()}
            placeholder="Add a custom skill..."
            className="flex-1 h-9 px-3 rounded-lg border border-white/[0.06] bg-white/[0.02] text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-white/[0.15]"
          />
          <button onClick={addCustom} className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/[0.1] transition-colors">
            <Plus className="w-4 h-4" />
          </button>
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
