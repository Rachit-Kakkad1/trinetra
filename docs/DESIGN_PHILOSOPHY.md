# Design Philosophy: Calm Intelligence

talent-os is designed to feel like an extension of the mind, not a distraction from it. We adhere to a set of core principles that define our "Neural Aesthetic."

## 1. Cinematic Minimalism
The interface should feel like a high-end cinematic experience. We use deep blacks (`#07090F`), subtle translucency, and intentional glows to create a sense of depth and focus. The UI is not a box; it's a window into an intelligence layer.

## 2. Spatial Interaction
Inspired by the future of spatial computing (Vision Pro, Arc), talent-os uses layers and elevation to represent priority. Elements don't just "appear"; they materialize with fluid, physics-based animations that respect the user's focus.

## 3. Invisible Complexity
The underlying system is a complex web of multi-agent orchestration and vector memory. The user should never feel this weight. We hide the "cogs" behind a clean, command-driven interface. Complexity is available on demand, but never forced.

## 4. Calm Feedback
AI can be noisy. talent-os is quiet. Notifications are subtle; agent status is represented by ambient glows rather than intrusive popups. We want the user to enter a "flow state" with their career strategy.

## 5. Typography as Architecture
We use **Space Grotesk** for headings to evoke a sense of future-tech and **Inter** for UI elements to ensure maximum legibility. **JetBrains Mono** is reserved for the "System Layer"—where the user interacts with the raw intelligence of the agents.

## 6. The "Iron Man" Principle
The UI should feel like a HUD (Heads-Up Display). Information is contextual, high-signal, and actionable. When an agent finds an opportunity, it's presented not as a "row in a database," but as a tactical briefing.

---

### Color Palette
- **The Void:** `#07090F` (Base Background)
- **The Pulse:** `#FF8A1F` (Primary Action)
- **The Glow:** `#FFB347` (Secondary/Status)
- **The Surface:** `rgba(15,18,28,0.75)` (Glassmorphism layer)

### Interaction Standards
- **Motion:** All transitions should use a custom `cubic-bezier(0.4, 0, 0.2, 1)` for a "premium" feel.
- **Micro-interactions:** Buttons should have a subtle haptic-like visual response (slight scale down on click, glow on hover).
- **Empty States:** Never show a blank screen. Show a "Scanning" or "Initializing" state to maintain the OS metaphor.
