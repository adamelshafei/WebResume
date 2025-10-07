import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a 
          href="#hero" 
          className="text-xl font-bold tracking-tight"
          data-testid="link-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          Portfolio
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-menu-toggle">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="justify-start"
                    asChild
                    data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                  >
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
