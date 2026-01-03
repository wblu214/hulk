import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import LightBeam from "./LightBeam";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "Blog", path: "/blog" },
    { label: "Notes", path: "/notes" },
    { label: "About", path: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20 relative overflow-hidden">
      <LightBeam intensity={0.12} size={500} followMouse />
      
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <a className="text-xl font-bold tracking-tighter font-sans hover:opacity-80 transition-opacity">
                JOHN DOE<span className="text-primary">.</span>
              </a>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  )}>
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background p-4 animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a 
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary py-2",
                      isActive(item.path) ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border mt-2">
                <button onClick={toggleTheme} className="text-muted-foreground hover:text-primary">
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 relative z-10">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 space-y-4">
              <Link href="/">
                <a className="text-lg font-bold tracking-tighter">
                  JOHN DOE<span className="text-primary">.</span>
                </a>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building digital products with focus on design, performance and user experience.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                  <a href="mailto:hello@example.com">
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                  <a href="https://github.com">
                    <Github className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                  <a href="https://linkedin.com">
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/work"><a className="hover:text-primary transition-colors">Work</a></Link></li>
                <li><Link href="/blog"><a className="hover:text-primary transition-colors">Blog</a></Link></li>
                <li><Link href="/notes"><a className="hover:text-primary transition-colors">Notes</a></Link></li>
                <li><Link href="/about"><a className="hover:text-primary transition-colors">About</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider mb-4 text-foreground">Social</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider mb-4 text-foreground">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to get the latest updates on my projects and writings.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
