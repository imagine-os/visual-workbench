# Quality gates

1. Evidence: each represented output has inspected genuine references or an explicit concept/missing-reference label. Status and timestamps are current enough for the request.
2. Identity: compare silhouette, face, colors, proportions, and distinguishing details with the selected sheet. Actor-role assignments are correct.
3. Location: architecture, anchors, materials, and camera relationships match the chosen pack. Location switching does not drift identity.
4. Brand: compare every mark/wordmark with its separate approved source. Reject wrong spelling, geometry, orientation, or lockup.
5. Screens: correct project appears on the correct device. No fabricated numbers or invented UI claimed as exact. State any approximation.
6. Readability: primary activity and state legible at delivery size; open shadows, bright materials, uncluttered task hierarchy. No active-work pose for blocked work.
7. Privacy and rights: inspect all image corners, screen content, metadata, file names, prompts, and public staging files. Exclude secrets, private messages, sensitive records, signed URLs, and uncleared marks/likenesses.
8. Delivery: actual file is viewable; caption says illustration; rendered state still matches latest evidence or caveat explains a change.

## Behavioral release tests

- Same character in studio and greenhouse: identity persists, locations visibly differ.
- Two characters in one room: each matches its own sheet; room layout persists.
- Draft email task: DRAFT · UNSENT, no readable private body, no sent-state implication.
- Missing screen or logo: omit or label missing reference, never invent a captured screen or mark.
- Three projects with too few reference slots: simplify or split with user-aligned scope.
- Source-pixel request: compositor used and checked, or limitation clearly reported.
- Stale LIVE evidence: recheck or label last verified rather than claiming current deployment.

Validation of Markdown/frontmatter alone does not pass these visual/behavioral tests.
