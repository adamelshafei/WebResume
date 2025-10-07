/**
 * HOME PAGE - Responsive Portfolio Layout
 * ========================================
 * Displays different layouts based on screen size:
 * - MOBILE (< 768px): Linktree-style simplified layout
 * - DESKTOP (>= 768px): Full portfolio with all sections
 * 
 * MOBILE LAYOUT (Linktree-style):
 * - Profile section with avatar and bio
 * - Desktop prompt banner
 * - Stacked action buttons (projects, experience, resume, contact)
 * - Social links
 * - Minimal, easy-to-tap interface
 * 
 * DESKTOP LAYOUT (Full Portfolio):
 * 1. Header (sticky navigation)
 * 2. Hero (welcome section)
 * 3. About (bio and skills)
 * 4. Experience (work history timeline)
 * 5. Projects (portfolio grid)
 * 6. Contact (CTA and footer)
 * 
 * RESPONSIVE LOGIC:
 * - useIsMobile hook detects screen width
 * - Automatically switches layout on resize
 * - Breakpoint: 768px (Tailwind md)
 * 
 * CUSTOMIZATION:
 * - Change breakpoint in useIsMobile hook
 * - Edit MobileLayout for mobile experience
 * - Modify desktop sections as needed
 * 
 * NOTE: All content comes from client/src/config/portfolioData.ts
 */

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { MobileLayout } from "@/components/MobileLayout";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home() {
  // Detect if user is on mobile device (< 768px)
  const isMobile = useIsMobile();
  
  // State to track if user wants to force desktop view on mobile
  const [forceDesktop, setForceDesktop] = useState(false);

  /**
   * Switch from mobile to desktop view
   * Allows mobile users to access full portfolio when needed
   */
  const switchToDesktop = () => {
    setForceDesktop(true);
  };

  // Show Linktree-style layout on mobile (unless user forces desktop)
  if (isMobile && !forceDesktop) {
    return <MobileLayout onSwitchToDesktop={switchToDesktop} />;
  }

  // Show full portfolio on desktop
  return (
    <div className="min-h-screen">
      {/* Sticky Header - always visible */}
      <Header />
      
      {/* Main Content - all sections in order */}
      <main>
        <Hero />        {/* Landing section with name and CTA */}
        <About />       {/* Bio and skills */}
        <Experience />  {/* Work history timeline */}
        <Projects />    {/* Portfolio grid */}
        <Contact />     {/* Email CTA and footer */}
      </main>
    </div>
  );
}
