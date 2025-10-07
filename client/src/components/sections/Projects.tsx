/**
 * PROJECTS SECTION - Portfolio Projects Grid
 * ===========================================
 * Displays featured projects in a responsive grid layout.
 * 
 * DATA SOURCE: All content from portfolioData.projects array
 * 
 * LAYOUT:
 * - Mobile: Single column
 * - Tablet: 2 columns (md:grid-cols-2)
 * - Desktop: 3 columns (lg:grid-cols-3)
 * 
 * CARD STRUCTURE (each project):
 * - CardHeader: Title and description
 * - CardContent: Tech stack badges + key achievement
 * - CardFooter: "Live Demo" and "Source" buttons
 * 
 * CUSTOMIZATION:
 * - Projects: Edit portfolioData.projects array
 * - Section heading: Change "Featured Projects" on line 42
 * - Card styling: Modify via Tailwind classes
 * - Button labels: Edit on lines 85 and 101
 * 
 * COMPONENTS USED:
 * - Card (shadcn/ui) - Project container with hover effect
 * - Badge (shadcn/ui) - Technology tags (variant="outline")
 * - Button (shadcn/ui) - Links to demo and source
 * - Lucide icons - ExternalLink and Github icons
 */

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/config/portfolioData";

export function Projects() {
  // Extract projects data from portfolio config
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl" data-testid="heading-projects">
          Featured Projects
        </h2>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="flex flex-col transition-shadow hover:shadow-lg"
              data-testid={`card-project-${project.id}`}
            >
              
              {/* Card Header: Title and Description */}
              <CardHeader>
                <CardTitle data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* Card Content: Tech Stack + Achievement */}
              <CardContent className="flex-1">
                <div className="space-y-4">
                  
                  {/* Technology Stack Badges */}
                  <div>
                    <p className="text-sm font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          data-testid={`badge-tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievement/Impact */}
                  <div>
                    <p className="text-sm font-medium mb-1">Key Achievement:</p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-achievement-${project.id}`}>
                      {project.achievement}
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Card Footer: Action Buttons */}
              <CardFooter className="flex gap-2">
                
                {/* Live Demo Button */}
                <Button 
                  asChild 
                  className="flex-1"
                  data-testid={`button-live-demo-${project.id}`}
                >
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                
                {/* GitHub Source Button */}
                <Button 
                  variant="outline" 
                  asChild 
                  className="flex-1"
                  data-testid={`button-source-${project.id}`}
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
