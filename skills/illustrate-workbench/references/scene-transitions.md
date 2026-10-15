# Bridges between living loops

Treat each scene as a state with its own loop, not one long uncontrolled animation.

## State contract
Each scene records a stable ID, reviewed artwork, source versions, loop duration, entry phase, exit phase, and text/status layer. A transition records source scene/phase, destination scene/phase, duration, and whether it is deterministic or generated.

## Start-frame / end-frame bridge
1. Freeze the source at its defined exit phase and capture the actual composited frame
2. Capture the destination's actual entry phase, including its intended character and room
3. Keep the character identity references and camera/aspect-ratio constraints explicit
4. Verify the model actually accepts both endpoint images; a prompt mentioning an end frame is not endpoint conditioning
5. Generate a bounded bridge, then inspect endpoints, every important label, identity, and motion intent
6. Begin the destination loop at the matched phase; do not restart it at an unrelated frame

Matching endpoints alone does not ensure a smooth bridge. Check velocity, camera direction, light, perspective, and character pose. Avoid morphing text or logos: keep critical overlays separate, hide them during a scene change if needed, and reveal the destination's exact layer after settling.

## Reliable fallback
Use a short crossfade, masked wipe, or move-through-neutral-background between static or deterministic scenes. Preload the destination, preserve aspect ratio, and avoid loading flashes. Prefer this over an uncanny generated morph. Label the technique honestly.

## Interaction state machine
States: idle-loop → transition → destination-loop. Handle cancellation, rapid repeated requests, load failure, and returning to the previous scene. Use one transition owner so two animations cannot compete. Keep a still-frame fallback when media decoding fails. Respect reduced motion by switching directly or using a brief opacity change.

## Tests
Inspect A→B and B→A, repeated switches, interruption at beginning/middle/end, slow load, offline cache, and reduced motion. Record which exact scene pair was tested. Do not generalize one successful pair to arbitrary scenes or characters.
