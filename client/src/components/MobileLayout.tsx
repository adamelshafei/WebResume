/**
 * MOBILE LAYOUT - Linktree-Style Mobile Experience
 * =================================================
 * A simplified, mobile-first layout inspired by Linktree.
 * Displays on small screens (< 768px), while desktop shows full portfolio.
 * 
 * STRUCTURE:
 * - Profile section (avatar, name, title, tagline)
 * - Desktop prompt banner
 * - Action link buttons (stacked vertically)
 * - Social media links
 * - Footer
 * 
 * DATA SOURCE: portfolioData.personal
 * 
 * DESIGN NOTES:
 * - Uses shadcn Button components for consistency
 * - Dark/light theme support via CSS variables
 * - Each link is a full-width button with icon
 * - Maintains brand colors and spacing from main site
 * 
 * CUSTOMIZATION:
 * - Edit link buttons in the linkButtons array below
 * - Adjust avatar/profile section styling
 * - Modify desktop prompt message
 */

import { 
  Github, 
  Linkedin, 
  Mail, 
  Briefcase, 
  FolderGit2, 
  Download,
  Monitor,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { portfolioData } from "@/config/portfolioData";
import resumePDF from "@assets/Adam Elshafei, PM.docx_1759861029618.pdf";

interface MobileLayoutProps {
  onSwitchToDesktop: () => void;
}

export function MobileLayout({ onSwitchToDesktop }: MobileLayoutProps) {
  const { personal } = portfolioData;
  
  // Get initials for avatar fallback
  const initials = personal.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  /**
   * Handle switching to desktop view and scrolling to section
   * Mobile buttons switch to desktop layout to show full content
   */
  const viewDesktopSection = (sectionId: string) => {
    onSwitchToDesktop();
    // Wait for desktop layout to render, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  /**
   * Main action link buttons
   * Each button opens a different action or external link
   * Projects and Experience buttons switch to desktop view to show full content
   */
  const linkButtons = [
    {
      icon: FolderGit2,
      label: "View My Projects",
      onClick: () => viewDesktopSection("projects"),
      testId: "button-mobile-projects"
    },
    {
      icon: Briefcase,
      label: "Professional Experience",
      onClick: () => viewDesktopSection("experience"),
      testId: "button-mobile-experience"
    },
    {
      icon: Download,
      label: "Download Resume",
      href: resumePDF,
      download: "Adam_Elshafei_Resume.pdf",
      testId: "button-mobile-resume"
    },
    {
      icon: Mail,
      label: "Get In Touch",
      href: `mailto:${personal.email}`,
      testId: "button-mobile-email"
    }
  ];

  /**
   * Social media links
   * Renders as icon buttons
   */
  const socialLinks = [
    {
      icon: Github,
      href: personal.social.github,
      label: "GitHub",
      testId: "button-mobile-github"
    },
    {
      icon: Linkedin,
      href: personal.social.linkedin,
      label: "LinkedIn",
      testId: "button-mobile-linkedin"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-md space-y-6">
        
        {/* Desktop Prompt Banner */}
        <Card className="border-primary/20 bg-primary/5 p-4">
          <div className="flex items-start gap-3">
            <Monitor className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">
                Best viewed on desktop
              </p>
              <p className="text-xs text-muted-foreground">
                Visit on a larger screen for the full portfolio experience with interactive projects and detailed work history.
              </p>
            </div>
          </div>
        </Card>

        {/* Profile Section */}
        <div className="text-center space-y-4">
          {/* Avatar */}
          <Avatar className="h-24 w-24 mx-auto border-2 border-primary">
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>

          {/* Name and Title */}
          <div className="space-y-2">
            <h1 
              className="text-2xl font-bold tracking-tight" 
              data-testid="text-mobile-name"
            >
              {personal.name}
            </h1>
            <p 
              className="text-lg text-muted-foreground"
              data-testid="text-mobile-title"
            >
              {personal.title}
            </p>
          </div>

          {/* Tagline */}
          <p 
            className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto"
            data-testid="text-mobile-tagline"
          >
            {personal.tagline}
          </p>
        </div>

        <Separator />

        {/* Action Link Buttons */}
        <div className="space-y-3">
          {linkButtons.map((button, index) => {
            const Icon = button.icon;
            const ButtonContent = (
              <>
                <Icon className="mr-2 h-5 w-5" />
                {button.label}
                {button.href && <ExternalLink className="ml-auto h-4 w-4 opacity-50" />}
              </>
            );

            // If it's a link, use asChild pattern
            if (button.href) {
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="w-full justify-start"
                  asChild
                  data-testid={button.testId}
                >
                  <a 
                    href={button.href} 
                    {...(button.download ? { download: button.download } : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {ButtonContent}
                  </a>
                </Button>
              );
            }

            // Otherwise, use onClick
            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="w-full justify-start"
                onClick={button.onClick}
                data-testid={button.testId}
              >
                {ButtonContent}
              </Button>
            );
          })}
        </div>

        <Separator />

        {/* Social Links */}
        <div>
          <p className="text-sm text-muted-foreground text-center mb-3">
            Connect with me
          </p>
          <div className="flex items-center justify-center gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid={social.testId}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-6 pb-4">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
