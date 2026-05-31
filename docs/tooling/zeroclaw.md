## ZeroClaw

**Repository:** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
**Description:** Fast, small, and fully autonomous AI personal assistant infrastructure — any OS, any platform.
**Key Features:**
- Single Rust binary agent runtime (~6.6 MB minimal)
- Multi-channel: Discord, Telegram, Matrix, email, webhooks, CLI, voice (30+ channels)
- Provider-agnostic: Anthropic, OpenAI, Ollama, and ~20+ LLM providers with fallback chains
- Security-first: supervised autonomy, workspace boundaries, OS-level sandboxes (Landlock/Bubblewrap/Seatbelt/Docker), cryptographic tool receipts
- Hardware-capable: GPIO/I2C/SPI/USB on Raspberry Pi, STM32, Arduino, ESP32
- Gateway + dashboard: HTTP/WebSocket gateway with web UI for chat, memory, config, cron
- SOP engine: event-triggered Standard Operating Procedures with approval gates
- ACP support: Agent Client Protocol for IDE/editor integration
- Dual-licensed: MIT or Apache 2.0
**Primary Use Cases:** Personal AI assistant, self-hosted agent runtime, multi-channel AI gateway
**Tags:** #agent #runtime #rust #self-hosted #multi-channel #ai
**Added:** 2026-05-10
**Source:** [GitHub](https://github.com/zeroclaw-labs/zeroclaw)

### Notes / Why Notable
ZeroClaw is the infrastructure that powers this very assistant. It's designed around the philosophy that you own the agent, the data, and the machine it runs on. The Rust-based architecture makes it lightweight and portable across platforms.
