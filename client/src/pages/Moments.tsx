import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";

/**
 * Moments Page
 * 
 * Design: Architectural Minimalist
 * - Timeline-like layout
 * - Chronological order
 * - Focus on brief updates
 */

export default function Moments() {
  const moments = [
    {
      id: 1,
      date: "Jan 2025",
      title: "Hackathon Season",
      description: "Participating in multiple Web3 hackathons including BNB Abu Dhabi, ETH Shanghai, and Monad.",
      tags: ["Web3", "Hackathon"],
    },
    {
      id: 2,
      date: "Dec 2024",
      title: "RWA Hub Development",
      description: "Leading the development of RWA Hub infrastructure for enterprise blockchain adoption.",
      tags: ["RWA", "Blockchain"],
    },
    {
      id: 3,
      date: "Nov 2024",
      title: "3copy Chrome Extension",
      description: "Released 3copy - a Chrome extension designed to boost developer productivity.",
      tags: ["Tools", "JavaScript"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Moments</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Updates, thoughts, and moments from my journey in Web3, software development, and entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {moments.map((moment, index) => (
              <div key={moment.id} className="relative">
                {/* Timeline dot and line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                {/* Content */}
                <div className="pl-8 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {moment.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold">{moment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{moment.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {moment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacing between items */}
                {index < moments.length - 1 && <div className="mt-8" />}
              </div>
            ))}
          </div>

          {/* Empty State */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-muted-foreground">More moments coming soon...</p>
            <p className="text-sm text-muted-foreground">
              Follow me on social media for real-time updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Stay Updated</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow my social channels for the latest updates and announcements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="https://x.com/lwb214" target="_blank" rel="noopener noreferrer">
                Follow on X
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://t.me/wblu0214" target="_blank" rel="noopener noreferrer">
                Telegram Channel
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
