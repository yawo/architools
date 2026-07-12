## BeamWeaver (beam_weaver)

**Repository:** [caudena/beam_weaver](https://github.com/caudena/beam_weaver)
**Description:** Elixir-native LangChain, LangGraph, and DeepAgents for traceable LLM apps.
**Key Features:**
- OTP-native agents and graph workflows inside your existing supervision tree — no separate Python service
- Tools, memory, persistence, retrieval, structured output, streaming, and human-in-the-loop
- Graph workflows with deterministic branching, fan-out, interrupts, time travel, and durable execution
- Custom clients/adapters with explicit runtime boundaries and tagged errors
- Telemetry and Ecto/ETS storage boundaries for observability and state
- WeaveScope tracing for end-to-end traceability
- Minimal dependencies; not a Python wrapper or hosted control plane
**Primary Use Cases:** Building traceable LLM agents and multi-step workflows in Elixir/OTP applications.
**Tags:** #elixir #agent #llm #langchain #langgraph #otp #tracing
**Added:** 2026-07-12
**Source:** [GitHub](https://github.com/caudena/beam_weaver)

### Notes / Why Notable
BeamWeaver brings the practical parts of LangChain, LangGraph, and DeepAgents to the BEAM without a Python runtime, hosted control plane, or framework lock-in. Agents, tools, graph workflows, subagents, memory, persistence, retrieval, structured output, streaming, and tracing are native Elixir modules built around OTP supervision, explicit adapters, tagged errors, telemetry, and Ecto/ETS storage boundaries. It is designed for applications that already rely on OTP, supervision trees, Ecto, telemetry, and explicit runtime boundaries. (Not affiliated with LangChain.)
