import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Building2, Bookmark, ExternalLink, SlidersHorizontal, X } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Senior AI Engineer', company: 'Anthropic', location: 'San Francisco, CA', match: 94, salary: '₹45L – ₹65L', posted: '2h ago', tags: ['PyTorch', 'LLM', 'RLHF'], saved: false },
  { id: 2, title: 'Staff Frontend Engineer', company: 'Vercel', location: 'Remote', match: 91, salary: '₹40L – ₹55L', posted: '5h ago', tags: ['React', 'Next.js', 'TypeScript'], saved: true },
  { id: 3, title: 'ML Infrastructure Lead', company: 'Scale AI', location: 'San Francisco, CA', match: 88, salary: '₹50L – ₹70L', posted: '1d ago', tags: ['Kubernetes', 'MLOps', 'Python'], saved: false },
  { id: 4, title: 'AI/ML Engineer', company: 'Stripe', location: 'Remote', match: 85, salary: '₹35L – ₹50L', posted: '1d ago', tags: ['ML Systems', 'Go', 'Python'], saved: false },
  { id: 5, title: 'Research Scientist', company: 'OpenAI', location: 'San Francisco, CA', match: 82, salary: '₹60L – ₹90L', posted: '2d ago', tags: ['Transformers', 'Research', 'Python'], saved: true },
  { id: 6, title: 'Platform Engineer', company: 'Perplexity', location: 'San Francisco, CA', match: 79, salary: '₹38L – ₹52L', posted: '3d ago', tags: ['Infra', 'LLM', 'Rust'], saved: false },
  { id: 7, title: 'Full Stack Developer', company: 'ElevenLabs', location: 'Remote', match: 76, salary: '₹30L – ₹45L', posted: '3d ago', tags: ['React', 'Node.js', 'Audio ML'], saved: false },
];

const filters = ['All', 'Remote', '90%+ Match', 'Saved'];

export default function DiscoverPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = jobs.filter(j => {
    if (activeFilter === 'Remote' && j.location !== 'Remote') return false;
    if (activeFilter === '90%+ Match' && j.match < 90) return false;
    if (activeFilter === 'Saved' && !j.saved) return false;
    if (query && !j.title.toLowerCase().includes(query.toLowerCase()) && !j.company.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-white">Discover</h1>
        <p className="text-[14px] text-white/40 mt-1">
          {jobs.length} opportunities scanned across 45+ portals
        </p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search roles, companies..."
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-white/[0.08] bg-white/[0.02] text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-3.5 h-3.5 text-white/30 hover:text-white/60" />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`h-10 px-4 rounded-lg text-[12px] font-medium transition-colors border ${
                activeFilter === f
                  ? 'bg-white/[0.08] text-white border-white/[0.1]'
                  : 'text-white/40 border-white/[0.06] hover:text-white/60 hover:border-white/[0.1]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {filtered.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="group flex items-center gap-5 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all cursor-pointer"
          >
            {/* Company initial */}
            <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center text-[13px] font-bold text-white/40 flex-shrink-0 group-hover:text-white/60 transition-colors">
              {job.company[0]}
            </div>

            {/* Main info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-medium text-white/90 group-hover:text-white transition-colors truncate">
                  {job.title}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1 text-[12px] text-white/30">
                <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{job.company}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                <span>{job.posted}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
              {job.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[10px] font-mono text-white/25 px-2 py-0.5 rounded border border-white/[0.06]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Salary */}
            <div className="text-[12px] text-white/40 font-mono flex-shrink-0 hidden md:block w-28 text-right">
              {job.salary}
            </div>

            {/* Match */}
            <div className={`text-[15px] font-semibold tabular-nums flex-shrink-0 w-12 text-right ${
              job.match >= 90 ? 'text-emerald-400' : job.match >= 80 ? 'text-white/60' : 'text-white/40'
            }`}>
              {job.match}%
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/[0.06] transition-colors">
                <Bookmark className={`w-4 h-4 ${job.saved ? 'text-amber-400 fill-amber-400' : 'text-white/30'}`} />
              </button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/[0.06] transition-colors">
                <ExternalLink className="w-4 h-4 text-white/30" />
              </button>
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[14px] text-white/30">No opportunities match your criteria.</p>
            <button onClick={() => { setQuery(''); setActiveFilter('All'); }} className="text-[13px] text-white/50 mt-2 hover:text-white transition-colors">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
