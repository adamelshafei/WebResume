/**
 * HOME PAGE - Main Portfolio Page
 * ================================
 * Single-page portfolio layout with all sections stacked vertically.
 * 
 * STRUCTURE:
 * 1. Header (sticky navigation)
 * 2. Hero (welcome section)
 * 3. About (bio and skills)
 * 4. Projects (portfolio grid)
 * 5. Contact (CTA and footer)
 * 
 * NAVIGATION:
 * - Uses anchor links (#hero, #about, etc.) with smooth scrolling
 * - No page routing - all content on one page
 * - Header is sticky and always visible
 * 
 * CUSTOMIZATION:
 * - To reorder sections: Change the order of components in <main>
 * - To remove a section: Delete the import and component
 * - To add a section: Create component, import it, add to <main>
 * 
 * SECTIONS INCLUDED:
 * - Header: Navigation and theme toggle
 * - Hero: Name, title, tagline, social links
 * - About: Biography and skills
 * - Projects: Portfolio items grid
 * - Contact: Email CTA and footer
 * 
 * NOTE: All section content comes from client/src/config/portfolioData.ts
 */

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky Header - always visible */}
      <Header />
      
      {/* Main Content - all sections in order */}
      <main>
        <Hero />      {/* Landing section with name and CTA */}
        <About />     {/* Bio and skills */}
        <Projects />  {/* Portfolio grid */}
        <Contact />   {/* Email CTA and footer */}
      </main>
    </div>
  );
}
