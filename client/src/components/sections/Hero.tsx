/**
 * HERO SECTION - Landing/Welcome Section with Animated Background
 * ================================================================
 * The first thing visitors see - full-screen welcome section with:
 * - Animated dot pattern background (Aceternity UI Hero Highlight)
 * - Your name and title with highlighted text animation
 * - Professional tagline
 * - CTA button to view projects
 * - Social media icon buttons
 * 
 * DATA SOURCE: All content comes from portfolioData.personal
 * 
 * COMPONENTS USED:
 * - HeroHighlight & Highlight (Aceternity UI) - Animated background
 * - Button (shadcn/ui) - CTA and social icons
 * - Framer Motion - Smooth animations
 * - Lucide icons - Social media icons
 */

import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolioData";
import resumePDF from "@assets/Adam Elshafei, Software Engineer & PM_1759864982539.pdf";

export function Hero() {
  // Extract personal data from portfolio config
  const { personal } = portfolioData;

  /**
   * Smooth scroll to a section by ID
   */
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <HeroHighlight containerClassName="min-h-screen">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="space-y-6"
          >
          
          {/* Main Heading - Name with Highlight */}
          <h1 className="text-4xl font-bold leading-relaxed tracking-tight md:text-6xl lg:text-7xl" data-testid="text-name">
            Hi, I'm{" "}
            <Highlight className="text-black dark:text-white">
              {personal.name}
            </Highlight>
          </h1>
          
          {/* Professional Title */}
          <p className="text-xl font-medium text-neutral-700 dark:text-neutral-300 md:text-2xl" data-testid="text-title">
            {personal.title}
          </p>

          {/* Tagline/Professional Summary */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg" data-testid="text-tagline">
            {personal.tagline}
          </p>

          {/* CTA Button and Social Links */}
          <div className="flex flex-col items-center gap-6 pt-4">
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button 
                size="lg" 
                onClick={() => handleScroll("projects")}
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                asChild
                data-testid="button-download-resume"
              >
                <a 
                  href={resumePDF} 
                  download="Adam_Elshafei_Resume.pdf"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Media Icon Buttons */}
            <div className="flex items-center gap-2">
              
              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-github"
              >
                <a 
                  href={personal.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              {/* LinkedIn */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-linkedin"
              >
                <a 
                  href={personal.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              {/* Email */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-email"
              >
                <a 
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
}
