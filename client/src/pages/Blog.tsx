import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring the latest trends in frontend frameworks, build tools, and the shift towards server-side rendering.",
    date: "Oct 12, 2023",
    category: "Development",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to building complex layouts with CSS Grid, including practical examples and fallbacks.",
    date: "Sep 28, 2023",
    category: "Design",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Building Accessible Components",
    excerpt: "Why accessibility matters and how to implement WAI-ARIA patterns in your React components.",
    date: "Sep 15, 2023",
    category: "Accessibility",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "State Management in 2024",
    excerpt: "Comparing Redux, Zustand, Jotai, and React Context for managing application state.",
    date: "Aug 30, 2023",
    category: "Engineering",
    readTime: "10 min read"
  }
];

export default function Blog() {
  return (
    <div className="container py-24 space-y-16">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Writing</h1>
        <p className="text-xl text-muted-foreground">
          Thoughts, tutorials, and insights on software development, design, and technology.
        </p>
      </div>

      <div className="max-w-3xl space-y-12">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/post-${post.id}`}>
            <a className="group block space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span className="text-primary">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {post.excerpt}
              </p>
              
              <div className="pt-2">
                <span className="text-sm font-medium underline decoration-primary/0 underline-offset-4 group-hover:decoration-primary transition-all">
                  Read more
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
