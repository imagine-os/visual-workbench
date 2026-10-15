---
name: organize-brand-assets
description: Organize canonical logos, approved brand variants, character sheets, and environment references into versioned asset packs. Use when creating or maintaining a reusable visual asset library or preparing brand references for workbench illustrations.
---

# Organize Brand Assets

Preserve a trustworthy original and make the right approved variant easy to find. Read [asset-register.md](references/asset-register.md) for the pack and variant records.

## Inspect and classify

Inspect existing files and their provenance before reorganizing. Identify the canonical original, actual creator/source, license or rights holder, and any existing approvals. Distinguish original vector artwork, supplied raster exports, unapproved experiments, and reconstructed assets. Do not label a reconstruction canonical without a rights-holder decision.

Keep originals immutable. Work on copies and retain source paths, content hashes, and relationships. Use stable asset IDs and versions rather than filenames alone. Preserve existing ownership and access; ask before new sharing or public uploads. Keep private client libraries outside a public skill repository.

## Build useful variants

Organize approved options by lockup (symbol, wordmark, horizontal, stacked), background (light, dark, transparent), colorway (full-color, mono, reversed), file format, and intended usage. These are independent properties, not assumptions that every combination exists or is approved.

Prefer exact exports from supplied vector masters. Creating an export is different from inventing a logo. Do not generatively redraw, stretch, mirror, trace, recolor, remove a background, or change a lockup as if already approved. Only derive variants the user authorized and the brand rules permit. Keep proposed variants clearly separate until approved. A requested organization task alone does not authorize redesign.

For each exported variant, record the source version and transformation. Check alpha edges, clear space, crop bounds, aspect ratio, colors, minimum-size readability, and font/path integrity. Compare the result directly with the source. Preserve a previous version; never silently replace the canonical original.

## Publish a pack locally

Write an index with a small preview/contact sheet when useful, file path, variant properties, status (canonical, approved, proposed, deprecated), provenance, rights, and permitted usage. Do not mistake local approval for permission to publish publicly.

The workbench skill consumes only selected approved variants. If no approved variant fits the background, choose another scene treatment, omit the mark, or ask. Character and location reference packs use the same IDs, versioning, provenance, approval, and rights discipline; their invariants remain explicit.

Report uncertainties and proposed duplicates. Do not delete or merge assets merely because they look similar. Keep the public demonstration library original and synthetic unless separately authorized otherwise.
