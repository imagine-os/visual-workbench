# Pack contracts

These are package conventions, not requirements of the Agent Skills standard. JSON/YAML loaders are optional; an agent may read the manifests directly.

## Character pack

Fields: stable `id`, `version`, `display_name`, `reference_sheet`, `canonical_views`, `identity_invariants`, `allowed_variations`, `prohibited_changes`, `scale_notes`, `rights`, and `provenance`.

Reference sheet: front/side/back/three-quarter views, close-up, color/material swatches, proportions, accessories, several expressions and poses. Identity invariants preserve silhouette, face, colors, markings, and characteristic objects. Pose, expression, and clothing may vary only within declared limits. Nested counterparts remain the same identity unless deliberately assigned a separate actor.

## Environment pack

Fields: `id`, `version`, `canonical_views`, `layout`, `anchor_objects`, `camera_presets`, `materials`, `lighting`, `palette`, `device_slots`, `allowed_variations`, `rights`, and `provenance`.

Save a wide establishing view, an overhead layout, and useful close views. Each device slot has a stable ID, surface bounds or approximate quadrilateral, camera compatibility, and occlusion notes. Keep architecture, object relationships, and recurring materials stable. For a new location, create and approve one new reference pack before using it repeatedly; persist that pack instead of inventing the room every run. Changing the scene's task changes device content and staging, not its canonical architecture.

## Brand pack

Fields: `id`, `version`, `logo_files`, `wordmark_files`, `colors`, `typefaces`, `clear_space`, `forbidden_variants`, `provenance`, `rights`, and `approved_for_public_demo`.

Use separately verified logo/wordmark inputs. A logo visible only in a screenshot is not a substitute for the separate brand reference. Omit marks that cannot be verified or reproduced faithfully. Fonts and marks have separate rights from skill instructions.

## Private identity mapping

Map stable local actor IDs to `role` (user/assistant/collaborator), `character_pack`, and optional approved display alias. Map roles explicitly in each scene; do not publish names, account IDs, or private avatar URLs. User and assistant can choose different representations without forking the core skill.

## Evidence item

Fields: `project_id`, `display_label`, `status`, `checked_at`, `source`, `screenshot`, `brand_pack`, `data_kind`, `allowed_audience`, `station_id`. Private evidence records are never checked into the public package. Public examples use an original fictional demo and synthetic data, marked DEMO.
