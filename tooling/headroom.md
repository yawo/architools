## headroom

**Repository:** [chopratejas/headroom](https://github.com/chopratejas/headroom)
**Description:** Context compression layer for AI agents; reduces tokens by 60-95% before reaching the LLM.
**Key Features:**
- **SmartCrusher**: Universal JSON compression for arrays, dicts, and mixed types.
- **CodeCompressor**: AST-aware compression for Python, JS, Go, Rust, Java, and C++.
- **CacheAligner**: Stabilizes prefixes to maximize provider KV cache hit rates.
- **CCR (Reversible Compression)**: Originals are cached locally and retrievable via tools on demand.
- **Cross-agent Memory**: Shared store across Claude, Codex, and Gemini with auto-deduplication.
- **headroom learn**: Mines failed sessions to write corrections to CLAUDE.md / AGENTS.md.

**Primary Use Cases:**
- Reducing LLM costs by 60-95% without sacrificing accuracy.
- Handling massive code search results or long conversation histories.
- Sharing context and memory between different AI agents (e.g., Claude and Cursor).

**Tags:** #context-compression #token-optimization #ai-agent #memory
**Added:** 2026-06-18
**Source:** [GitHub](https://github.com/chopratejas/headroom)

### Notes / Why Notable
Headroom is a critical piece of infrastructure for high-volume AI agent workflows. It doesn't just truncate context; it intelligently "crushes" it while maintaining semantic integrity, and allows the LLM to retrieve the full original content if it needs specific details.
