import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers, featuring real-time data visualization and inventory management.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    image: "bg-blue-500/10",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
    tags: ["Next.js", "Supabase", "Framer Motion"],
    image: "bg-green-500/10",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Design System Documentation",
    description: "Automated documentation generator for design systems, parsing component props and generating live previews.",
    tags: ["Vue", "Vite", "MDX"],
    image: "bg-purple-500/10",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Weather Forecast PWA",
    description: "Offline-first weather application using service workers and local storage for instant loading.",
    tags: ["PWA", "React", "OpenWeather API"],
    image: "bg-orange-500/10",
    link: "#",
    github: "#"
  }
];

export default function Work() {
  return (
    <div className="container py-24 space-y-16">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h1>
        <p className="text-xl text-muted-foreground">
          A collection of projects I've worked on, ranging from web applications to open source libraries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="group overflow-hidden border-border hover:border-primary/50 transition-colors">
            <div className={`aspect-video ${project.image} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-mono text-4xl font-bold group-hover:scale-105 transition-transform duration-500">
                {project.title.substring(0, 2)}
              </div>
            </div>
            <CardHeader className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
