# Project Structure

talent-os is organized for maximum modularity and scalability.

```text
talent-os/
├── src/
│   ├── components/       # Cinematic UI components
│   │   ├── dashboard/    # Neural Dashboard specific UI
│   │   ├── common/       # Shared UI primitives (Buttons, Inputs)
│   │   └── agents/       # Visual representations of AI agents
│   ├── agents/           # Core Agent Logic
│   │   ├── JobScout/     # Market surveillance logic
│   │   ├── FitScorer/    # Strategic alignment analysis
│   │   └── base/         # Abstract Agent classes & types
│   ├── memory/           # Neural Memory Graph logic
│   │   ├── vector/       # Vector database integrations
│   │   └── local/        # Local cache management
│   ├── hooks/            # Custom React hooks (useTheme, useAgents)
│   ├── utils/            # Shared utilities (Formatting, Crypto)
│   ├── types/            # Global TypeScript definitions
│   └── styles/           # Global CSS and Design System variables
├── docs/                 # Documentation Ecosystem
├── scripts/              # Build and CI/CD scripts
├── public/               # Static assets
└── tests/                # Comprehensive test suite
```

## Core Modules

### `src/agents/`
Each agent folder contains its own logic, prompt templates, and provider-specific configurations. This allows for independent scaling of agent intelligence.

### `src/components/`
We follow a **Component-Driven Development** approach. Each component is isolated and designed to be "cinematic" by default.

### `src/memory/`
This module handles the interface between the application and the vector database. It is responsible for embedding generation and semantic retrieval.

---

*"Structure follows strategy."*
