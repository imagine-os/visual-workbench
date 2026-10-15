# Renderer and host adapters

The core is tool-neutral. An adapter describes capabilities and translates a scene brief into the actual host API. It does not confer permissions.

Required capability checks: image creation, reference-image input, current reference count/size limits, local image inspection, file output and delivery. Optional: edit existing output, mask/inpaint, perspective compositing, animation. If no suitable renderer exists, return a prepared scene brief and identify the missing capability; do not claim a completed image.

Common adapter request: scene brief, ordered reference roles/files, desired dimensions, chosen pack versions, evidence timestamp, fidelity mode (`illustrative` or `source-pixel-composite`), authorized provider, budget ceiling, and retry policy. Response: local output paths, actual provider/model, used references, caveats, cost if available, and QA result. Never put keys in this manifest.

Suggested first implementation: host-native image generation plus file attachments. Its tool names and reference limits must be read from the actual host. A second adapter can support a user-configured image API. A compositing adapter can put true screenshot pixels into a generated empty screen; its projective transform and masks still require visual QA. Adapter docs should disclose whether they are tested, experimental, or only proposed.

Animation is an optional extra. Keep text/screens/marks static when possible while animating a small gesture or environmental motion. It adds provider exposure, cost, and QA; it is not enabled by installing this skill. Record actual cost where reported and stop at the approved total rather than using unbounded retries.

A host-native execution recipe is provided in `references/host-imagegen-adapter.md`. It is instructions for an available host tool, not a standalone client. The public recipe validation status is recorded in `examples/validation-log.md`; no adapter is certified across platforms.
