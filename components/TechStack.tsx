import React from 'react';
import { getContent, Lang, TECH_STACK } from '../constants';
import { TechItem } from '../types';

const TechCard: React.FC<{ item: TechItem }> = ({ item }) => {
  const iconSrc = item.iconUrl || `https://cdn.simpleicons.org/${item.slug}/${item.color.replace('#', '')}`;
  
  return (
    <div className="flex flex-col items-center justify-center mx-6 group min-w-[100px] cursor-pointer">
      <div className="relative w-16 h-16 mb-3 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300"
          style={{ backgroundColor: item.color }}
        ></div>
        <div className="w-full h-full relative z-10 p-3 bg-white/80 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm shadow-sm group-hover:shadow-lg transition-shadow overflow-hidden flex items-center justify-center">
            <img 
            src={iconSrc}
            alt={item.name}
            className="w-full h-full object-contain"
            onError={(e) => {
                // Fallback if simpleicons fails
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${item.name}&background=random`;
            }}
            />
        </div>
      </div>
      <span className="text-sm font-mono font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {item.name}
      </span>
    </div>
  );
};

interface TechStackProps {
  lang: Lang;
}

const TechStack: React.FC<TechStackProps> = ({ lang }) => {
  const content = getContent(lang).tech;
  // Duplicate array to create seamless loop
  const firstRow = [...TECH_STACK, ...TECH_STACK];
  
  return (
    <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 dark:via-slate-900/10 to-transparent pointer-events-none z-10"></div>
        
        <div className="text-center mb-12 relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                {content.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">{content.subtitle}</p>
        </div>

        <div className="relative flex w-full overflow-hidden mask-image-linear-gradient hover:cursor-grab active:cursor-grabbing">
             {/* Mask edges for fade effect */}
             <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 dark:from-darker to-transparent z-20"></div>
             <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 dark:from-darker to-transparent z-20"></div>

            <div className="flex animate-scroll hover:pause py-4">
                {firstRow.map((tech, index) => (
                    <TechCard key={`${tech.name}-${index}`} item={tech} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default TechStack;