# Ethereal Search Redesign Findings

## Current state

- The main navigation sends visitors to `/ethereal-search`.
- That route contains only a centered message and a non-interactive **“Preview coming soon”** label.
- Product context says Ethereal Search is AI-native retrieval across engineering documents, specifications, drawings, and infrastructure records, with grounded answers that can be traced.
- The main marketing page currently has no Ethereal Search section, so visitors leave the narrative before understanding the product.

## Impeccable principles applied

- Treat the home page as **Persuade** mode: use one clear action per section and evidence-led product storytelling.
- Commit to a concrete surface structure rather than applying an unfamiliar visual skin to a standard feature-card grid.
- Give the search experience an obvious job: demonstrate a query, evidence, and inspectable source trail in one field of view.
- Use the existing dark editorial system, but improve hierarchy, layout rhythm, and interaction clarity.
- Avoid known anti-patterns: purple/cyan gradients, generic dashboard metric blocks, nested cards, oversized pill eyebrows, decorative status animation, and weak typography hierarchy.

@@
## Design direction chosen

**Ethereal Search: The Evidence Desk.** The search section behaves like a working field desk for built-environment knowledge rather than a product teaser. A real query and its grounded response live together on the main page, with an adjoining source trail that makes verification tangible.

## Three reviewable variants

| Variant | Primary use | Core interaction | Recommendation |
| --- | --- | --- | --- |
| **Evidence Desk** | Quick, source-aware answers | Query, provisional answer, and direct citations sit in one field of view. | **Lead direction.** It communicates trust without overloading the first visit. |
| **Project Atlas** | Collection-first exploration | Visitors begin with a known project and navigate its drawings, field records, permits, and constraints. | Strong follow-on workspace when document collections are the entry point. |
| **Field Thread** | Decision review | The page sequences supporting and conflicting evidence before the next step. | Useful for high-accountability investigations or supervisor review. |
