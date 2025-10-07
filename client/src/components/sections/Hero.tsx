/**
 * HERO SECTION - Landing/Welcome Section
 * =======================================
 * The first thing visitors see - full-screen welcome section with:
 * - Your name and title
 * - Professional tagline
 * - CTA button to view projects
 * - Social media icon buttons
 * 
 * DATA SOURCE: All content comes from portfolioData.personal
 * 
 * CUSTOMIZATION:
 * - Edit greeting text on line 27 (currently "Hello, my name is...")
 * - Modify CTA button text on line 46
 * - Add/remove social icons (also update Contact.tsx for consistency)
 * - Adjust spacing/sizing via Tailwind classes
 * 
 * COMPONENTS USED:
 * - Button (shadcn/ui) - CTA and social icons
 * - Separator (shadcn/ui) - Visual divider line
 * - Lucide icons - Social media icons
 */

import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    <section 
      id="hero" 
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          
          {/* Main Heading - Name */}
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl" data-testid="text-name">
            Hello, my name is {personal.name}.
          </h1>
          
          {/* Professional Title */}
          <p className="text-xl font-medium text-muted-foreground md:text-2xl" data-testid="text-title">
            {personal.title}
          </p>

          {/* Visual Separator */}
          <Separator className="mx-auto w-24" />

          {/* Tagline/Professional Summary */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-tagline">
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
        </div>
      </div>
    </section>
  );
}
