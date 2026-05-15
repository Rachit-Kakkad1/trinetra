import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Orb */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-16"
      >
        <div className="w-32 h-32 rounded-full relative">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5B6FFF]/20 to-[#00E5FF]/10 blur-2xl"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-white/[0.08] border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-6 rounded-full border border-white/[0.06]"
          />
          <div className="absolute inset-10 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/80" />
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[36px] md:text-[48px] font-semibold tracking-[-0.04em] text-white leading-[1.1] max-w-xl"
      >
        Initialize Your Career Intelligence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-[16px] text-white/40 mt-6 max-w-md leading-relaxed"
      >
        Talent-OS builds a personalized AI operating system around your experience, ambitions, and opportunities.
      </motion.p>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        onClick={onNext}
        className="mt-12 h-12 px-8 rounded-xl bg-white text-black text-[14px] font-medium flex items-center gap-3 hover:bg-white/90 active:scale-[0.98] transition-all"
      >
        Begin Initialization <ArrowRight className="w-4 h-4" />
      </motion.button>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-[12px] text-white/20 font-mono"
      >
        Takes about 3 minutes
      </motion.span>
    </div>
  );
}
