# Asset register

Store each pack's original masters, approved variants, proposed variants, and deprecated versions in separate named locations. This structure is a convention; adapt to an existing user library without moving files unnecessarily.

Required record fields:
- `asset_id`, `pack_id`, `version`, `kind`, `file_path`, `content_hash`
- `status`: canonical | approved | proposed | deprecated
- `source_asset_id`, `source_version`, `transformation`
- `creator_or_source`, `retrieved_or_created_at`, `rights_holder`, `license`, `usage_restrictions`
- `approval_reference`, `approved_for_public_demo`

For logos add `lockup`, `background`, `colorway`, `format`, `dimensions`, `alpha`, `clear_space`, and `minimum_size` when known. Unknown rights or approval remain unknown, not silently approved. Do not place private approval correspondence in a public manifest.

Example IDs: `demo-emblem/original@1`, `demo-emblem/horizontal-light@1`, `courier/three-quarter@1`, `greenhouse/wide@1`. These are fictional naming examples, not shipped assets.

Canonical change process: establish what supersedes what, preserve old version, record explicit approval, regenerate only affected derivatives, and update consuming scenes' pinning deliberately. A historical render should retain its original pack/version provenance.
