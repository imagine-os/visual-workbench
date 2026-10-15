# Host-native image generation adapter

This adapter is a recipe for hosts exposing a built-in image generation tool, not a separately implemented API client. Its exact availability and argument shape must be read from the current host. Do not install an SDK or switch to a paid external image API just because the built-in tool differs.

## Preflight

1. Locate the host's image creation/edit tool and local image inspection tool.
2. Inspect every selected local reference; materialize only approved sources. Check file usability and intended role.
3. Read the tool's present reference-input semantics and limits. Prefer explicit local file references where supported. When the tool instead references conversation images, show the target/reference images and choose the smallest supported recent-image span containing every required input. Do not mix mutually exclusive reference mechanisms.
4. Build the ordered input map and resolved prompt from `references/prompt-recipes.md`. The reference list and numbering must agree.
5. Record the host/tool name and exposed metadata; a hidden model remains unknown. Confirm that data sharing and any cost fit the user's authorized scope.

## Execute and inspect

Invoke one generation per distinct requested image. Use genuine transparency only when requested. Await completion rather than treating a running job as successful. Never print image base64 data. Obtain the actual resulting file, inspect it, and compare against character, location, screen, and brand references.

For a correction, inspect the local target first and use the tool's edit/reference mechanism. Include the necessary source references and invariant-preserving edit prompt. Do not describe an uninspected output as reviewed.

Persist project-bound selected outputs in the project workspace with versioned filenames; preserve earlier accepted versions. Use the host's supported upload/attachment mechanism for delivery and verify returned file IDs before reporting delivery. Generating an image and publishing it to a website are separate operations.

## Fidelity

The built-in generation route may reconstruct lettering and UI. Review spelling and identity directly. If a mark remains wrong, omit it or use an explicitly authorized source-image compositing path; do not call a reconstructed mark exact. Exact pixel preservation requires a distinct tested compositor and does not follow from this adapter.

## Validation status

A completed run must be recorded in `examples/validation-log.md` before this package claims that a public recipe was exercised. A successful illustration does not by itself test installation, persistent cross-location identity, every model, or every platform.
