# Troubleshooting: System Recovery

Even the most advanced systems encounter friction. Use this guide to resolve common initialization and runtime issues.

## 🌑 Dashboard is Blank

- **Cause:** Dependency conflict or build failure.
- **Solution:** 
  ```bash
  rm -rf node_modules
  npm install
  npm run dev
  ```
- **Verify:** Check the browser console for `Refused to execute script` errors.

## 🤖 Agent Timeouts

- **Cause:** API rate limits or network latency.
- **Solution:** 
  - Ensure your API keys have sufficient credits.
  - Check the [OpenAI Status](https://status.openai.com) or [Anthropic Status](https://status.anthropic.com).
  - Try switching the `PRIMARY_PROVIDER` in your `.env`.

## 🧠 Memory Graph Sync Failures

- **Cause:** Local storage corruption or Vector DB connection issues.
- **Solution:**
  - Run `talent sync --force` from the terminal.
  - Check if the `VECTOR_DB_URL` is accessible.
  - Clear the local neural cache: `npm run clean:memory`.

## ⌨️ Command Palette Not Appearing

- **Cause:** Keyboard shortcut conflict or event listener failure.
- **Solution:**
  - Ensure no other application is hijacking `Cmd+K` or `Ctrl+K`.
  - Refresh the browser and wait for the `System: Initialized` notification.

---

### Still encountering issues?
Open a [Tactical Inquiry](https://github.com/your-org/talent-os/issues) on GitHub. Include your `System Logs` (available in the Dashboard under Settings > Debug).
