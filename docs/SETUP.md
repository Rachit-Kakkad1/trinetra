# Setup Guide: Initializing the Neural OS

Follow these steps to deploy talent-os on your local environment. This process is designed to be as seamless as the OS itself.

## 🛠️ Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.x or higher)
- **npm** or **pnpm**
- **Git**
- A high-resolution monitor (recommended for the cinematic UI)

## 📡 1. Clone the Intelligence

```bash
git clone https://github.com/your-org/talent-os.git
cd talent-os
```

## 📦 2. Install Dependencies

```bash
# Using npm
npm install

# Or pnpm (recommended for speed)
pnpm install
```

## 🔑 3. Configure Your Neural Keys

talent-os requires access to LLM providers to power its agents.

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and add your API keys:
   - `OPENAI_API_KEY`: For GPT-4 based orchestration.
   - `ANTHROPIC_API_KEY`: For Claude-based analytical tasks.
   - `VECTOR_DB_URL`: For the Neural Memory Graph (optional, defaults to local).

> See [API Provider Setup](API_PROVIDER_SETUP.md) for detailed key generation instructions.

## 🚀 4. Launch the System

```bash
# Start the development server
npm run dev
```

The system will initialize and become available at `http://localhost:5173`.

## 🛰️ 5. Verify the Connection

Once the dashboard loads:
1. Open the **Command Palette** (`Cmd+K`).
2. Type `System Status`.
3. Ensure all agents (JobScout, FitScorer, etc.) are reported as `Operational`.

---

*"Welcome to the future of career agency. The OS is now online."*
