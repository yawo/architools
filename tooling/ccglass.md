## ccglass

**Repository:** [jianshuo/ccglass](https://github.com/jianshuo/ccglass)
**Description:** Local observability tool for AI agents (Claude Code, Codex, Kimi) to inspect prompts and tool calls.
**Key Features:**
- **Local Proxy + Dashboard**: Intercepts HTTPS traffic and displays it in a real-time web UI.
- **Full Transparency**: See exactly what system prompts and tool schemas are being sent to the LLM.
- **Token & Cost Tracking**: Estimates costs and tracks token usage turn-by-turn.
- **Sequence Diagrams**: Visualizes the agent's internal loop and tool execution.
- **Turn-to-Turn Diff**: Compare requests to see how context grows over time.

**Primary Use Cases:**
- Debugging AI agent behavior and identifying context-bloat.
- Understanding how complex agents like Claude Code use their toolsets.
- Learning prompt engineering patterns from state-of-the-art agents.

**Tags:** #observability #debug #ai-agent #prompt-engineering
**Added:** 2026-06-18
**Source:** [GitHub](https://github.com/jianshuo/ccglass)

### Notes / Why Notable
Ccglass provides a "glass window" into the "black box" of AI agents. It is an essential tool for anyone building or optimizing agentic workflows, offering unprecedented visibility into the communication between the agent and the model.
