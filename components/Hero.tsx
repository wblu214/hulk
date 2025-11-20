import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Terminal } from 'lucide-react';
import { getContent, Lang } from '../constants';

interface HeroProps {
  lang: Lang;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = getContent(lang).hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-28 pb-12 relative">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-2 lg:order-1"
        >
            <div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm cursor-pointer hover:scale-105 transition-transform">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono text-slate-600 dark:text-green-400">{content.status}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                {content.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{content.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-mono text-slate-600 dark:text-slate-300 font-medium">
                {content.role}
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                {content.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
                <a 
                    href="#contact"
                    className="px-6 py-3 bg-slate-900 dark:bg-primary hover:bg-slate-800 dark:hover:bg-indigo-600 text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    {content.contactBtn} <ArrowRight size={18} />
                </a>
                <a 
                    href="https://github.com/wblu214"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                >
                    <Github size={18} /> {content.githubBtn}
                </a>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center order-1 lg:order-2"
        >
            {/* Avatar Section */}
            <div className="relative group cursor-pointer mb-8 lg:mb-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-70 blur-md group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                    <img 
                        src="./avatar.png" 
                        alt="Hulk" 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                            // Fallback to placeholder if local image not found
                            (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Hulk&size=256&background=0f172a&color=fff";
                        }}
                    />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
                    <Terminal size={24} className="text-primary" />
                </div>
            </div>

             {/* Code Block Visual (Optional: Only show on larger screens or if desired below avatar) */}
             <div className="hidden lg:block w-full mt-8 max-w-sm mx-auto bg-white/40 dark:bg-slate-900/40 rounded-xl border border-white/60 dark:border-slate-700 backdrop-blur-md p-4 shadow-lg">
                <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs space-y-1 text-slate-600 dark:text-slate-400">
                    <p><span className="text-purple-600">const</span> <span className="text-blue-600">hulk</span> = <span className="text-yellow-600">new</span> <span className="text-green-600">Builder</span>();</p>
                    <p><span className="text-blue-600">hulk</span>.<span className="text-yellow-600">mission</span> = <span className="text-green-600">"RWA Revolution"</span>;</p>
                </div>
             </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;