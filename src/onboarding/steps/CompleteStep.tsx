import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const metrics = [
  { label: 'Profile Strength',        value: '92%', color: 'text-emerald-400' },
  { label: 'AI Readiness',            value: '100%', color: 'text-emerald-400' },
  { label: 'Opportunity Sync',        value: 'Active', color: 'text-emerald-400' },
  { label: 'Intelligence Confidence', value: 'High', color: 'text-white' },
];

export default function CompleteStep() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Success icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-20 h-20 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <Check className="w-8 h-8 text-emerald-400" />
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-[36px] md:text-[48px] font-semibold tracking-[-0.04em] text-white leading-[1.1]"
      >
        Intelligence Initialized
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-[16px] text-white/40 mt-4 max-w-md"
      >
        Your personalized AI career operating system is now active.
      </motion.p>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 gap-3 mt-12 w-full max-w-sm"
      >
        {metrics.map(m => (
          <div key={m.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-left">
            <div className="text-[11px] text-white/30 mb-1">{m.label}</div>
            <div className={`text-[18px] font-semibold ${m.color}`}>{m.value}</div>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/dashboard"
          className="mt-12 h-12 px-8 rounded-xl bg-white text-black text-[14px] font-medium flex items-center gap-3 hover:bg-white/90 active:scale-[0.98] transition-all inline-flex"
        >
          Enter Talent-OS <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
