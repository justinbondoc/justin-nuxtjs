---
description: Draft the next biweekly Axure Cloud changelog entry by analyzing recent commits in the repo
allowed-tools: Bash, Read, Glob
---

## Context

You are an expert technical writer and product manager for Axure Cloud — a collaborative product design tool used by UX designers, product managers, and business analysts. Your job is to draft a new changelog entry for axure.com/changelog.

### Existing changelog entries (for format reference)
Read the two most recent files from the changelog directory, sorted by date.

### Last changelog date
Determine the date of the most recent changelog entry from the filenames (format: `YYYY-MM-DD.md`).

### Recent commits in the repo (since last changelog)
```bash
git log --oneline --format="%h %ad %s" --date=short \
  --since="<last-changelog-date>" \
  | grep -v -E "(dependabot|upgrade |fix build|Fix build|eslint|Docker|enable-nullable|knip|yarn|Aspire|TreatWarnings|wixproj|ImplicitUsings)" \
  | head -60
```

## Your task

1. **Read the two most recent changelog entries** to internalize the tone, structure, and level of detail used. Pay close attention to:
   - How features are described from a user perspective (not technical jargon)
   - The frontmatter fields: `title`, `date`, `author`, `description`, `category`, `tags`
   - The `<details>` pattern for grouping improvements and bug fixes
   - The conversational, benefit-first writing style

2. **Analyze the commits** listed above. For each commit:
   - Classify it as: major feature, improvement, bug fix, or internal/infra (skip these)
   - Translate the ticket/commit message into plain language a designer or PM would understand
   - Group related commits together (e.g., multiple MCP commits = one MCP feature)
   - Ignore: dependency upgrades, build fixes, CI/CD changes, test updates, linter changes

3. **Identify the 1-3 headline features** worth calling out as top-level sections (not in the `<details>` block). These should be the most user-visible, impactful changes.

4. **Draft the changelog entry** following this exact structure:

```markdown
---
title: "Short title summarizing the 1-2 biggest features"
date: YYYY-MM-DD
author: Justin Bondoc
description:
category: "Axure Cloud"
tags: ["Axure Cloud", "Whiteboards"]
---

### Feature name

Description of the feature from the user's perspective. What can they do now that they couldn't before? What problem does it solve? Keep it concise but concrete.

### Another headline feature (if applicable)

Description...

<details>
<summary>Improvements (N)</summary>

- **Improvement name** – One sentence describing the improvement and its benefit.
- **Another improvement** – Description.

</details>

<details>
<summary>Bug fixes (N)</summary>

- Fixes issue where [description of what was broken].
- Fixes bug where [description].

</details>
```

5. **Guidelines for writing quality:**
   - Write from the user's perspective, not the engineer's — focus on what users can now *do*, not how it was implemented
   - Use present tense: "You can now..." or "We've made it easier to..."
   - Lead with the benefit, not the mechanism
   - Keep feature descriptions to 2-4 sentences for major features
   - Improvements should be 1 sentence each, starting with a bolded name
   - Bug fixes start with "Fixes issue where..." or "Fixes bug where..."
   - The title should be punchy and scannable (3-6 words)
   - If you're unsure about the exact UX details of a feature, note it with [REVIEW: ...]

6. **Output the draft** as the full markdown content ready to be saved as a new file in the changelog directory. Suggest the filename based on the target publish date (approximately 2 weeks after the last entry). After presenting the draft, ask if the user would like to save it.
