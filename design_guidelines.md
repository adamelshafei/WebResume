# Design Guidelines: Clarity Portfolio Template

## Design Approach

**Selected Approach:** Modern Developer Portfolio (Reference-based)
Drawing inspiration from contemporary developer portfolios like Linear, Vercel, and GitHub's design language - emphasizing clarity, professionalism, and subtle sophistication.

**Core Principles:**
- Clarity over complexity: Every element serves a purpose
- Generous breathing room: White space as a design element
- Subtle depth: Minimal shadows and borders for visual hierarchy
- Professional restraint: Muted, sophisticated color palette

---

## Color Palette

### Light Mode
- **Background:** 0 0% 100% (pure white)
- **Foreground/Text:** 222 47% 11% (near black with slight warmth)
- **Primary:** 222 47% 11% (dark, professional - matching foreground for cohesion)
- **Primary Foreground:** 210 40% 98% (off-white for contrast)
- **Muted Background:** 210 40% 96% (subtle gray for cards/sections)
- **Muted Foreground:** 215 16% 47% (mid-gray for secondary text)
- **Border:** 214 32% 91% (light gray for subtle dividers)
- **Accent:** 217 91% 60% (professional blue for interactive elements)

### Dark Mode
- **Background:** 222 47% 11% (deep charcoal)
- **Foreground/Text:** 210 40% 98% (off-white)
- **Primary:** 210 40% 98% (light for dark backgrounds)
- **Primary Foreground:** 222 47% 11% (dark for contrast)
- **Muted Background:** 217 33% 17% (slightly lighter charcoal for cards)
- **Muted Foreground:** 215 20% 65% (light gray for secondary text)
- **Border:** 217 33% 21% (subtle borders in dark mode)
- **Accent:** 217 91% 60% (same blue, works in both modes)

---

## Typography

**Font Family:** Inter (via Google Fonts CDN)
- Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

**Hierarchy:**
- **Hero Name:** text-5xl md:text-7xl, font-bold, tracking-tight
- **Hero Title:** text-xl md:text-2xl, font-medium, text-muted-foreground
- **Section Headings:** text-3xl md:text-4xl, font-bold, tracking-tight
- **Project Titles:** text-xl md:text-2xl, font-semibold
- **Body Text:** text-base md:text-lg, leading-relaxed (1.75)
- **Small Text/Captions:** text-sm, text-muted-foreground

**Key Styling:**
- Use tracking-tight for large headings (creates modern, condensed feel)
- Maintain leading-relaxed for body text (improves readability)
- Consistent font-medium for subtle emphasis, font-semibold for stronger emphasis

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- **Component Internal:** p-4, p-6, gap-4
- **Section Padding:** py-16 md:py-24, px-6 md:px-8
- **Element Gaps:** space-y-8, gap-6, gap-12
- **Margins:** mt-8, mb-12, mx-auto

**Container Strategy:**
- **Max Width:** max-w-6xl mx-auto (1152px for main content)
- **Project Grid:** max-w-7xl mx-auto (slightly wider for visual breathing room)
- **Text Content:** max-w-3xl for optimal reading width in About section

**Grid Patterns:**
- **Projects:** grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- **About Section:** grid md:grid-cols-2 gap-12 (bio left, skills right)

---

## Component Library

### Header/Navigation
- **Desktop:** Sticky header (sticky top-0 z-50), backdrop-blur-md with border-b
- **Container:** Horizontal flex layout with logo left, nav center, dark mode toggle right
- **Mobile:** Sheet component (off-canvas drawer) triggered by hamburger Button
- **Styling:** Minimal height (h-16), transparent background with blur effect

### Hero Section
- **Layout:** Full viewport height (min-h-screen), centered content (flex items-center justify-center)
- **Content Stack:** Centered text with space-y-6
- **CTA Buttons:** Primary button (solid) + secondary ghost buttons for social links
- **Visual Treatment:** Clean, no background image - rely on typography and whitespace
- **Social Icons:** Horizontal row of icon-only Button components (variant="ghost" size="icon")

### About Section
- **Background:** Alternating background (bg-muted/50 for visual break from white)
- **Biography:** Left column with space-y-4 paragraph spacing
- **Skills:** Right column with flex flex-wrap gap-2 for Badge components
- **Badge Styling:** variant="secondary", subtle rounded-full appearance

### Projects Section
- **Cards:** shadcn Card with hover:shadow-lg transition
- **Card Structure:** CardHeader (title), CardDescription (2-line description with line-clamp), CardContent (tech badges), CardFooter (button links)
- **Technology Badges:** Small variant="outline" badges in flex wrap layout
- **Buttons:** Two buttons side-by-side - "Live Demo" (default) and "GitHub" (outline)

### Contact/Footer
- **Contact CTA:** Large centered section with heading and primary email Button
- **Footer Bar:** bg-muted border-t with copyright and repeated social icons
- **Spacing:** py-12 for contact section, py-6 for footer bar

---

## Dark Mode Implementation

- Use shadcn's theme provider pattern with localStorage persistence
- Toggle component in header switches between "light" and "dark" themes
- All colors reference CSS variables that automatically update on theme change
- Ensure form inputs and interactive elements have proper dark mode contrast
- Maintain consistent card elevation: subtle borders in light mode, slightly lighter bg in dark mode

---

## Visual Enhancements

**Micro-interactions:**
- Subtle transitions on all interactive elements (transition-colors duration-200)
- Card hover effects (transform scale-[1.02] on project cards)
- Smooth scroll behavior for anchor navigation

**Depth & Hierarchy:**
- Use border instead of heavy shadows (border-border)
- Minimal shadow on cards: shadow-sm default, shadow-lg on hover
- Subtle background color shifts between sections (alternate white and bg-muted/50)

**Responsive Behavior:**
- Mobile: Single column, full-width cards, stacked navigation
- Tablet (md:): Two-column project grid, side-by-side About layout
- Desktop (lg:): Three-column project grid, full horizontal header

---

## Images

**Hero Section:** NO large hero image - keep it clean and typography-focused to align with the minimal, professional aesthetic. The visual impact comes from excellent typography and layout, not imagery.

**Project Cards:** Each project card should have a placeholder for a project screenshot/thumbnail at the top of the card (aspect-video ratio, object-cover). Use a subtle border-b to separate image from content below.

**About Section:** No images - focus on text and skill badges for a clean, professional look.

---

This design system creates a polished, professional developer portfolio that feels modern and minimal while maintaining excellent usability and visual hierarchy across all devices and theme modes.