---
description: Explores Axure Cloud source code, writes an end-user help topic in the correct location, and updates the docs sidebar.
---

The user wants to create a help documentation topic for the following feature:

---

## Step 1: Explore the cloud source code

Search the Axure Cloud project to understand how this feature works. Look in these locations:

**Backend** (`<cloud-repo>/Controllers/` and `<cloud-repo>/Services/`):
- `Controllers/` — Find API endpoints related to the feature
- `Services/` — Find business logic and service implementations

**Frontend** (`<cloud-repo>/src/v3/`):
- `pages/` — Page-level views
- `features/` — Feature modules with components and composables
- `components/` — Reusable UI components

Read the relevant source files to understand:
- What the feature does from the user's perspective
- What UI controls, settings, or workflows are involved
- What inputs/outputs or outcomes the user can expect

---

## Step 2: Determine where to place the doc

Use this guide to pick the right location in the help-docs repo:

| Feature area | Location |
|---|---|
| Axure Cloud feature | `axure-cloud/reference/` |
| Axure RP feature | `axure-rp/reference/` |
| Step-by-step tutorial | `axure-rp/tutorials/` or `axure-cloud/tutorials/` |

Name the file using kebab-case based on the feature name (e.g., `workspace-settings.md`).

---

## Step 3: Write the documentation

Write the doc for **end users of Axure Cloud** — not developers. Focus on what the feature does and how to use it, not how it's implemented internally.

Follow the established format used in the help-docs project:

```markdown
---
title: Full descriptive title of the topic
sidebar_label: Short label for the sidebar
---

Brief intro paragraph explaining what this feature does and why a user would use it.

## Section heading

Step-by-step instructions or explanations here.

1. Do this first.
2. Then do this.

:::info

Use callout boxes for tips, notes, or important caveats.

:::
```

**Formatting conventions:**
- Reference UI element names in **bold** (e.g., **Save**, **Project Settings**)
- Use `:::info` blocks for tips and notes
- Use numbered lists for sequential steps, bullet lists for non-sequential options
- Do not use em-dashes (—). Use a colon, comma, semicolon, or rewrite the sentence instead.
- For side-by-side image + text layout, use:
  ```html
  <div className="two-columns">
  <div className="column">
  <!-- text content -->
  </div>
  <div className="column">
  <div className="screenshot-placeholder">[Screenshot: description]</div>
  </div>
  </div>
  ```

**Image placeholders:**

Wherever a screenshot or image is needed, do NOT use a markdown image tag. Instead, insert a placeholder div:

```html
<div className="screenshot-placeholder">[Screenshot: description of what should be captured]</div>
```

The description inside the brackets should be specific enough for someone to know exactly what to capture — include the UI state, relevant panel or dialog name, and any highlighted elements. Examples:
- `[Screenshot: The Workspace Settings panel open, showing the Members tab with the Invite button highlighted]`
- `[Screenshot: A prototype card in the dashboard with the Share menu expanded]`

All placeholder divs must use `className="screenshot-placeholder"` exactly.

---

## Step 4: Create the file

Write the completed documentation file to the correct path in the help-docs repo.

---

## Step 5: Update sidebars.json

After creating the doc file, update `sidebars.json` to include the new page in the navigation.

The sidebar ID format is the file path relative to `docs/`, without the `.md` extension:
- `docs/axure-cloud/reference/feature-name.md` → `"axure-cloud/reference/feature-name"`
- `docs/axure-rp/reference/feature-name.md` → `"axure-rp/reference/feature-name"`

The top-level sections are:
- `"AXURE RP"` — RP reference docs
- `"AXURE RP tutorials"` — RP tutorials
- `"AXURE CLOUD"` — Cloud reference and business docs

Add the new entry to the most appropriate category array within the correct section. If the feature doesn't cleanly fit an existing category, add it to the most closely related one. Do not create new top-level sections or categories unless clearly necessary.

---

## Step 6: Report back

After creating the file and updating the sidebar, tell the user:
- The full path of the file that was created
- Which category it was added to in `sidebars.json`
- A list of all `screenshot-placeholder` divs in the doc, so the user knows what screenshots still need to be taken
