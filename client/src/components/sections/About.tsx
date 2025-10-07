/**
 * ABOUT SECTION - Biography and Skills
 * =====================================
 * Two-column layout (stacks on mobile):
 * - Left: Biography paragraphs
 * - Right: Skills as badges
 * 
 * DATA SOURCE: All content from portfolioData.about
 * 
 * LAYOUT:
 * - Desktop: Side-by-side columns (md:grid-cols-2)
 * - Mobile: Stacked vertically
 * - Has subtle background (bg-muted/50) for visual distinction
 * 
 * CUSTOMIZATION:
 * - Bio paragraphs: Edit portfolioData.about.bio array
 * - Skills: Edit portfolioData.about.skills array
 * - Section heading: Change "About Me" on line 30
 * - Skills heading: Change "Technologies I Work With" on line 48
 * 
 * COMPONENTS USED:
 * - Badge (shadcn/ui) - Each skill displays as a badge with variant="secondary"
 */

import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/config/portfolioData";

export function About() {
  // Extract about data from portfolio config
  const { about } = portfolioData;

  return (
    <section id="about" className="bg-muted/50 py-16 px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl" data-testid="heading-about">
          About Me
        </h2>

        {/* Two-column grid: Bio on left, Skills on right */}
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Left Column: Biography Paragraphs */}
          <div className="space-y-4">
            {about.bio.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-base leading-relaxed md:text-lg"
                data-testid={`text-bio-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column: Skills */}
          <div>
            <h3 className="mb-6 text-xl font-semibold md:text-2xl" data-testid="heading-skills">
              Technologies I Work With
            </h3>
            
            {/* Skills as flex-wrapped badges */}
            <div className="flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
