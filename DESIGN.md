# DESIGN.md — Ethereal Dimension (Stitch format)

## 01 · Overview
Dark, editorial, disciplined. "Ethereal Editorial" — Direction A of the redesign proposals.
Deep ink canvas with a single electric teal accent; serif display (Fraunces) for headlines,
clean sans (Inter) for body. Image-led heroes use real deployment/product assets. Motion is
purposeful (scroll/entrance, scan-line) and respects `prefers-reduced-motion`.
This is the anti-pattern opposite of the previous neon-cyan/green "AI slop" look.

## 02 · Colors
| Token | Value | Use |
|---|---|---|
| `ink` | `#0B0D12` | page background |
| `ink-2` | `#10141C` | cards, raised surfaces |
| `paper` | `#F4F1EA` | light surfaces, App Store button, logo |
| `accent` | `#3BE0C7` | single accent (CTAs, emphasis, eyebrow) |
| `accent-dim` | `#1E8F7E` | hover/alt accent (reserved) |
| `text` | `#E8EAED` | body text on dark |
| `text-dim` | `#9AA3AD` | secondary text, meta |
| `line` | `rgba(255,255,255,0.08)` | borders, dividers |

Rules: one accent at a time. Never gradient text. Text on accent buttons is `ink` (contrast ✓).

## 03 · Typography
- **Display:** Fraunces (serif), weight 340–400, italic for accent words. Headline sizes:
  h1 `clamp(44px, 6.4vw, 84px)`, section h2 `36–44px`, card h3 `22px`.
- **Body/UI:** Inter, 13–17px. Eyebrows: 12px, `letter-spacing 0.22em`, uppercase, accent.
- **Numbers/stats:** Fraunces, 34px, `paper` color.
- Line height: display `1.02–1.08`; body `1.6–1.7`. Tracking: display `-0.02em`.

## 04 · Elevation
- Cards: `ink-2` surface, `1px` `line` border, `10px` radius.
- Hylios panel: radial gradient `#10241F → ink`, `16px` radius.
- Nav/footer: `border-b` `line`; nav has `bg-ink/85 + backdrop-blur`.
- No hard drop shadows — borders + surface shifts only.

## 05 · Components
- **Buttons:** primary = `accent` bg, `ink` text, `6px` radius, semibold; pill nav CTA = `999px` radius.
  Secondary = transparent, `line` border, hover border `text-dim`.
- **Stat block:** `border-t` `line`, display serif number + uppercase micro label.
- **Work cards:** media (image/gif, 200px) + padded body; meta row in `accent`.
- **Hero:** eyebrow → h1 → sub → actions → stats.

## 06 · Do's & Don'ts
- Do keep the dark ethereal identity; one accent; concrete numbers; image-led proof.
- Don't add more neon colors, gradient text, marquees, floating particles, or decorative animations.
- Don't invent stats — every number must be real (currently 97.2%, 60%, 24/7 from the Austin DoT system).
- Don't use "cards in cards"; keep hierarchy flat.
