---
name: prototype
description: >
  Generates three distinct, interactive HTML prototype directions from a single prompt — no build step or config required. Each direction uses a different layout metaphor, interaction model, or information hierarchy. Use when the user says "create a prototype", "build a UI mockup", "prototype a feature", "design a new screen", "draft a new interface", "sketch out a UI", "mock up a component", "explore UI directions", or "show me options for [feature]". Do NOT use for production code, backend APIs, or non-UI tasks.
allowed-tools: Write
---

# Prototype Request

$ARGUMENTS

---

## Step 1 — Plan 3 Directions

Before writing any code, define three genuinely different approaches to the problem. Different layout metaphors, interaction models, or information hierarchies — not just color or spacing variations.

For each direction:

1. **Name** — a short evocative label (e.g., "Inline Expansion", "Slide-over Panel", "Stepped Wizard")
2. **Core idea** — one sentence on what makes it distinct
3. **Trade-off** — what it optimizes for vs. what it gives up

Aim for a spread: one familiar/safe direction, one structural change, one inventive or experimental take.

Choose a kebab-case base name for the set (e.g., `member-invite`, `file-browser`). Files will be named `{base}-a.html`, `{base}-b.html`, `{base}-c.html`.

---

## Step 2 — Build All 3 Prototypes

Each direction is a **standalone HTML file** — opens directly in a browser, no build step.

**Stack:**
- Vue 3 via CDN: `https://unpkg.com/vue@3/dist/vue.global.prod.js`
- Tailwind CSS via CDN: `https://cdn.tailwindcss.com`
- Inter font via Google Fonts

**Each file must:**
- Use `Vue.createApp()` with a single component using the `template` string option
- Keep all state, logic, and mock data inside `setup()`
- Be fully interactive — wire up all meaningful UI interactions
- Cover key states — empty, loading, error, filled — toggled via refs
- Use realistic content — real-looking names, dates, and copy, not "Lorem ipsum"
- Begin with a comment block naming the direction and describing the approach

All three should be equally complete — don't stub a direction just because it's more complex.

---

## Step 3 — Write the Files

Write to:

```
prototypes/{base}-a.html
prototypes/{base}-b.html
prototypes/{base}-c.html
```

Then output a comparison table:

| | Direction | Core idea | Open |
|---|-----------|-----------|------|
| A | `{name}` | `{one sentence}` | `open prototypes/{base}-a.html` |
| B | `{name}` | `{one sentence}` | `open prototypes/{base}-b.html` |
| C | `{name}` | `{one sentence}` | `open prototypes/{base}-c.html` |

---

## Troubleshooting

- **Directions feel too similar**: Each direction must use a fundamentally different interaction model — not just visual variations. Revisit Step 1 and ensure one direction is safe/familiar, one is a structural change, and one is experimental.
- **File won't open in browser**: Verify the CDN links are correct and `Vue.createApp()` is called at the bottom of the script block. All dependencies load via CDN — no build step or local install is needed.
- **Missing UI states**: Every prototype must include empty, loading, error, and filled states toggled via Vue refs. Add a small dev-toggle button if a state isn't naturally reachable in the flow.
- **Lorem ipsum content**: Replace all placeholder text with realistic names, dates, and copy. Realistic content is required for meaningful stakeholder alignment.
