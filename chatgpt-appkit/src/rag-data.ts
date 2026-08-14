/**
 * 🔮 Engineering RAG response shapes for Ethereal Search
 *
 * "The crystallized wisdom of the agentic demo—same structure,
 * so ChatGPT and the Explorer speak the same language."
 *
 * - The Mystical RAG Data Curator
 */

export interface RAGUnderstanding {
  intent: string;
  entity: string;
  scope: string;
  requires: string;
}

export interface RAGSearching {
  documents: string;
  diagrams: string;
  blueprints: string;
  sources: string;
}

export interface RAGReasoningStep {
  text: string;
  detail: string;
}

export interface RAGSource {
  label: string;
  type: string;
  icon: "doc" | "spec" | "log";
  thumbnail?: string;
}

export interface RAGAnswer {
  title: string;
  specs: { label: string; value: string }[];
  status: string;
  lastMaintenance: string;
  sources: RAGSource[];
  related: string[];
}

export interface RAGResponse {
  query: string;
  understanding: RAGUnderstanding;
  searching: RAGSearching;
  reasoning: { steps: RAGReasoningStep[] };
  answer: RAGAnswer;
}

/** Demo responses keyed by query substring match (lowercase). */
const DEMO_RESPONSES: RAGResponse[] = [
  {
    query: "What hydraulic pump is used in System A?",
    understanding: {
      intent: "Component lookup",
      entity: "hydraulic pump",
      scope: "System A documentation",
      requires: "Image analysis + spec extraction",
    },
    searching: { documents: "2,847", diagrams: "412", blueprints: "89", sources: "3" },
    reasoning: {
      steps: [
        { text: "Found hydraulic schematic P&ID-2847 (98% match)", detail: 'OCR detected: "PUMP-AX-452" on label' },
        { text: "Cross-referenced with spec sheet SPE-2024-112", detail: "Model: Danfoss PAH 80 | Flow rate: 80 GPM" },
        { text: "Verified against maintenance log ML-2024-Q3", detail: "Last serviced: Nov 15, 2024 | Status: Operational" },
      ],
    },
    answer: {
      title: "System A uses the Danfoss PAH 80 Hydraulic Pump",
      specs: [
        { label: "Flow Rate", value: "80 GPM" },
        { label: "Max Pressure", value: "5,000 PSI" },
        { label: "Power", value: "15 HP" },
        { label: "Installed", value: "March 2023" },
      ],
      status: "Operational",
      lastMaintenance: "Nov 15, 2024",
      sources: [
        { label: "P&ID-2847", type: "Diagram", icon: "doc" },
        { label: "SPE-112", type: "Spec Sheet", icon: "spec" },
        { label: "ML-Q3-24", type: "Maint. Log", icon: "log" },
      ],
      related: ["View spare parts", "Maintenance schedule"],
    },
  },
  {
    query: "Show me all circuit diagrams with MOSFETs",
    understanding: {
      intent: "Document retrieval",
      entity: "MOSFET circuit diagrams",
      scope: "Full circuit library",
      requires: "Diagram recognition + component detection",
    },
    searching: { documents: "1,293", diagrams: "678", blueprints: "45", sources: "7" },
    reasoning: {
      steps: [
        { text: "Scanned circuit library for MOSFET symbols (7 matches)", detail: "IRF540N, IRF3205, 2N7000 variants detected" },
        { text: "Verified component labels via OCR", detail: "All 7 diagrams confirmed with MOSFET designation" },
        { text: "Ranked by relevance and revision date", detail: "Most recent: CIR-2024-089 (Rev C, Dec 2024)" },
      ],
    },
    answer: {
      title: "Found 7 circuit diagrams containing MOSFET components",
      specs: [
        { label: "Total Found", value: "7 diagrams" },
        { label: "MOSFET Types", value: "3 variants" },
        { label: "Latest Rev.", value: "Dec 2024" },
        { label: "Dept.", value: "EE Division" },
      ],
      status: "Complete",
      lastMaintenance: "Dec 20, 2024",
      sources: [
        { label: "CIR-089", type: "Circuit", icon: "doc" },
        { label: "CIR-072", type: "Circuit", icon: "doc" },
        { label: "BOM-445", type: "Parts List", icon: "spec" },
      ],
      related: ["View all MOSFET specs", "Compare variants"],
    },
  },
  {
    query: "Find P&ID drawings related to cooling systems",
    understanding: {
      intent: "Drawing search",
      entity: "cooling system P&IDs",
      scope: "Process engineering library",
      requires: "P&ID recognition + system classification",
    },
    searching: { documents: "3,102", diagrams: "856", blueprints: "234", sources: "5" },
    reasoning: {
      steps: [
        { text: "Identified cooling system P&IDs across 3 projects", detail: "Primary, secondary, and chilled water loops" },
        { text: "Matched valve and heat exchanger symbols", detail: "12 unique components identified in cooling paths" },
        { text: "Cross-referenced with flow calculations", detail: "All drawings verified against design basis docs" },
      ],
    },
    answer: {
      title: "5 P&ID drawings found for cooling systems",
      specs: [
        { label: "Drawings", value: "5 P&IDs" },
        { label: "Systems", value: "3 loops" },
        { label: "Components", value: "12 unique" },
        { label: "Last Updated", value: "Jan 2025" },
      ],
      status: "Current",
      lastMaintenance: "Jan 8, 2025",
      sources: [
        { label: "PID-301", type: "P&ID", icon: "doc" },
        { label: "PID-302", type: "P&ID", icon: "doc" },
        { label: "CALC-88", type: "Flow Calc", icon: "spec" },
      ],
      related: ["View cooling specs", "Maintenance history"],
    },
  },
];

/**
 * 🌟 The RAG Oracle – pick best demo match or return a generic answer
 * (Because even oracles need a fallback when the stars don't align.)
 */
export function runEngineeringRAGSearch(userQuery: string): RAGResponse {
  const q = userQuery.trim().toLowerCase();
  const match = DEMO_RESPONSES.find(
    (r) =>
      q.includes(r.query.toLowerCase()) ||
      r.query.toLowerCase().includes(q) ||
      (q.includes("hydraulic") && r.query.includes("hydraulic")) ||
      (q.includes("mosfet") && r.query.includes("MOSFET")) ||
      (q.includes("circuit") && r.query.includes("circuit")) ||
      (q.includes("cooling") && r.query.includes("cooling")) ||
      (q.includes("pid") && r.query.includes("P&ID"))
  );
  if (match) {
    return { ...match, query: userQuery.trim() };
  }
  // Generic fallback: same shape, friendly message
  return {
    query: userQuery.trim(),
    understanding: {
      intent: "Engineering document search",
      entity: "documents, diagrams, specs",
      scope: "Ethereal Search knowledge base",
      requires: "Multi-modal RAG retrieval",
    },
    searching: { documents: "—", diagrams: "—", blueprints: "—", sources: "—" },
    reasoning: {
      steps: [
        { text: "Query received by Ethereal Engineering RAG", detail: "Intent and scope identified." },
        { text: "Search would run over diagrams, specs, and logs", detail: "Connect a live RAG backend to see real results here." },
        { text: "Structured answer prepared", detail: "This is the standalone ChatGPT app; full product at EtherealExplorer." },
      ],
    },
    answer: {
      title: "Ethereal Engineering Search (ChatGPT App)",
      specs: [
        { label: "Query", value: userQuery.trim().slice(0, 40) + (userQuery.length > 40 ? "…" : "") },
        { label: "Mode", value: "Standalone app" },
        { label: "Full product", value: "etherealdimension.io/ethereal-search" },
      ],
      status: "Demo",
      lastMaintenance: new Date().toISOString().slice(0, 10),
      sources: [],
      related: ["Try: hydraulic pump System A", "Try: MOSFET circuit diagrams", "Try: P&ID cooling systems"],
    },
  };
}
