# FAQ: Frequently Asked Questions

## 🛰️ General

### Is talent-os a job board?
No. talent-os is an **AI-native Career Operating System**. It is the infrastructure that helps you navigate job boards, manage your professional identity, and orchestrate career moves with AI-backed intelligence.

### Is it free?
The core talent-os platform is open-source. You only pay for the API credits you use with your chosen LLM providers (OpenAI, Anthropic, etc.).

### Can I run it locally?
Yes. talent-os is designed with a **local-first** philosophy. Your neural profile and agent configurations stay on your machine.

## 🧠 Intelligence

### How does FitScorer work?
FitScorer uses semantic embedding models to compare your Neural Profile against job descriptions. It looks beyond keyword matching, analyzing the "intent" and "complexity" of your experience against the role's requirements.

### Are the agents truly autonomous?
talent-os supports varying levels of agency. By default, agents are **Co-pilots**—they prepare drafts and suggest actions. In **Advanced Mode**, you can authorize agents to perform tasks like discovery and initial screening autonomously.

## 🔒 Privacy & Security

### Does talent-os sell my data?
Never. talent-os is not a platform for recruiters; it is a tool for candidates. We do not have a central database of user profiles. Your data is yours.

### How are my API keys stored?
API keys are stored in a local `.env` file and are never sent to our servers. We recommend using a system-level secret manager if you are deploying talent-os in a shared environment.

---

*"Knowledge is the only resource that increases when shared."*
