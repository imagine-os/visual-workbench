# Interactive workbenches

An illustrated screen is not a functional app. Add an explicit interaction layer and label the resulting behavior.

## Three useful levels
1. Hotspots: open a verified project link, show an explanation, enlarge an actual screenshot
2. Scene controls: switch workspace, select a character, pause motion, inspect source/status cards
3. Connected tools: authorized API actions through the host application, with permissions, validation, and confirmed outcomes

Never imply a hotspot manipulates the depicted application when it only opens a link. Never embed credentials or privileged API tokens in public HTML. Never wire destructive or external actions directly to decorative clicks without applicable approval.

## Browser implementation
Use semantic buttons and links over a responsive stage. Store hotspot bounds in normalized image coordinates and account for object-fit letterboxing when mapping to screen pixels. Provide an equivalent text navigation list so controls remain usable when artwork is hidden, zoomed, or viewed with a screen reader. Keep focus visible and give touch targets adequate spacing.

Keep evidence text and logos in stable HTML or exact-image layers where accuracy matters. Do not place fake input fields over a screenshot unless the inputs have a real, clearly described function. Use one animation clock, pause when off-screen, and stop continuous motion for reduced-motion preferences.

## Voice and pen
Voice commands should target named semantic actions, such as 'open the calendar reference', rather than guessed coordinates. Show what was understood before consequential actions. Pen/touch gestures must not conflict with scrolling or drawing. A sketch surface needs real stroke persistence and undo; a decorative notebook is not handwriting support.

## Test matrix
- Keyboard-only navigation, Enter/Space, Escape, focus restoration
- Touch, mouse, and supported pen input
- Narrow/wide screens, zoom, letterboxing, and long labels
- Pause, reduced motion, background-tab behavior
- Real destination URLs, safe new-tab behavior, authenticated destinations
- Missing assets, offline behavior, and stale status labels
- No claims of app sync or live execution without verified backend evidence

## Delivery record
List working interactions and limitations. Keep the static illustration, loop, transition, and connected application as separate deliverable types. Link implementation and tests; distinguish implemented behavior from planned adapters.
