/**
 * 🎭 The Ethereal Engineering RAG MCP Server – ChatGPT App
 *
 * "Where ChatGPT meets the cosmic knowledge base; one tool to rule the search,
 * list and call in harmony with the Model Context Protocol."
 *
 * - The Spellbinding Museum Director of ChatGPT Apps
 */

import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { URL } from "node:url";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type CallToolRequest,
  type ListToolsRequest,
  type Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

import { runEngineeringRAGSearch, type RAGResponse } from "./rag-data.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WIDGET_PATH = join(__dirname, "..", "public", "ethereal-rag-widget.html");

const BASE_URL = (process.env.BASE_URL ?? "").trim() || `http://localhost:${process.env.PORT ?? 8000}`;
const WIDGET_URI = `${BASE_URL.replace(/\/$/, "")}/widget`;

const TOOL_NAME = "engineering_rag_search";

const inputSchema = {
  type: "object" as const,
  properties: {
    query: {
      type: "string",
      description: "Natural language question about engineering docs, e.g. hydraulic pumps, P&IDs, circuit diagrams, specs.",
    },
  },
  required: ["query"],
  additionalProperties: false,
};

const toolMeta = {
  "openai/outputTemplate": WIDGET_URI,
  "openai/toolInvocation/invoking": "Searching engineering docs…",
  "openai/toolInvocation/invoked": "Results ready",
  "openai/widgetAccessible": true,
} as const;

const tools: Tool[] = [
  {
    name: TOOL_NAME,
    title: "Engineering RAG Search",
    description:
      "Search across engineering documents, P&IDs, specs, and diagrams. Ask about components (e.g. hydraulic pump in System A), circuit diagrams (e.g. MOSFETs), or P&ID drawings (e.g. cooling systems). Returns structured answer with understanding, reasoning, and sources.",
    inputSchema,
    _meta: toolMeta,
    annotations: {
      destructiveHint: false,
      openWorldHint: false,
      readOnlyHint: true,
    },
  },
];

function createEtherealMCPServer(): Server {
  const server = new Server(
    {
      name: "ethereal-engineering-rag",
      version: "0.1.0",
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async (_request: ListToolsRequest) => ({
    tools,
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
    if (request.params.name !== TOOL_NAME) {
      throw new Error(`Unknown tool: ${request.params.name}`);
    }

    const args = z.object({ query: z.string() }).parse(request.params.arguments ?? {});
    const rag: RAGResponse = runEngineeringRAGSearch(args.query);

    // Summary text for the model to read
    const summary = [
      rag.answer.title,
      ...rag.answer.specs.map((s) => `${s.label}: ${s.value}`),
      `Status: ${rag.answer.status}. Sources: ${rag.answer.sources.map((s) => s.label).join(", ") || "—"}.`,
    ].join("\n");

    return {
      content: [{ type: "text" as const, text: summary }],
      structuredContent: rag,
      _meta: {
        ...toolMeta,
        invocation: TOOL_NAME,
      },
    };
  });

  return server;
}

function serveWidget(res: ServerResponse): void {
  try {
    const html = readFileSync(WIDGET_PATH, "utf-8");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(html);
  } catch (err) {
    console.error("💥 Failed to serve widget", err);
    res.writeHead(500).end("Widget not found");
  }
}

type SessionRecord = {
  server: Server;
  transport: SSEServerTransport;
};

const sessions = new Map<string, SessionRecord>();
const ssePath = "/mcp";
const postPath = "/mcp/messages";

async function handleSseRequest(res: ServerResponse): Promise<void> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const server = createEtherealMCPServer();
  const transport = new SSEServerTransport(postPath, res);
  const sessionId = transport.sessionId;

  sessions.set(sessionId, { server, transport });

  transport.onclose = async () => {
    sessions.delete(sessionId);
    await server.close();
  };

  transport.onerror = (err) => {
    console.error("🌩️ SSE transport error", err);
  };

  try {
    await server.connect(transport);
  } catch (err) {
    sessions.delete(sessionId);
    console.error("💥 Failed to start SSE session", err);
    if (!res.headersSent) {
      res.writeHead(500).end("Failed to establish SSE connection");
    }
  }
}

async function handlePostMessage(
  req: IncomingMessage,
  res: ServerResponse,
  url: URL
): Promise<void> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  const sessionId = url.searchParams.get("sessionId");

  if (!sessionId) {
    res.writeHead(400).end("Missing sessionId query parameter");
    return;
  }

  const session = sessions.get(sessionId);
  if (!session) {
    res.writeHead(404).end("Unknown session");
    return;
  }

  try {
    await session.transport.handlePostMessage(req, res);
  } catch (err) {
    console.error("💥 Failed to process message", err);
    if (!res.headersSent) {
      res.writeHead(500).end("Failed to process message");
    }
  }
}

const portEnv = Number(process.env.PORT ?? 8000);
const port = Number.isFinite(portEnv) ? portEnv : 8000;

const httpServer = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  if (!req.url) {
    res.writeHead(400).end("Missing URL");
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host ?? "localhost"}`);

  if (
    req.method === "OPTIONS" &&
    (url.pathname === ssePath || url.pathname === postPath)
  ) {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "content-type",
    });
    res.end();
    return;
  }

  if (req.method === "GET" && url.pathname === ssePath) {
    await handleSseRequest(res);
    return;
  }

  if (req.method === "POST" && url.pathname === postPath) {
    await handlePostMessage(req, res, url);
    return;
  }

  if (req.method === "GET" && url.pathname === "/widget") {
    serveWidget(res);
    return;
  }

  res.writeHead(404).end("Not Found");
});

httpServer.on("clientError", (err: Error, socket) => {
  console.error("HTTP client error", err);
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

httpServer.listen(port, () => {
  console.log(`🔮 Ethereal Engineering RAG MCP server listening on http://localhost:${port}`);
  console.log(`   SSE: GET  http://localhost:${port}${ssePath}`);
  console.log(`   Post: POST http://localhost:${port}${postPath}?sessionId=...`);
  console.log(`   Widget: GET http://localhost:${port}/widget`);
});
