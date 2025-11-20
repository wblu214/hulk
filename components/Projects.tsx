import React from 'react';
import { getContent, Lang } from '../constants';
import { ExternalLink, BookOpen, Chrome, Trophy, Award } from 'lucide-react';

interface ProjectsProps {
  lang: Lang;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const { projects, hackathons } = getContent(lang);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-slate-900 dark:text-white mb-4 tracking-tight">
                {projects.title}
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {projects.items.map((project, idx) => (
                <div 
                    key={idx}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                    {/* Abstract Decorative Background */}
                    <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-r ${project.gradient || 'from-slate-400 to-slate-500'} opacity-20 dark:opacity-30 transition-all duration-500 group-hover:h-full group-hover:opacity-10`}></div>
                    
                    <div className="relative p-8 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            {/* Logo Placeholder */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient || 'from-slate-700 to-slate-900'} flex items-center justify-center text-white font-bold text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                {project.logoChar}
                            </div>
                            
                            <div className="flex gap-2">
                                {project.links.map((link, i) => (
                                    <a 
                                        key={i} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="p-2.5 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-colors text-slate-600 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700 backdrop-blur-sm"
                                        title={link.label}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {link.icon === 'Chrome' ? <Chrome size={18} /> : 
                                         link.icon === 'BookOpen' ? <BookOpen size={18} /> : 
                                         <ExternalLink size={18} />}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag, tIdx) => (
                                <span 
                                    key={tIdx} 
                                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* HACKATHONS MINIMAL SECTION */}
        <div id="hackathons" className="mb-10 pt-12">
            <div className="flex items-center gap-3 mb-8">
                <Trophy className="text-yellow-500" size={28} />
                <h2 className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
                    {hackathons.title}
                </h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
                {hackathons.items.map((hack, idx) => (
                    <div 
                        key={idx}
                        className="relative group overflow-hidden bg-white dark:bg-slate-800 border-l-4 border-yellow-500 rounded-r-lg px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-default hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3">
                            <Award size={20} className="text-yellow-500" />
                            <span className="font-bold text-lg text-slate-800 dark:text-slate-200">
                                {hack.title}
                            </span>
                            <span className="text-xs font-mono px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                                Completed
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;