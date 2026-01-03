import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * Thoughts Page
 * 
 * Design: Architectural Minimalist
 * - Essay-like layout
 * - Focus on deep thinking
 * - Minimal visual clutter
 */

export default function Thoughts() {
  const thoughts = [
    {
      id: 1,
      title: "The Future of RWA in Web3",
      excerpt: "Real World Assets are the bridge between traditional finance and blockchain. Exploring the opportunities and challenges ahead.",
      date: "Jan 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Developer Tools That Matter",
      excerpt: "What makes a developer tool successful? Reflections on creating 3copy and the importance of solving real problems.",
      date: "Dec 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "From Enterprise Systems to Web3",
      excerpt: "Lessons learned transitioning from building large-scale enterprise systems at Dewu and Wind to Web3 infrastructure.",
      date: "Nov 2024",
      readTime: "8 min read",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Thoughts</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My thoughts on Web3 and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {thoughts.map((thought) => (
              <article
                key={thought.id}
                className="border-b border-border pb-12"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{thought.date}</span>
                    <span>•</span>
                    <span>{thought.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold">
                    {thought.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {thought.excerpt}
                  </p>
                  
                  <div className="pt-4">
                    <Button variant="ghost" className="gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-muted-foreground">More thoughts coming soon...</p>
            <p className="text-sm text-muted-foreground">
              Check back regularly for new essays and reflections.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Subscribe to Updates</h2>
            <p className="text-lg text-muted-foreground">
              Get notified when I publish new thoughts and essays.
            </p>
          </div>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
