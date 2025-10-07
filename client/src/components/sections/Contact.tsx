import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/config/portfolioData";

export function Contact() {
  const { contact, personal } = portfolioData;

  return (
    <section id="contact" className="py-16 px-6 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl" data-testid="heading-contact">
          {contact.title}
        </h2>
        
        <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-contact-description">
          {contact.description}
        </p>

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

      <footer className="mt-16 border-t pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2">
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

              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-footer-twitter"
              >
                <a 
                  href={personal.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>

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
