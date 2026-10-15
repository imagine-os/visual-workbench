---
name: illustrate-workbench
description: Turn verified project work into bright, character-led workbench illustrations with genuine product references on physical devices. Use for visual progress reports, deliverable showcases, and depictions of an assistant working. Also use for seamless living loops, bridges between scenes, and interactive workbench presentations. Excludes ordinary status summaries and unrelated application implementation.
---

# Illustrate Workbench

Create an appealing scene that accurately communicates work. Use the user's selected aesthetic; the default is a bright, tactile miniature environment.

## Configure

Read [pack-contracts.md](references/pack-contracts.md) when selecting identities, locations, or brands. Start from [workbench.example.json](config/workbench.example.json), but store actual user mappings and evidence in a private task workspace. Reuse approved pack IDs and versions across renders. Changing a location must not change a character's identity; changing a character must not silently redesign the room.

Read [renderer-adapters.md](references/renderer-adapters.md) before rendering. Select an available authorized tool by capability, not by assumed tool name. Do not install services, transmit private inputs to a new provider, or incur unapproved charges merely to satisfy the skill.

## Ground

Build a short task-local evidence manifest: project, observed state, source and time checked, permitted display label, screenshot file, and separate verified brand asset if a mark is shown. Recheck status before generation. Capture and inspect actual products where accessible. Screens with fictional data remain labeled DEMO or PROTOTYPE as appropriate. Missing evidence means a clearly labeled concept/reference-unavailable card, fewer stations, or a question; it never means fabricated UI presented as a capture.

Inspect the selected character's reference sheet and the selected environment's canonical views. Bind each visible character to the intended actor and role. Do not infer appearance from a person's name. If the requested identity lacks an approved reference, ask or use an explicitly agreed generic identity.

Use evidence-supported states: LIVE, REVIEW READY, NOW, EXPLORING, WAITING, DRAFT · UNSENT. LIVE means reachable at the checked source, not necessarily finished. WAITING must not look like active execution. Do not invent metrics or completion percentages. Correspondence is represented by short abstract labels unless its content is explicitly approved for inclusion.

## Compose

Use [prompt-recipes.md](references/prompt-recipes.md) for report mode, explicit reference ordering, the generation template, and the targeted correction loop. For a host-native renderer, read [host-imagegen-adapter.md](references/host-imagegen-adapter.md). These are executable recipes, not an included image API client.

Plan one clear action: character gaze or gesture → task artifact → result or handoff. Use a small number of legible stations, bright balanced exposure, open shadows, quiet architecture, local accent colors, and tactile materials. Avoid floating dashboard clutter and unreadable miniature text.

Map every reference to a role: character, location, project screen, or brand. Put the genuine project interface naturally on the matching monitor, tablet, or output board. Pair logos with separately inspected verified files; never invent or redraw an unavailable mark. Respect the renderer's actual reference limits. Reduce scope rather than silently omitting required identity or product references.

Generated screen details can drift. Call the result an illustration, not a pixel-exact capture. If exact UI or marks matter, use an authorized compositing adapter to place source pixels onto device surfaces, with perspective and occlusion handled deliberately. Otherwise omit an unreliable mark and disclose the limitation.

## Motion and interaction extensions

For living scenes, read [living-loops.md](references/living-loops.md). For transitions between loops, read [scene-transitions.md](references/scene-transitions.md). For clickable or connected workbenches, read [interactive-workbenches.md](references/interactive-workbenches.md). Preserve exact text and source imagery on stable layers, honor accessibility and permissions, and test each delivered mode. These recipes do not establish that a video renderer or interactive runtime is included.

## Verify and deliver

Apply [quality-gates.md](references/quality-gates.md). Inspect the actual rendered output, compare identity and brands directly with references, and correct the most important defect with a bounded retry. Recheck status after changes. Deliver via the host's supported attachment method, noting any material caveat or later status change.

Keep private inputs, evidence, prompts containing project context, signed URLs, and output files outside the public skill. Public demo inputs must be separately cleared. A request for an illustration does not authorize posting it publicly, changing an app, or sending it to a new external service.

Public exercise results and limitations belong in [validation-log.md](examples/validation-log.md); do not claim a visual test passed before its output has been inspected.

For concrete wording adapted from a successful workflow and its corrections, read [sanitized-production-recipe.md](examples/sanitized-production-recipe.md). It explicitly distinguishes observed practice from new location-pack behavior.
