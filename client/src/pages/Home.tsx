import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code2, Zap } from "lucide-react";

/**
 * Home Page
 * 
 * Design: Architectural Minimalist
 * - Bold typography hierarchy
 * - Ample whitespace
 * - Minimal color accents
 * - Clear call-to-action
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              BUILDING IN WEB3
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="block">Building</span>
                <span className="block text-muted-foreground">the future of RWA.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                I'm Hulk, a full-stack developer and Web3 entrepreneur. Currently leading RWA Hub development. Passionate about blockchain, developer tools, and writing efficient code. Previously worked at Dewu (智能客服) and Wind (万得) on enterprise-scale systems.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Java", "Go", "Python", "JavaScript", "React", "Next.js", "Solidity"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full border border-border bg-background text-xs font-medium text-foreground hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/about">
                <Button className="gap-2" size="lg">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/wblu214" target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Selected projects showcasing my work in Web3, backend systems, and developer tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Card 1 */}
              <div className="relative overflow-hidden rounded-lg border border-border bg-background p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">3copy</h3>
                      <p className="text-sm text-muted-foreground">Chrome Extension</p>
                    </div>
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A Chrome extension designed for developers. Vibe coding神器 - streamlines daily development workflow with smart copy-paste utilities.
                  </p>
                  <div className="flex gap-2 pt-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                      Chrome API
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="relative overflow-hidden rounded-lg border border-border bg-background p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">RWA Hub</h3>
                      <p className="text-sm text-muted-foreground">Web3 Infrastructure</p>
                    </div>
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leading development of a Real World Assets (RWA) infrastructure hub. Building scalable blockchain systems for enterprise adoption.
                  </p>
                  <div className="flex gap-2 pt-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                      Solidity
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                      Go
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                      Blockchain
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link href="/books">
                <Button variant="outline" className="gap-2">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Hackathon Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Actively participating in major blockchain hackathons and building innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "BNB Abu Dhabi Hackathon", year: "2025" },
                { name: "ADVX 2025", year: "2025" },
                { name: "ETH Shanghai 2025", year: "2025" },
                { name: "Monad Hackathon", year: "2025" },
              ].map((hackathon, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold text-foreground">{hackathon.name}</p>
                  <p className="text-sm text-muted-foreground">{hackathon.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in Web3, blockchain, or collaboration? Reach out via social media or email.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="https://x.com/lwb214" target="_blank" rel="noopener noreferrer">
                Follow on X
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/wblu214" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://t.me/wblu0214" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
