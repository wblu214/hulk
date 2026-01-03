import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Zap, Code2, Rocket } from "lucide-react";

/**
 * About Page
 * 
 * Design: Architectural Minimalist
 * - Personal narrative
 * - Clear information hierarchy
 * - Minimal visual elements
 */

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">About Me</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get to know who I am, what I do, and what drives my passion for building in Web3.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl space-y-16">
          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Who I Am</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Hulk, a 00后 full-stack developer and Web3 entrepreneur. I graduated from a 211 university and have been working in tech for about a year, but I'm all-in on Web3 now.
              </p>
              <p>
                Currently, I'm the lead developer for RWA Hub, building infrastructure for Real World Assets on the blockchain. My primary focus is backend development, but I'm equally comfortable working on frontend systems using React and Next.js.
              </p>
              <p>
                Before diving into Web3, I worked at Dewu (得物) building intelligent customer service systems and at Wind (万得) developing global enterprise databases. These experiences shaped my understanding of large-scale systems and gave me the foundation to tackle complex Web3 infrastructure challenges.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Go", "Python"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-border text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "Next.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-border text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Blockchain
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Solidity", "Web3", "Smart Contracts"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-border text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hackathons */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Hackathon Participation</h2>
            <p className="text-lg text-muted-foreground">
              I'm actively participating in major blockchain hackathons to build innovative solutions and connect with the Web3 community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "BNB Abu Dhabi Hackathon",
                "ADVX 2025",
                "ETH Shanghai 2025",
                "Monad Hackathon",
              ].map((hackathon) => (
                <div
                  key={hackathon}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold text-foreground">{hackathon}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Notable Projects</h2>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 space-y-2">
                <h3 className="text-xl font-bold">3copy - Chrome Extension</h3>
                <p className="text-muted-foreground">
                  A Chrome extension designed to boost developer productivity. It's been called a "vibe coding神器" (vibe coding tool) for its ability to streamline daily development workflows.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6 space-y-2">
                <h3 className="text-xl font-bold">RWA Hub</h3>
                <p className="text-muted-foreground">
                  Leading the development of a Real World Assets infrastructure hub. This project aims to bridge traditional finance and blockchain, enabling enterprise adoption of Web3 technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6 pt-8 border-t border-border">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in discussing Web3, blockchain technology, and building cool things. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Social Media</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://x.com/lwb214" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-input hover:bg-accent transition-colors">
                    <Twitter className="h-4 w-4" />
                    X / Twitter
                  </a>
                  <a href="https://github.com/wblu214" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-input hover:bg-accent transition-colors">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a href="https://t.me/wblu0214" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-input hover:bg-accent transition-colors">
                    <Mail className="h-4 w-4" />
                    Telegram
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Direct Contact</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>WeChat: <code className="bg-secondary px-2 py-1 rounded text-sm">Lu-limitations</code></p>
                  <p className="text-sm">(Please note your purpose when adding)</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Follow My Updates</h3>
                <p className="text-muted-foreground">
                  Subscribe to my WeChat Official Account: <code className="bg-secondary px-2 py-1 rounded text-sm">颢克说AI</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
