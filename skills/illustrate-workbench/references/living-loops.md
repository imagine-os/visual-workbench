# Living loops with readable evidence

## Choose the deliverable
An image is static. Deliver a browser scene, video (WebM/MP4), or GIF as appropriate. Prefer browser/video for readable screens; GIF palette and compression can damage text. Never describe an untested clip as seamless.

## Separate the layers
1. Locked evidence: genuine screenshots, exact labels, logos, and status cards
2. Moving scene: character breathing/blinking, leaves, light accents, small mechanical motion
3. Interaction: semantic HTML controls and focus indicators, when applicable

For exact text, keep original pixels or HTML on a separate layer. Do not ask a video model to preserve small text over many frames and assume it did. A flattened illustration is not automatically separable: obtain a clean plate and masks, or keep the entire picture still and add clearly illustrative ambient layers. Do not reveal a duplicate underlying logo when moving an overlay.

## Deterministic loop recipe
Use a single normalized phase p = (elapsed modulo duration) / duration. Derive animation from periodic functions such as sin(2πp), using small amplitudes. Match position, rotation, scale, opacity, lighting, and velocity at the boundary. Avoid independent random changes, non-looping camera motion, and abrupt visibility resets. Model a blink with a smooth pulse that starts and ends at zero inside the cycle.

Render a fixed frame count at a fixed frame rate. Do not duplicate the end frame as an extra hold. Test the last-to-first transition and view at least three repetitions at normal speed. Compare frame differences around the boundary with ordinary neighboring-frame differences; image similarity alone does not establish natural motion.

## Generated video recipe
Verify the selected provider supports the intended image conditioning and loop controls. Use a low-motion prompt: locked camera, stationary screens and labels, one or two subtle periodic actions. First-frame equals last-frame can help position continuity but does not guarantee velocity continuity. Inspect every frame containing important text and reject drift, invented status, altered branding, or unintended gestures. Keep any reference upload and charges within authorization.

## Quality gates
- Text, screenshot content, and logos remain stable at intended display size
- No visible jump, brightness pulse, pause, or repeated-frame stutter at seam
- Motion reinforces the task and does not imply work occurred when status is waiting
- Pause control and reduced-motion still state work
- Export resolution, duration, frame rate, codec, source versions, and inspection results recorded
- Any remaining seam or generative drift disclosed
