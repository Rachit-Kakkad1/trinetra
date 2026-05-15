# AI Agents: The talent-os Orchestration Layer

talent-os is powered by a decentralized network of specialized AI agents. Each agent is a discrete intelligence unit designed to handle a specific phase of the career lifecycle.

## Agent Directory

### 🕵️ JobScout
**Role:** Market Surveillance & Discovery
**Function:** Continuously monitors job boards, company career pages, and social signals. It doesn't just look for "keywords"; it looks for intent.
**Intelligence Flow:** Scrape -> Normalize -> Categorize -> Notify.

### 🎯 FitScorer
**Role:** Strategic Alignment Analysis
**Function:** Performs a multi-dimensional comparison between your Neural Profile and a job description. It identifies skill gaps, culture-fit markers, and "hidden" requirements.
**Output:** A "Fit Score" (0-100) with a detailed rationale.

### 📝 CVTailor
**Role:** Document Evolution
**Function:** Dynamically adjusts your resume/CV for every specific application. It maintains the integrity of your experience while optimizing the narrative for the target role's specific needs.
**Focus:** ATS compatibility + Human-centric storytelling.

### 🗣️ VoiceCoach
**Role:** Interview Intelligence
**Function:** Generates mock interview scenarios based on the company's historical interview patterns and the specific job description. Provides real-time feedback on tone, clarity, and impact.

### 🚀 ApplyPilot
**Role:** Workflow Automation
**Function:** Manages the technical logistics of applications. It tracks deadlines, manages follow-ups, and ensures your application package is delivered through the most effective channel.

### 🌐 NetworkMapper
**Role:** Relationship Intelligence
**Function:** Analyzes your professional network to find the shortest path to a referral. It identifies "warm" connections and suggests personalized outreach strategies.

### 📡 OpportunityRadar
**Role:** Predictive Analytics
**Function:** Forecasts company growth, hiring trends, and skill demand shifts. It tells you where the market is going, not where it's been.

### 💰 NegotiationAI
**Role:** Value Optimization
**Function:** Provides real-time market data on compensation. It helps you draft counter-offers and scripts for salary negotiations based on your specific "Fit Score" and market leverage.

## Orchestration Logic

Agents in talent-os communicate via the **Intelligence Bus**. When `JobScout` finds a high-match role, it automatically triggers `FitScorer`. If the score exceeds a user-defined threshold (e.g., >85), `CVTailor` prepares a draft, and the user receives a "Tactical Briefing" in the Command Center.

## Memory Integration

Every agent interaction is fed back into the **Neural Memory Graph**. This ensures that agents learn from your feedback. If you reject a `FitScorer` rationale, the system adjusts its alignment model for future evaluations.

---

*"Agency is the bridge between intelligence and impact."*
