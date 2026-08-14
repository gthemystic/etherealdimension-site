# Ethereal Engineering RAG – ChatGPT App

Expose **Ethereal Dimension**’s engineering smart RAG search as a standalone app for [Apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/). This package is an MCP (Model Context Protocol) server that provides one tool, `engineering_rag_search`, so ChatGPT can answer questions about engineering docs, P&IDs, specs, and diagrams.

## What it does

- **Tool:** `engineering_rag_search(query: string)`
- **Behavior:** Runs a structured “RAG-style” search (demo data aligned with the EtherealExplorer agentic demo). Returns understanding, reasoning steps, and answer with specs and sources.
- **Widget UI:** When ChatGPT invokes the tool, it renders an inline widget showing the answer, specs, sources, and reasoning in Ethereal styling (dark theme, cyan accents).
- **Use in ChatGPT:** Add this server as a **Connector** in ChatGPT (Developer Mode). Users can then ask things like “What hydraulic pump is used in System A?” or “Find P&ID drawings related to cooling systems” and get the same shape of answer as in the full Ethereal Search product.

## Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

## Install and run

```bash
cd chatgpt-appkit
pnpm install
pnpm start
```

Server listens on `http://localhost:8000` by default. Set `PORT` to change it.

## Adding to ChatGPT

1. **Enable Developer Mode** in ChatGPT (Settings → turn on Developer Mode).
2. **Expose your server** (e.g. with [ngrok](https://ngrok.com/)):
   ```bash
   ngrok http 8000
   ```
   Use the HTTPS URL ngrok gives you (e.g. `https://xxxx.ngrok-free.app`).
3. **Add as Connector** in ChatGPT: **Settings → Connectors → Add connector** and enter your MCP server URL:
   - **SSE endpoint:** `https://your-ngrok-url.ngrok-free.app/mcp`
4. In a chat, choose your connector from the “More” options and ask engineering questions; ChatGPT will call `engineering_rag_search` when appropriate.

## Production deployment

Run this MCP server on any host that supports long-lived HTTP (e.g. a small Node process on Fly.io, Railway, or a VPS). Set:

- `BASE_URL` (required for production): public HTTPS URL of your server (e.g. `https://your-mcp.example.com`). Used for the widget `outputTemplate` so ChatGPT can load the UI. Without it, the widget URL defaults to `http://localhost:PORT`, which won't work when ChatGPT loads it.
- `PORT`: port to bind (default 8000).

ChatGPT expects an HTTPS URL for the connector (e.g. `https://your-domain.com/mcp`).

## Project layout

- `src/server.ts` – MCP server (SSE transport), lists and handles `engineering_rag_search`, serves the widget at `/widget`.
- `src/rag-data.ts` – Demo RAG responses (same conceptual shape as EtherealExplorer agentic demo)
- `public/ethereal-rag-widget.html` – Standalone HTML widget rendered inline in ChatGPT when the tool returns results (same conceptual shape as EtherealExplorer’s agentic demo).

## Links

- [Apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/)
- [OpenAI Apps SDK](https://developers.openai.com/apps-sdk/)
- [Build your MCP server](https://developers.openai.com/apps-sdk/build/mcp-server)
- [Ethereal Search (full product)](https://etherealdimension.io/ethereal-search) – Explorer + Logo Lab
