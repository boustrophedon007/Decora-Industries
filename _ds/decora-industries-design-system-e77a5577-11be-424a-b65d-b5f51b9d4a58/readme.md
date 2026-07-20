# DECORA INDUSTRIES — Design System

Enterprise design language for **Decora Industries**, a premium furniture manufacturer. The system serves enterprise SaaS surfaces (production/ops tooling, B2B commerce, marketing web) with a tone that is **premium, technical, structured, bold, minimal, high-trust**.

**Sources provided:** brand brief only (no codebase, Figma, logo, or font files). Inspiration reference: an Airbnb design-system writeup — its *principles* (single accent voltage, one-shadow discipline, hairline separation, modest display weights) inform this system; none of its values were copied. All components here are an original standard set — flagged as authored-from-scratch, not recreations.

## 1 — Design Philosophy

- **Brand personality:** an engineering company that makes beautiful objects. Confidence through precision, not decoration. Machined, not molded.
- **Visual language:** hairline-ruled grids, near-square corners, warm graphite neutrals, one hot accent ("Furnace" orange — the color of kilns and cut steel) used scarcely. Mono-spaced uppercase micro-labels evoke shop-floor spec plates and CNC readouts.
- **Color philosophy:** ~92% of any screen is canvas + graphite ink. Furnace orange is voltage: primary CTAs, active states, live indicators. Brass is an editorial accent for premium/marketing moments only. Semantic colors never decorate — they report status.
- **Typography philosophy:** Space Grotesk (display/UI) is geometric and slightly technical; weights cap at 600 — hierarchy comes from size + spacing, not boldness. Archivo carries body copy. JetBrains Mono marks data: SKUs, lot codes, tolerances, table headers, overlines.
- **Component philosophy:** flat by default, depth is earned (see elevation ladder). Borders do the separating; shadows mark things that float. Density is a feature — enterprise users want rows per scroll.
- **Motion principles:** mechanical precision — 150–300ms, ease-out dominant, nothing bounces except direct-manipulation drag. Panels slide with `--ease-mechanical`; toggles snap with `--spring-snappy`. Reduced-motion collapses everything to instant.
- **UX principles:** disclose progressively; state everything (empty/loading/error designed, never an afterthought); keyboard-first (every action reachable, ⌘K palette assumed); confirm destructive, undo the rest.
- **Accessibility:** WCAG AA minimum, AAA for body text. Ink on canvas ≈ 15.8:1. Focus = 2px offset ring in brand (`--ring-focus`), never removed. Touch targets ≥44px on mobile. `data-theme="hc"` high-contrast mode; semantic states always pair color with icon/text.

## 2 — Tokens (see `tokens/`)

- `colors.css` — 9 families × 11 steps (50–950): primary/secondary/accent/neutral/gray/success/warning/error/info; semantic aliases; **light / dark / high-contrast (`data-theme`)** + glass tokens.
- `typography.css` — Display XXL→S, H1–6, Body XL→S, caption, overline, code, button, label, nav, table, metric, mono-data. Each token is a `font` shorthand + tracking var.
- `spacing.css` — 2→128 scale, radius (none→full), grid (12-col, 1320px max, breakpoints 640/768/1024/1280/1600), control heights.
- `effects.css` — 4-step shadow ladder + inset + focus ring; border widths; blur; opacity.
- `motion.css` — durations 100→1000, easing curves, spring specs (Framer Motion values in comments).

Token naming: `--{concern}-{scale}` for base (`--primary-500`), plain semantic aliases for usage (`--surface-1`, `--text-muted`, `--brand`). Consumers should use semantic aliases first.

## 3 — Content fundamentals

No product copy was provided; these rules are authored to fit the brand personality:
- Sentence case everywhere except mono overlines (LOT 4471 · LINE 2), which are uppercase.
- Voice: direct, declarative, spec-sheet precision. "Run started" not "Your run has been started successfully! 🎉". No emoji, no exclamation marks.
- Second person for instructions ("Select a production line"), noun phrases for labels ("Batch tolerance").
- Numbers are exact and tabular (`--numeric`): "1,284 units · 99.2% first-pass yield".

## 4 — Visual foundations (quick answers)

Backgrounds: flat `--canvas` (warm off-white) / `#121316` dark — no gradients, no textures. Imagery: warm, natural-light furniture/workshop photography, never illustration. Hover: surface shifts one step (`--surface-3`) or border darkens — no scaling. Press: one step darker fill. Cards: `--surface-1`, 1px `--border-hairline`, `--radius-lg`, `--shadow-1`; hover `--shadow-2`. Corners: near-square (buttons 6px, cards 10px, inputs 6px); pills only for badges/status. Transparency/blur: only glass tokens over photography (marketing hero nav) and the command palette scrim. Rules: 2px `--ink` rules under section heads are a signature motif.

## 5 — Iconography

No brand icon set was provided. **Standard: [Lucide](https://lucide.dev) via CDN** — 1.5px stroke at 16/20/24px, `stroke="currentColor"`, square joins where available. No filled icons except status dots; no emoji; no hand-drawn SVGs. Components render inline minimal geometric glyphs (chevrons, check, ×) only where an icon set dependency would be overkill. FLAG: substitute Lucide with the real brand set when one exists.

## 6 — Components (`components/`)

Standard authored set (no source inventory existed). Namespace: see `check_design_system`; import via `window.<Namespace>.<Name>`.
- `actions/` — Button, IconButton
- `forms/` — Input, Textarea, Select, Checkbox, Radio, Switch, Field
- `display/` — Card, Badge, Tag, Avatar, Table, Metric
- `feedback/` — Alert, Toast, Progress, Skeleton, Spinner
- `navigation/` — Tabs, Breadcrumb, SidebarItem
- `overlay/` — Dialog, Tooltip

Patterns beyond this set (data grid, kanban, command palette, chat, …) compose these primitives; build them per-project rather than freezing them here.

## 7 — UI kit

`ui_kits/ops/` — **Decora Ops**, the manufacturing execution dashboard (original demonstration surface, not a recreation): sidebar nav, production-line metrics, work-order table, run detail.

## 8 — Index

- `styles.css` → imports everything in `tokens/`
- `guidelines/` — specimen cards (Design System tab)
- `components/<group>/<Name>.jsx` + `.d.ts` + `.prompt.md` + card html
- `ui_kits/ops/` — dashboard kit
- `thumbnail.html`, `SKILL.md`

**Intentional additions:** Field (label+error wrapper), Metric (KPI stat), SidebarItem — needed by the ops kit.

**Known gaps / flags:** no logo provided (brand renders as set wordmark type — never draw one); fonts load from Google Fonts CDN (no licensed binaries); no product copy or photography provided — placeholders used.
