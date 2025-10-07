/**
 * CONTACT SECTION & FOOTER
 * =========================
 * Combined contact CTA and footer with:
 * - Contact heading and description
 * - Email CTA button
 * - Footer with copyright and social links
 * 
 * DATA SOURCE:
 * - Contact text: portfolioData.contact
 * - Email & social: portfolioData.personal
 * 
 * LAYOUT:
 * - Top: Centered contact section with CTA
 * - Bottom: Footer with copyright (left) and social icons (right)
 * 
 * CUSTOMIZATION:
 * - Contact heading: Edit portfolioData.contact.title
 * - Contact description: Edit portfolioData.contact.description
 * - CTA button text: Change "Get In Touch" on line 51
 * - Social icons: Match with Hero.tsx for consistency
 * - Copyright: Auto-updates year, uses personal.name
 * 
 * COMPONENTS USED:
 * - Button (shadcn/ui) - Email CTA and social icons
 * - Lucide icons - Mail, Github, Linkedin, Twitter
 * 
 * NOTE: Social links should match Hero section - update both if changed
 */

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/config/portfolioData";

export function Contact() {
  // Extract contact and personal data from portfolio config
  const { contact, personal } = portfolioData;

  return (
    <section id="contact" className="py-16 px-6 md:py-24">
      
      {/* Contact CTA Section */}
      <div className="mx-auto max-w-4xl text-center">
        
        {/* Contact Heading */}
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl" data-testid="heading-contact">
          {contact.title}
        </h2>
        
        {/* Contact Description */}
        <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-contact-description">
          {contact.description}
        </p>

        {/* Email CTA Button */}
        <Button 
          size="lg" 
          asChild
          data-testid="button-email-cta"
        >
          <a href={`mailto:${personal.email}`}>
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </a>
        </Button>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            
            {/* Copyright - Auto-updates year */}
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
            
            {/* Social Media Icons (same as Hero section) */}
            <div className="flex items-center gap-2">
              
              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-footer-github"
              >
                <a 
                  href={personal.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>

              {/* LinkedIn */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-footer-linkedin"
              >
                <a 
                  href={personal.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>

              {/* Email */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-footer-email"
              >
                <a 
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
