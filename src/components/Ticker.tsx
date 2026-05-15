const agents = [
  { name: "JobScout", desc: "Real-time portal scanning" },
  { name: "FitScorer", desc: "Multidimensional job matching" },
  { name: "CVTailor", desc: "Context-aware resume surgery" },
  { name: "CultureAnalyst", desc: "Sentiment analysis on team vibes" },
  { name: "NetworkMapper", desc: "Relationship-first outreach" },
  { name: "VoiceCoach", desc: "Real-time interview simulation" },
  { name: "NegotiationSim", desc: "Adversarial salary roleplay" },
  { name: "ApplyPilot", desc: "Headless application automation" },
]

const Ticker = () => {
  return (
    <div className="py-6 border-y border-white/5 bg-[#07080F] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {agents.map((agent, j) => (
              <div key={j} className="flex items-center gap-6">
                <span className="font-syne font-bold text-xl text-white/90">{agent.name}</span>
                <span className="text-accent">◆</span>
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest whitespace-nowrap">{agent.desc}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ticker
