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
    { label: "Books", path: "/books", labelCn: "书籍" },
    { label: "Moments", path: "/moments", labelCn: "朋友圈" },
    { label: "Thoughts", path: "/thoughts", labelCn: "思考" },
    { label: "About", path: "/about", labelCn: "关于" },
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
              <a className="text-xl font-bold tracking-tighter font-sans">
                HULK<span className="text-primary">.</span>
              </a>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a className={cn(
                    "text-sm font-medium",
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  )} title={item.labelCn}>
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
                <a href="https://github.com/wblu214" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                <a href="https://x.com/lwb214" target="_blank" rel="noopener noreferrer">
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
                    {item.label} <span className="text-xs text-muted-foreground ml-2">({item.labelCn})</span>
                  </a>
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border mt-2">
                <button onClick={toggleTheme} className="text-muted-foreground hover:text-primary">
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <a href="https://github.com/wblu214" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://x.com/lwb214" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
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
                  HULK<span className="text-primary">.</span>
                </a>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Web3 创业者，全栈开发者。关注区块链、RWA、工程效率。
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                  <a href="mailto:hello@example.com">
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                  <a href="https://github.com/wblu214" target="_blank" rel="noopener noreferrer">
                    <Github className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                  <a href="https://x.com/lwb214" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/books"><a className="hover:text-primary transition-colors">Books 书籍</a></Link></li>
                <li><Link href="/moments"><a className="hover:text-primary transition-colors">Moments 朋友圈</a></Link></li>
                <li><Link href="/thoughts"><a className="hover:text-primary transition-colors">Thoughts 思考</a></Link></li>
                <li><Link href="/about"><a className="hover:text-primary transition-colors">About 关于</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider mb-4 text-foreground">Social</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://x.com/lwb214" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter / X</a></li>
                <li><a href="https://github.com/wblu214" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://t.me/wblu0214" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">WeChat: Lu-limitations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider mb-4 text-foreground">Connect</h4>
              <p className="text-sm text-muted-foreground mb-4">
                关注我的最新动态和思考分享。
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
            <p>© {new Date().getFullYear()} Hulk. All rights reserved.</p>
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
