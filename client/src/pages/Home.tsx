import { Button } from "@/components/ui/button";
import { ArrowRight, Code, PenTool, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="container pt-24 md:pt-32 pb-12">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="font-mono text-xs px-3 py-1 rounded-full border-primary/20 text-primary bg-primary/5">
              AVAILABLE FOR HIRE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              Crafting digital <br/>
              <span className="text-muted-foreground">experiences with code.</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm John Doe, a Design Engineer based in San Francisco. I build accessible, pixel-perfect, and performant web experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/work">
                View Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/about">
                More About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
          <Link href="/work">
            <a className="group flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              View all projects 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <Link key={item} href={`/work/project-${item}`}>
              <a className="group block space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg border border-border bg-secondary/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 group-hover:scale-105 transition-transform duration-500">
                    <Code className="h-16 w-16" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Project Name {item}</h3>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground line-clamp-2">
                    A brief description of the project goes here. It explains the core problem solved and the technologies used.
                  </p>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary" className="font-mono text-xs">React</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">TypeScript</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Tailwind</Badge>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Writing */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Latest Writing</h2>
            <p className="text-muted-foreground">
              Thoughts on software development, design systems, and building products.
            </p>
            <Button variant="outline" asChild>
              <Link href="/blog">
                Read all articles
              </Link>
            </Button>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            {[1, 2, 3].map((item) => (
              <Link key={item} href={`/blog/post-${item}`}>
                <a className="group block border-b border-border pb-8 last:border-0 last:pb-0">
                  <article className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                      <time dateTime="2023-01-01">Oct 12, 2023</time>
                      <span>•</span>
                      <span>Development</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      The Future of Web Development in 2024
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      Exploring the latest trends in frontend frameworks, build tools, and the shift towards server-side rendering.
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read article <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </article>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notes / Knowledge Base */}
      <section className="container">
        <div className="rounded-2xl border border-border bg-secondary/20 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-mono text-sm font-medium">
                <BookOpen className="h-4 w-4" />
                <span>DIGITAL GARDEN</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">My Personal Knowledge Base</h2>
              <p className="text-muted-foreground">
                A collection of raw notes, snippets, and resources I've gathered over the years. Less polished than the blog, but equally useful.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="shrink-0" asChild>
              <Link href="/notes">
                Explore Notes
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {['React Patterns', 'CSS Tricks', 'System Design', 'Accessibility', 'Performance', 'Tools'].map((tag) => (
              <div key={tag} className="flex items-center p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors cursor-default">
                <span className="font-mono text-sm">#{tag.toLowerCase().replace(' ', '-')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
