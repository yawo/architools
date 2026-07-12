## OpenKB

**Repository:** [VectifyAI/OpenKB](https://github.com/VectifyAI/OpenKB)
**Description:** Open LLM Knowledge Base — an open-source CLI that compiles raw documents into a structured, interlinked wiki-style knowledge base using LLMs.
**Key Features:**
- Compiles documents into a persistent, interlinked wiki (summaries, concept pages, entity pages, cross-links) kept in sync
- Powered by PageIndex's vectorless, reasoning-based retrieval for long documents
- Broad format support: PDF, Word, Markdown, PowerPoint, HTML, Excel, CSV, text, URLs
- Scales to long and complex documents via PageIndex tree indexing
- Native multi-modality: retrieves and understands figures, tables, and images
- Query & chat over the wiki, with persisted multi-turn sessions
- Skill Factory: distills redistributable agent skills from the wiki
- OKF-ready: wiki pages follow the Google Open Knowledge Format (OKF) spec
- Obsidian-compatible: wiki is plain `.md` files with cross-links (graph view)
**Primary Use Cases:** Building a compounding, queryable knowledge base from documents for RAG/agent workflows; Karpathy-style LLM wiki pattern.
**Tags:** #rag #knowledge-base #wiki #llm #okf #obsidian #vectorless
**Added:** 2026-07-12
**Source:** [GitHub](https://github.com/VectifyAI/OpenKB)

### Notes / Why Notable
OpenKB is built on the idea (described by Andrej Karpathy) that LLMs should generate summaries, concept pages, and cross-references that accumulate over time instead of being re-derived on every query — knowledge compounds rather than being rediscovered. Unlike traditional RAG, which rediscovers knowledge from scratch per query, OpenKB compiles knowledge once into a persistent wiki and keeps it current, flagging contradictions and surfacing existing cross-references. It is a sibling project to [PageIndex](https://github.com/VectifyAI/PageIndex).
