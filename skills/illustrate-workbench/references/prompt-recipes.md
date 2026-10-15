# Reference-driven prompt recipes

These templates make the workflow executable without assuming that a project name, an old illustration, or an assistant name supplies adequate visual evidence. Fill only the sections required by the requested image. They guide a renderer; they do not guarantee text, likeness, or pixel fidelity.

## 1. Select the report mode

- Recent deliverables: show verified results and handoff. A completed check belongs with the result, not as ongoing activity.
- Current work: show one actual next action. EXPLORING is research or a proposal; WAITING means the dependent work is not actively happening.
- Requested comparison/pair: produce separate images only when the user requests a pair or agrees to split an overloaded scene.

## 2. Build the ordered input map

Use this proposed default order, omitting unused roles and renumbering explicitly. A prior successful workflow used CHARACTER → SCREEN A → SCREEN B → BRAND, without a location reference. The extra LOCATION slot below is for deliberate room persistence; it is not claimed as a tested ingredient of those earlier runs:

1. CHARACTER: inspected approved likeness or character sheet; specifies who, not the whole scene
2. LOCATION: approved canonical wide view/layout; specifies room geometry and anchor objects
3. STATION A SCREEN: inspected genuine interface capture or output artifact
4. STATION A BRAND: separately inspected logo/wordmark source, when shown
5. STATION B SCREEN: optional genuine second project's capture
6. STATION B BRAND: optional separately verified second brand

Add another canonical view or approved style reference only when it resolves an actual ambiguity. Do not assume the renderer accepts this many files: check its current limits and reduce stations if needed. Never trade away a requested character's identity reference to preserve decorative complexity. Input order is a prompt convention; the actual tool's list must agree with the index map.

Prepare a public-safe crop before provider upload when source content needs redaction. Inspect the actual cropped file: account headers, names, private notes, tokens, long identifiers, and irrelevant sidebars can be visible even in synthetic QA captures. Prompt instructions to crop are a composition aid, not a privacy boundary; do not upload sensitive originals and hope the model omits them. Retain genuine sandbox/sample disclaimers. Record what region was selected and avoid cropping away context that changes the apparent claim.

Keep roles distinct. A previous workbench image can guide composition, but cannot verify today's project status or substitute for the current interface. A logo incidental to a screenshot does not replace the separate brand source. A new location without canonical views is explicitly a proposed scene; reuse its accepted render as a location reference on subsequent runs.

## 3. Generation template

Use case: stylized-concept / visual progress illustration
Output: [one landscape/portrait illustration; intended viewing size]
Report mode: [recent deliverables / current work]
Primary request: [one sentence describing the user's actual request]
Ordered inputs: [Image 1 = CHARACTER ...; Image 2 = LOCATION ...; Image 3 = STATION A SCREEN ...; Image 4 = STATION A BRAND ...]
Character: Preserve [specific silhouette, facial structure, colors, proportions, distinguishing features] from Image [index]. Vary only [pose/expression/approved accessories]. [Small counterparts, if requested, share identity but have distinct actual responsibilities.]
Location: Preserve [named anchors, room layout, material family, camera relationships] from Image [index]. Allowed changes: [task props, device content, approved viewpoint].
Primary action: [character gaze/hand] leads to [specific tool/artifact] and then [result/handoff].
Station A: [physical device and position], displaying the actual inspected interface from Image [index]. Retain recognizable hierarchy and major visual structure. Use the separate mark from Image [index] for this station only; preserve spelling, geometry, proportions, orientation, colors, and lockup. Do not redesign it.
[Station B: same contract, subordinate in size/contrast.]
Logo placement: Show the mark only at [approved existing placements]. Do not add logo plaques, mug logos, extra navigation, or branding not requested.
State labels, verbatim: “[minimal evidence-supported wording]”. Do not add extra labels, metrics, percentages, or claims.
Style: bright tactile [selected materials], balanced exposure, luminous midtones, retained highlights, open shadows. Quiet architecture and restrained background saturation; active tools and outputs remain sharp. Keep accent colors local, with contact shadows and useful negative space.
Composition: [one focus plane / camera / primary device readable at final size]. Avoid floating dashboard clouds, generic UI substitutions, filler props, decorative slogans, walls of tiny text, or competing main actions.
Truthfulness: [DEMO/PROTOTYPE if applicable]. [DRAFT · UNSENT stays unsent; WAITING is staged as waiting.] This is an illustration; do not imply a feature exists merely because a prop depicts it.
Privacy: No private correspondence, credentials, account details, sensitive records, signed links, or unapproved personal data.

## 4. Focused correction template

Inspect the actual output before editing. Choose the largest visible failure, not a broad aesthetic rewrite.

Edit target: [selected generated image, inspected first]
Supporting input: [the exact character/screen/brand/location reference needed for this correction]
Change only: [one concrete defect and desired correction]
Keep unchanged: [character identity, pose unless targeted, room anchors, device placement, unaffected brands/screens, materials/exposure, verified state labels]
Exact text if relevant: “[verbatim correction]”
Avoid: introducing a different project, logo, extra worker, metrics, or new status.

Reinspect all critical invariants after the edit, not only the corrected region. If another retry is needed, check remaining authorization and cost first. Stop when the requested quality is achieved, budget/permissions prevent another attempt, or the same defect persists and a safer alternative is needed. A static exact-source overlay is a separate compositing workflow, not a claim that prompting can preserve source pixels.

## 5. Handle common evidence changes

When the latest feature has no verified screenshot, use a genuine older screen explicitly labeled BASELINE and describe the proposed/new scope on physical plan cards labeled CONCEPT or DRAFT. Never present the old screen as the new implementation.

If status changes during generation, recheck and correct it before delivery. Prefer a still-accurate durable state such as DRAFT · NOT DEPLOYED over a rapidly changing repository detail when that detail is not necessary to the report. This is not permission to hide a material status change.

Observed correction pattern: a renderer added navigation that did not exist in either source screen. The focused edit named the invented header elements to remove, pointed to original desktop/mobile captures, restricted the separate logo reference to its actual existing placement, and preserved the character, composition, other labels, and sample-data disclaimers.

## 6. Record the actual run

Keep the resolved prompt, ordered reference roles, source and capture date, pack versions, tool actually used, model only if exposed by the tool, outputs, corrections, observed caveats, and reported cost. Do not infer a model name or successful attachment from a generic tool name. Keep private run records local; publish only an explicitly approved, sanitized example.
