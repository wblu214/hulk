import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * Books Page
 * 
 * Design: Architectural Minimalist
 * - Clean grid layout
 * - Minimal visual hierarchy
 * - Focus on content
 */

export default function Books() {
  const books = [
    {
      id: 1,
      title: "Book Title 1",
      description: "A brief description of the book or reading list item.",
      category: "Technology",
      year: 2024,
    },
    {
      id: 2,
      title: "Book Title 2",
      description: "Another interesting book or resource that influenced my thinking.",
      category: "Web3",
      year: 2024,
    },
    {
      id: 3,
      title: "Book Title 3",
      description: "Recommended reading for developers and entrepreneurs.",
      category: "Business",
      year: 2023,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Books & Resources</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Books and resources I recommend.
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="relative overflow-hidden rounded-lg border border-border bg-background p-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-bold">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{book.year}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                  
                  <div className="pt-4">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                      {book.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-muted-foreground">More books coming soon...</p>
            <p className="text-sm text-muted-foreground">
              Check back regularly for new additions to my reading list.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Want to discuss?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your thoughts or recommendations on these books.
            </p>
          </div>
          
          <Link href="/thoughts">
            <Button className="gap-2">
              Read My Thoughts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
