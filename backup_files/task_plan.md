# Task Plan: KeyCloud Premium Landing Page Experience

## Goal
Build a cinematically scroll-driven, Apple-style landing page for the "KeyCloud" mechanical keyboard, featuring a smooth 192-frame assembly animation and immersive product transitions.

## Current Phase
Phase 1: Setup & GSAP Integration

## Phases

### Phase 1: Setup & GSAP Integration
- [ ] Add GSAP, ScrollTrigger, and Lenis (Smooth Scroll) libraries to `index.html`.
- [ ] Refactor `script.js` to use GSAP for frame animation instead of raw scroll events.
- [ ] Configure Lenis for high-end, smooth scrolling behavior.
- **Status:** in_progress

### Phase 2: Modern Design System (CSS Revamp)
- [ ] Update `style.css` with a refined premium dark mode palette.
- [ ] Implement advanced glassmorphism and modern typography (Space Grotesk).
- [ ] Add subtle background gradients and light leaks.
- **Status:** pending

### Phase 3: Hero & Parallax Storytelling
- [ ] Implement parallax effects for the Hero title and badge as the keyboard assembles.
- [ ] Add "Floating Hotspots" (information tags) tied to specific frame ranges.
- [ ] Revamp the scroll indicator to be more dynamic.
- **Status:** pending

### Phase 4: Cinematic Transitions
- [ ] Create the "Apple Zoom" effect where the keyboard scales up during scroll.
- [ ] Implement sticky "Deep Dive" sections for product features.
- [ ] Add motion blur and layer transitions.
- **Status:** pending

### Phase 5: Testing & Performance Optimization
- [ ] Implement advanced image preloading and canvas memory management.
- [ ] Verify responsive design across mobile and desktop.
- [ ] Final UI/UX audit for "Premium" feel.
- **Status:** pending

## Key Questions
1. At which specific frames should the component hotspots (Switches, PCB, etc.) appear? (Decision deferred to Phase 3)
2. Should we add a localized "Buy Now" floating button after the animation? (Likely yes)

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Use GSAP + ScrollTrigger | Industry standard for Apple-style high-performance scroll animations. |
| Integrate Lenis | Provides the specific "premium" smooth scroll feel used by major award-winning sites. |
| Hybrid Section Strategy | Pure frame animation for Hero, followed by sticky CSS/JS transitions for details. |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
|       | 1       |            |

## Notes
- Performance is critical: 192 images are ~500MB+ in memory. Need to ensure canvas resizing and memory release are handled correctly.
- Stick to the "Bozulma" (Don't break) rule: Keep the core 192-frame logic but enhance its execution.
