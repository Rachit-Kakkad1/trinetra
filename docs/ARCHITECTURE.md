# Architecture: The Neural Engine

talent-os is built on a modular, event-driven architecture designed for high-concurrency agent orchestration and low-latency UI updates.

## 🏗️ System Overview

The system is divided into four primary layers:

### 1. The Cinematic UI Layer (Frontend)
Built with React and Framer Motion, this layer handles the visual representation of the OS. It uses a **Spatial State Model** to manage transitions between the Dashboard, Pipeline, and Command Center.

### 2. The Intelligence Orchestration Layer (Middleware)
This is the "brain" of the OS. It routes tasks to specialized agents and manages multi-provider LLM calls. It ensures that `JobScout` doesn't conflict with `ApplyPilot` and that memory is shared across the network.

### 3. The Neural Profile Layer (Memory)
A local-first vector database that stores the user's career DNA. It uses embeddings to represent skills, experiences, and aspirations, allowing agents to perform semantic searches against the user's history.

### 4. The Provider Integration Layer (Connectivity)
An abstraction layer that interfaces with external APIs (LinkedIn, Indeed, GitHub) and LLM providers (OpenAI, Anthropic, Ollama). It handles rate limiting, authentication, and payload normalization.

## 📡 Communication Flow

1. **Input:** User issues a command via the `Cmd+K` palette or Terminal.
2. **Dispatch:** The Intelligence Layer parses the intent and dispatches it to the relevant Agent.
3. **Execution:** The Agent queries the Neural Profile and/or external APIs.
4. **Synthesis:** The Intelligence Layer synthesizes the results and updates the UI via a WebSocket-powered state sync.
5. **Memory:** The interaction is embedded and stored in the Neural Profile for future context.

## 🛠️ Tech Stack Rationale

- **TypeScript:** For structural integrity across the agent network.
- **Node.js:** For high-performance I/O and easy integration with LLM SDKs.
- **Vector DB:** For semantic career intelligence.
- **Framer Motion:** For the "Apple-grade" animation quality.

## 🔒 Security Architecture

- **Local-First Memory:** Vector indices are stored locally by default.
- **Key Rotation:** Automatic rotation of LLM provider keys.
- **Sandbox Execution:** Agents operate in a restricted environment to prevent unintended side effects.

---

*"Architecture is the art of organizing complexity without losing the soul of the product."*
