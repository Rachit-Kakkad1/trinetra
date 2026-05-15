import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeStep from './steps/WelcomeStep';
import IdentityStep from './steps/IdentityStep';
import ExperienceStep from './steps/ExperienceStep';
import SkillsStep from './steps/SkillsStep';
import PreferencesStep from './steps/PreferencesStep';
import MemoryStep from './steps/MemoryStep';
import CompleteStep from './steps/CompleteStep';

const STEPS = ['Welcome', 'Identity', 'Experience', 'Skills', 'Preferences', 'Memory', 'Complete'] as const;
type Step = typeof STEPS[number];

const stepLabels: Record<Step, string> = {
  Welcome: '',
  Identity: 'Identity',
  Experience: 'Experience',
  Skills: 'Skills',
  Preferences: 'Preferences',
  Memory: 'AI Memory',
  Complete: '',
};

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const step = STEPS[currentStep];

  const next = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const back = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  // Progress bar steps (exclude Welcome and Complete)
  const progressSteps = STEPS.filter(s => s !== 'Welcome' && s !== 'Complete');
  const progressIndex = progressSteps.indexOf(step as any);

  return (
    <div className="min-h-screen bg-[#07090F] text-white font-sans antialiased selection:bg-white/20 flex flex-col relative overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[20%] w-[500px] h-[500px] bg-[#5B6FFF]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] bg-[#00E5FF]/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Progress bar — only show for middle steps */}
      {step !== 'Welcome' && step !== 'Complete' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="max-w-2xl mx-auto px-8 pt-8">
            <div className="flex items-center gap-2">
              {progressSteps.map((s, i) => (
                <React.Fragment key={s}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      i < progressIndex ? 'bg-white' :
                      i === progressIndex ? 'bg-white' :
                      'bg-white/[0.15]'
                    }`} />
                    <span className={`text-[11px] font-medium transition-colors duration-300 hidden sm:inline ${
                      i <= progressIndex ? 'text-white/70' : 'text-white/20'
                    }`}>
                      {stepLabels[s]}
                    </span>
                  </div>
                  {i < progressSteps.length - 1 && (
                    <div className={`flex-1 h-px transition-colors duration-500 ${
                      i < progressIndex ? 'bg-white/30' : 'bg-white/[0.06]'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Step content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            {step === 'Welcome' && <WelcomeStep onNext={next} />}
            {step === 'Identity' && <IdentityStep onNext={next} onBack={back} />}
            {step === 'Experience' && <ExperienceStep onNext={next} onBack={back} />}
            {step === 'Skills' && <SkillsStep onNext={next} onBack={back} />}
            {step === 'Preferences' && <PreferencesStep onNext={next} onBack={back} />}
            {step === 'Memory' && <MemoryStep onNext={next} onBack={back} />}
            {step === 'Complete' && <CompleteStep />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
