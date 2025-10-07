import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/config/portfolioData";

export function Hero() {
  const { personal } = portfolioData;

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
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl" data-testid="text-name">
            Hello, my name is {personal.name}.
          </h1>
          
          <p className="text-xl font-medium text-muted-foreground md:text-2xl" data-testid="text-title">
            {personal.title}
          </p>

          <Separator className="mx-auto w-24" />

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-tagline">
            {personal.tagline}
          </p>

          <div className="flex flex-col items-center gap-6 pt-4">
            <Button 
              size="lg" 
              onClick={() => handleScroll("projects")}
              data-testid="button-view-work"
            >
              View My Work
            </Button>

            <div className="flex items-center gap-2">
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

              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-twitter"
              >
                <a 
                  href={personal.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>

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
