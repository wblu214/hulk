import React from 'react';
import { getContent, Lang } from '../constants';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  lang: Lang;
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const content = getContent(lang).experience;

  return (
    <section className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-slate-900 dark:text-white mb-4">{content.title}</h2>
            <div className="h-1 w-20 bg-purple-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {content.items.map((exp, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active cursor-pointer">
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-800 group-hover:bg-purple-600 transition-all duration-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110">
                        <Briefcase size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/40 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">{exp.company}</h3>
                            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-400/10 px-2 py-1 rounded mt-1 md:mt-0">{exp.period}</span>
                        </div>
                        <p className="text-indigo-600 dark:text-indigo-300 font-medium mb-3">{exp.role}</p>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 text-sm mb-4">
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-500 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;