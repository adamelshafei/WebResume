/**
 * EXPERIENCE SECTION - Work History Timeline
 * ===========================================
 * Displays professional experience in a vertical timeline format.
 * 
 * DATA SOURCE: All content from portfolioData.experience array
 * 
 * TIMELINE DESIGN:
 * - Vertical line connecting all positions
 * - Each role has a dot/node on the timeline
 * - Cards with company, position, dates, and achievements
 * - "Present" badge for current position
 * 
 * LAYOUT:
 * - Desktop: Timeline on left, content on right
 * - Mobile: Simplified vertical layout
 * 
 * CUSTOMIZATION:
 * - Experience data: Edit portfolioData.experience array
 * - Section heading: Change "Professional Experience" below
 * - Timeline colors: Modify border/background classes
 * 
 * COMPONENTS USED:
 * - Card (shadcn/ui) - Each experience entry
 * - Badge (shadcn/ui) - "Present" indicator for current role
 */

import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/config/portfolioData";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl" data-testid="heading-experience">
          Professional Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line (hidden on mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={job.id} className="relative" data-testid={`experience-item-${job.id}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block -translate-x-1/2" />

                {/* Content Card */}
                <Card className="md:ml-20">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                        <CardTitle className="text-xl" data-testid={`text-position-${job.id}`}>
                          {job.position}
                        </CardTitle>
                      </div>
                      {job.current && (
                        <Badge variant="default" data-testid={`badge-current-${job.id}`}>
                          Current
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground" data-testid={`text-company-${job.id}`}>
                        {job.company}
                      </p>
                      <p data-testid={`text-date-${job.id}`}>
                        {job.startDate} - {job.endDate}
                      </p>
                      <p data-testid={`text-location-${job.id}`}>
                        {job.location}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4" data-testid={`text-description-${job.id}`}>
                      {job.description}
                    </p>
                    
                    {/* Achievements List */}
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="flex items-start gap-2 text-sm"
                          data-testid={`text-achievement-${job.id}-${achIndex}`}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
