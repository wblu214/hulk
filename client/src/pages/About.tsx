import { Button } from "@/components/ui/button";
import { Mail, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <div className="container py-24 space-y-24">
      {/* Intro */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="aspect-square rounded-2xl bg-secondary overflow-hidden relative">
            {/* Placeholder for profile image */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-muted-foreground">
              <span className="text-6xl">JD</span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm John Doe.
            </h1>
            <h2 className="text-2xl text-muted-foreground font-light">
              Design Engineer & Frontend Developer
            </h2>
          </div>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I have a passion for building digital products that are not only functional but also beautiful and easy to use. With a background in both design and engineering, I bridge the gap between aesthetics and technical implementation.
            </p>
            <p>
              Currently, I'm working as a Senior Frontend Developer at Tech Company, where I lead the design system team and contribute to the core product.
            </p>
            <p>
              When I'm not coding, you can find me exploring the outdoors, reading sci-fi novels, or experimenting with new cooking recipes.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              San Francisco, CA
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              hello@example.com
            </div>
          </div>
          
          <div className="pt-4">
            <Button size="lg">Download Resume</Button>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <Briefcase className="h-6 w-6" />
          Experience
        </h2>
        
        <div className="space-y-12 relative border-l border-border ml-3 pl-8 md:pl-12">
          {[
            {
              role: "Senior Frontend Developer",
              company: "Tech Company",
              period: "2021 - Present",
              description: "Leading the frontend team, establishing best practices, and maintaining the company's design system."
            },
            {
              role: "Frontend Developer",
              company: "Creative Agency",
              period: "2019 - 2021",
              description: "Built award-winning marketing websites and interactive experiences for global brands."
            },
            {
              role: "Junior Web Developer",
              company: "Startup Inc.",
              period: "2018 - 2019",
              description: "Collaborated with designers to implement responsive user interfaces and fix bugs."
            }
          ].map((job, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></span>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <span className="font-mono text-sm text-muted-foreground">{job.period}</span>
                </div>
                <div className="text-primary font-medium">{job.company}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <GraduationCap className="h-6 w-6" />
          Education
        </h2>
        
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-border pb-8">
            <div>
              <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
              <div className="text-muted-foreground">University of Technology</div>
            </div>
            <span className="font-mono text-sm text-muted-foreground">2014 - 2018</span>
          </div>
        </div>
      </div>
    </div>
  );
}
