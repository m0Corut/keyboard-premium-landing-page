# Findings & Decisions: KeyCloud Experience

## Requirements
- 192-frame keyboard assembly animation (hero section).
- "Apple style" cinematically scroll-driven transitions after the assembly.
- Floating information tags (hotspots) for keyboard parts.
- Premium aesthetics: Awwwards-winning quality, smooth transitions, high-end typography.
- Accessibility: Respect reduced motion, use semantic HTML.

## Research Findings
- **Frame Source:** 192 PNGs located in `images/00001.png` to `00192.png`.
- **Current Stack:** Vanilla JS with manual scroll handling. Needs upgrade to GSAP for better scrubbing.
- **Scroll Hijacking:** User wants Apple/Awwwards feel, which implies smooth scroll (Lenis) rather than hijacking.

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| GSAP ScrollTrigger | Necessary for precise mapping of scroll position to frame index and triggering sub-animations. |
| Lenis (Studio Freight) | Minimal and performant smooth scroll library that doesn't break native browser behavior. |
| CSS Variable Theming | Already in place, will be expanded for easier "premium" styling. |
| Canvas Rendering | Efficient for drawing 192 full-page images without DOM bloat. |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
|       |            |

## Resources
- GSAP Docs: https://greensock.com/docs/v3/Plugins/ScrollTrigger
- Lenis Smooth Scroll: https://github.com/darkroomengineering/lenis
- Apple Product Pages (Reference): https://www.apple.com/iphone-15-pro/

## Visual/Browser Findings
- Current UI looks 2023 style (good but generic). Needs more contrast, better spacing, and dynamic light effects.
- The 192-frame images are high quality, providing a solid foundation for the Zoom effects.

*Update this file after every 2 view/browser/search operations*
