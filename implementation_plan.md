# Ahmed Yeasin Portfolio — Premium Redesign Plan

A sweeping visual and interaction upgrade across every component. The goal: a cutting-edge developer portfolio that wows on first scroll.

## Tech Stack Available
- React 19 + Vite
- Tailwind CSS v4 + DaisyUI v5
- Framer Motion v12
- Lenis Smooth Scroll
- React Icons

## Design Language
- **Theme**: Deep dark (near-black `#080810`) with electric violet/indigo accents (`#7C3AED` → `#A78BFA`) and a neon lime pop (`#CCFF00`)
- **Typography**: `Outfit` (already loaded) — display sizes with tight tracking
- **Motion**: Scroll-triggered reveals with stagger, magnetic hover effects, floating particles
- **Glass**: `backdrop-blur` cards with translucent borders on dark backgrounds

---

## Proposed Changes

### Global Setup

#### [MODIFY] `src/index.css`
- Set up CSS custom properties for the new color palette
- Add `@keyframes` for floating, shimmer, gradient-shift animations
- Add custom scrollbar styling
- Utility classes for gradient text and glass cards

#### [MODIFY] `src/App.jsx`
- Add a `CustomCursor` component (global)
- Add a page-load fade-in wrapper using Framer Motion `AnimatePresence`
- Keep Lenis config as-is (already good)

---

### New Shared Components

#### [NEW] `src/components/CustomCursor/CustomCursor.jsx`
- A smooth-following dot + ring cursor using `framer-motion` `useMotionValue` + `useSpring`
- Expands on hover over buttons/links
- Hidden on touch devices

#### [NEW] `src/components/SectionTitle/SectionTitle.jsx`
- Reusable animated section heading with a neon underline and fade-in-up reveal
- Accepts `label` (small tag above) and `title` props

---

### Component Upgrades

#### [MODIFY] `src/components/Navbar/Navbar.jsx`
- Glassmorphism bar with `backdrop-blur` + subtle border
- Active section highlight using `IntersectionObserver`
- Animated underline slide on nav links
- Hamburger → X animated icon for mobile
- Logo text with gradient

#### [MODIFY] `src/components/Home/Home.jsx`
- Animated staggered text reveal for the hero heading (each word fades/slides in)
- Floating animated particles/orbs in the background
- A looping typewriter-style subtitle (e.g. "Web Developer | React Specialist | MERN Explorer")
- Profile image with rotating gradient ring border
- Scroll-down arrow animation

#### [MODIFY] `src/components/Skills/Skills.jsx`
- Cards with `whileHover` 3D tilt effect using Framer Motion
- Skill icons animate in with stagger on scroll-enter
- Category pills at top to filter by Frontend / Backend / Tools (tab switching)
- Progress-bar style or radial indicators per skill group header

#### [MODIFY] `src/components/About/About.jsx`
- Full redesign: two-column layout with floating image box + bio text on other side
- Word-by-word text reveal on scroll using Framer Motion `useInView`
- "What I'm learning now" badge strip
- Animated counter stats (e.g., "3+ Projects", "1+ Year Experience")

#### [MODIFY] `src/components/Projects/Projects.jsx`
- Premium card hover: 3D tilt + glowing shadow on hover
- "Featured" badge on ProChallenger card
- Staggered card entrance animation on scroll
- Tech stack icons show as tooltips on hover
- Add a subtle gradient overlay on image hover

#### [MODIFY] `src/components/Contact/Contact.jsx`
- Dark, glassy card with gradient border
- Input fields: animated focus ring using Framer Motion
- Social icon buttons with magnetic hover effect
- Animated checkmark after form submission

#### [MODIFY] `src/components/Footer/Footer.jsx`
- Full-width with a decorative gradient wave at the top
- Brand tagline with code-style formatting
- Links with animated neon underline on hover
- Floating "Back to Top" button that appears after scrolling down

---

## Verification Plan
### Manual Verification
- Run `npm run dev` and visually inspect each section
- Test scroll animations triggering correctly
- Test form submission UX
- Test mobile hamburger menu
- Confirm custom cursor doesn't interfere with interactivity

> [!IMPORTANT]
> Approve this plan and I will implement all changes. I'll do every component one at a time and keep the live dev server running.
