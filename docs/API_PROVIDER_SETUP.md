# API Provider Setup

talent-os is a multi-provider system. To unlock its full potential, you need to configure connections to elite AI models and professional data sources.

## 🧠 LLM Providers

### OpenAI
1. Go to [platform.openai.com](https://platform.openai.com).
2. Create an API Key with `gpt-4` access.
3. Add to `.env`: `OPENAI_API_KEY=sk-...`
*Used for: Core orchestration, FitScorer rationales.*

### Anthropic
1. Go to [console.anthropic.com](https://console.anthropic.com).
2. Create an API Key with `claude-3` access.
3. Add to `.env`: `ANTHROPIC_API_KEY=sk-ant-...`
*Used for: CVTailor storytelling, VoiceCoach simulations.*

### Local (Ollama)
1. Install [Ollama](https://ollama.ai).
2. Pull the required models: `ollama pull llama3`.
3. Add to `.env`: `LOCAL_AI_ENABLED=true`.
*Used for: High-privacy tasks, local neural memory processing.*

## 🌐 Professional Data Sources

### LinkedIn (via Proxy)
1. Obtain an API token from your preferred professional data provider.
2. Add to `.env`: `PROFESSIONAL_DATA_KEY=...`

### GitHub (Optional)
1. Create a Personal Access Token (PAT) with `read:user` permissions.
2. Add to `.env`: `GITHUB_TOKEN=...`
*Used for: Deep engineering profile analysis.*

---

*"Intelligence is only as good as its data. Choose your providers with intention."*
