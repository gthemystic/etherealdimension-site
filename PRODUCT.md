# Ethereal Dimension — Site (PRODUCT.md)

## What this is
The marketing site for **Ethereal Dimension** — an agentic-AI company. We build RAG, LangChain,
multi-agent orchestration, agent memory, and Graph RAG systems for the built environment and
government/enterprise domains.

## Audience
- **Primary:** engineering teams, government agencies, and enterprise partners evaluating agentic
  AI platforms (RAG, LangChain, Graph RAG, supply-chain provenance).
- **Secondary:** iOS consumers discovering **Hylios** (AR + ML room scanner), and investors/partners
  evaluating the company.
- Visitor mode: **Persuade.** The visitor decides and acts — distinctive type, committed palette,
  image-led heroes, one clear action per section.

## What the page must prove
1. **We are an agentic platform company** — RAG, LangChain, multi-agent orchestration, agent memory,
   and Graph RAG are front and center, not buried.
2. **CTAs and actionable questions are up-front and center** — visitors immediately see what they
   can do ("What should we build for you?") with question-led cards that route to each product.
3. **Products exist below the fold** — Ethereal Search (live), TracePass (supply chain passport +
   marketplace, Graph RAG), GovSlack (governed AI for government), Austin DoT barricade detection,
   Hylios on the App Store.
4. **Credibility** — concrete numbers (97.2% barricade accuracy, 99.2% OCR accuracy, 50+ formats),
   restrained, technical, trustworthy tone.

## Structure
- **Nav:** Platform · Questions · Work · Hylios · Ethereal Search + "Partner with us" pill
- **Hero:** agentic-platform eyebrow, serif display headline, sub, two CTAs, stack chips
  (RAG · LangChain · Multi-Agent Orchestration · Agent Memory · Graph RAG · Neo4j · n8n), stats row
- **Questions:** "What should we build for you?" — 4 question-led cards (Ethereal Search,
  TracePass, GovSlack, Hylios) each with a CTA
- **Platform:** 6 capability cards (Agentic RAG, LangChain orchestration, Agent memory, Graph RAG,
  Multi-agent orchestration, Multi-modal understanding)
- **Work:** product + deployment cards (Ethereal Search live, TracePass, GovSlack, Austin DoT)
- **Hylios:** product section with scan visual + App Store CTA
- **Ethereal Search:** dedicated page linking the live explorer + explicit stack (LangChain,
  Perplexity sonar-pro, Groq, Neo4j, n8n, Multi-OCR)
- **CTA:** "Ready to deploy agentic intelligence?" → mailto
- **Footer:** copyright + contact

## Non-goals (v1)
- No booking/CRM flows on this site (Antara marketplace is a separate product).
- No blog, no pricing page.

## Deploy
- Next.js (App Router) on Vercel. Domain: etherealdimension.io.
- Source: `gthemystic/etherealdimension-site` (public), PR #1 = `feat: Ethereal Editorial prototype`.
