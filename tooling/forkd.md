## forkd

**Repository:** [deeplethe/forkd](https://github.com/deeplethe/forkd)
**Description:** Fork() for AI agent microVMs; spawn 100 children in ~100ms from a warm parent.
**Key Features:**
- **Snapshot CoW**: Uses Copy-on-Write for extremely fast branching of live VMs.
- **KVM-Isolated**: High security and performance through hardware-accelerated virtualization.
- **Live Branching**: Branch a live VM in ~150ms with minimal source pause (~50ms).
- **Multi-child Fanout**: Ideal for speculative execution or parallel evaluation tasks.
- **E2B Compatible**: Drop-in replacement for E2B's sandbox in many workflows.

**Primary Use Cases:**
- Running untrusted code in secure, isolated environments.
- Parallel repository checkouts and evaluations (SWE-bench style).
- Speculative agent workflows where multiple paths are explored simultaneously.

**Tags:** #microvm #sandboxing #virtualization #ai-agent
**Added:** 2026-06-18
**Source:** [GitHub](https://github.com/deeplethe/forkd)

### Notes / Why Notable
Forkd brings the classic Unix `fork()` primitive to the world of microVMs, enabling near-instant creation of isolated execution environments for AI agents. This is a game-changer for speed and security in autonomous coding systems.
