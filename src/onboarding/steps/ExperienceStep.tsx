import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Upload, FileText, CheckCircle2, Loader2 } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

export default function ExperienceStep({ onNext, onBack }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [parsing, setParsing] = useState(false);
  const [parsed, setParsed] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setParsing(true);
    // Simulate AI parsing
    setTimeout(() => {
      setParsing(false);
      setParsed(true);
    }, 2500);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const extractedData = [
    { label: 'Skills detected',    value: '14',     color: 'text-white' },
    { label: 'Domains',            value: '3',      color: 'text-white' },
    { label: 'Years mapped',       value: '3.5',    color: 'text-white' },
    { label: 'Technologies',       value: '18',     color: 'text-white' },
    { label: 'ATS compatibility',  value: '94%',    color: 'text-emerald-400' },
  ];

  return (
    <div className="max-w-lg mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">Step 2</span>
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white mt-3">
          Upload your experience
        </h2>
        <p className="text-[14px] text-white/40 mt-2 mb-10">
          Drop your resume and let the AI extract your career intelligence.
        </p>
      </motion.div>

      {/* Upload zone */}
      {!file ? (
        <div
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`rounded-xl border-2 border-dashed p-12 text-center transition-all cursor-pointer ${
            dragOver
              ? 'border-white/30 bg-white/[0.04]'
              : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.03]'
          }`}
          onClick={() => document.getElementById('resume-upload')?.click()}
        >
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <Upload className="w-8 h-8 text-white/20 mx-auto mb-4" />
          <div className="text-[14px] text-white/60 mb-1">Drop your resume here</div>
          <div className="text-[12px] text-white/25">PDF, DOC, or DOCX — max 10 MB</div>
        </div>
      ) : (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
          {/* File info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
              <FileText className="w-5 h-5 text-white/40" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] text-white/80 truncate">{file.name}</div>
              <div className="text-[11px] text-white/30">{(file.size / 1024).toFixed(0)} KB</div>
            </div>
            {parsing ? (
              <Loader2 className="w-5 h-5 text-white/40 animate-spin" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            )}
          </div>

          {/* Parsing state */}
          {parsing && (
            <div className="space-y-3">
              <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: 'easeInOut' }}
                  className="h-full bg-white/20 rounded-full"
                />
              </div>
              <p className="text-[12px] text-white/30 text-center font-mono">
                Neural profile analysis in progress...
              </p>
            </div>
          )}

          {/* Parsed results */}
          {parsed && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[11px] font-mono text-white/25 uppercase tracking-wider mb-3">
                Extracted Intelligence
              </div>
              <div className="grid grid-cols-2 gap-3">
                {extractedData.map(d => (
                  <div key={d.label} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[12px] text-white/40">{d.label}</span>
                    <span className={`text-[14px] font-semibold ${d.color}`}>{d.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Skip option */}
      {!file && (
        <button onClick={onNext} className="w-full mt-4 text-[12px] text-white/25 hover:text-white/40 transition-colors text-center py-2">
          Skip for now — I'll add it later
        </button>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12">
        <button onClick={onBack} className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button onClick={onNext} disabled={parsing} className="h-10 px-6 rounded-lg bg-white text-black text-[13px] font-medium flex items-center gap-2 hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
