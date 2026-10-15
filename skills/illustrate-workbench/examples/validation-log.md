# Public recipe validation log

## October 15, 2026: two bounded generation demonstrations

Status: two outputs generated and visually reviewed. This tests the documented host-native reference recipe, not automatic skill discovery, package installation, a standalone adapter, or cross-host compatibility. One output per mode; no correction pass or statistical repeatability test.

### Shared method and public-safe inputs

Followed the explicit reference roles, invariants, task-state constraints and review gates in `prompt-recipes.md` and `host-imagegen-adapter.md`. Host tool: built-in `image_gen.imagegen`, with four ordered image references and an opaque background. Exact underlying model/version and billing metadata were not exposed; no model or cost claim is made.

1. CHARACTER: [approved Dottie reference](../../../docs/assets/ingredient-character.png)
2. LOCATION/COMPOSITION: original scanner research illustration, displayed as [studio reference](../../../docs/assets/scanner-research.jpg). The original PNG was supplied to generation; this JPEG is a web derivative.
3. SCREEN: [genuine public Zebra DS9308 page capture](../../../docs/assets/ingredient-source-screen.png)
4. BRAND: [separate approved HOY mark](../../../docs/assets/ingredient-brand.png)

These reference assets were approved for this public showcase. They are examples, not a license grant to third-party marks or character assets. No personal correspondence, credentials or sensitive personal data is present in the inspected outputs.

### Test A: preserve the studio, change the task state

[Resolved prompt](room-reuse-prompt.txt) · [Output](../../../docs/assets/room-reuse-demo.jpg)

Requested: preserve blue plush body, black beret and two eyes; retain maple desk, cream wall, left window/brass lamp, blue pegboard, upper-right books/plant, monitor/laptop hierarchy and daylight. Change the title to “Reference review,” status to “DEMO,” notebook to four unchecked reference labels and foreground card to “Recipe test.”

Observed: recognizable character and room anchors retained; all requested short labels visible; old notebook QR removed; unchecked boxes and DEMO status avoid implying completed work. Minor object/camera/proportion differences remain possible. This is visual continuity, not identical room geometry.

Limits: the secondary DS2208 laptop is carried from the location illustration, not independently verified as a fresh source capture. The primary monitor is source-inspired generated UI; no pixel-level fidelity test was performed. The mark is recognizable but exact geometry is not proven.

Original PNG SHA-256: `652f3da80aee32dc88b0787b59448d94a1fe386171ebf969907d35496fae837e`.

### Test B: same character, first greenhouse location

[Resolved prompt](greenhouse-prompt.txt) · [Output](../../../docs/assets/greenhouse-demo.jpg)

Requested: preserve the character and main source screen, replace studio architecture with sage greenhouse framing, glass roof/daylight, foliage, terracotta pots and maple desk. Replace the laptop with a “GREENHOUSE DESK / LOCATION DEMO” tablet; use one desk-front logo plaque, amber DEMO card and unchecked character checklist.

Observed: recognizable blue plush character, black beret and two eyes retained; studio pegboard and brass lamp replaced by greenhouse structure and foliage; tablet, short labels, amber card, checklist and desk-front plaque appear as requested. The location is visibly different while the device/character hierarchy remains clear.

Limits: the greenhouse was prompt-defined, using the studio only for character/composition context. No pre-existing canonical greenhouse reference was supplied. This output can become a proposed new location reference, but repeated greenhouse reuse has not been tested. Source UI and mark remain generated representations requiring review.

Original greenhouse PNG SHA-256: `75f4f2e678a6aa36d85c44d7260ca6949bb38ace8a9c6ca20868992390fbf1dd`.

### What these results support

The documented recipe can produce a reviewed same-room task variation and a reviewed first scene in a different setting with the same character. These two samples do not establish guaranteed identity/room fidelity, another character pack, repeated new-room consistency, source-pixel preservation, installer behavior, or compatibility with every host.

For production work, keep genuine evidence alongside the illustration, verify labels and state, use exact-source compositing when exact pixels matter, and review each output before sharing.
