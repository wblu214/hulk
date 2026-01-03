import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const notes = [
  { category: "React", title: "useEffect Dependency Array Rules", date: "2023-10-01" },
  { category: "React", title: "Custom Hooks for Form Handling", date: "2023-09-25" },
  { category: "CSS", title: "Centering with Flexbox vs Grid", date: "2023-09-20" },
  { category: "CSS", title: "CSS Variables for Theming", date: "2023-09-15" },
  { category: "TypeScript", title: "Utility Types: Pick, Omit, Partial", date: "2023-09-10" },
  { category: "TypeScript", title: "Generics in React Components", date: "2023-09-05" },
  { category: "Git", title: "Rebasing vs Merging", date: "2023-08-30" },
  { category: "Performance", title: "Web Vitals Explained", date: "2023-08-25" },
  { category: "Performance", title: "Image Optimization Techniques", date: "2023-08-20" },
  { category: "Backend", title: "REST vs GraphQL", date: "2023-08-15" },
];

export default function Notes() {
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase()) || 
    note.category.toLowerCase().includes(search.toLowerCase())
  );

  // Group by category
  const groupedNotes = filteredNotes.reduce((acc, note) => {
    if (!acc[note.category]) {
      acc[note.category] = [];
    }
    acc[note.category].push(note);
    return acc;
  }, {} as Record<string, typeof notes>);

  return (
    <div className="container py-24 space-y-12">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Digital Garden</h1>
        <p className="text-xl text-muted-foreground">
          A collection of raw notes, code snippets, and resources. These are living documents that evolve over time.
        </p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search notes..." 
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {Object.entries(groupedNotes).map(([category, categoryNotes]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {category}
            </h2>
            <ul className="space-y-3">
              {categoryNotes.map((note, index) => (
                <li key={index}>
                  <a href="#" className="group block hover:translate-x-1 transition-transform">
                    <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                      {note.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      {note.date}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {filteredNotes.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No notes found matching "{search}"
        </div>
      )}
    </div>
  );
}
