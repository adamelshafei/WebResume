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
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl" data-testid="heading-projects">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="flex flex-col transition-shadow hover:shadow-lg"
              data-testid={`card-project-${project.id}`}
            >
              <CardHeader>
                <CardTitle data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="space-y-4">
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

                  <div>
                    <p className="text-sm font-medium mb-1">Key Achievement:</p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-achievement-${project.id}`}>
                      {project.achievement}
                    </p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
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
