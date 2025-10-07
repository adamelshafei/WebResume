import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/config/portfolioData";

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="bg-muted/50 py-16 px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl" data-testid="heading-about">
          About Me
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
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

          <div>
            <h3 className="mb-6 text-xl font-semibold md:text-2xl" data-testid="heading-skills">
              Technologies I Work With
            </h3>
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
