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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
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
            className="relative hidden lg:block cursor-pointer hover:scale-[1.02] transition-transform duration-500"
        >
            {/* Abstract floating code block visual */}
            <div className="relative w-full aspect-square bg-white/40 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-white/60 dark:border-slate-700 shadow-2xl p-6 overflow-hidden group backdrop-blur-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-2 opacity-90 font-medium">
                    <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">dev</span> = <span className="text-purple-600 dark:text-purple-400">new</span> <span className="text-yellow-600 dark:text-yellow-300">Developer</span>();</p>
                    <p><span className="text-blue-600 dark:text-blue-400">dev</span>.<span className="text-yellow-600 dark:text-yellow-300">name</span> = <span className="text-green-600 dark:text-green-400">"Hulk"</span>;</p>
                    <p><span className="text-blue-600 dark:text-blue-400">dev</span>.<span className="text-yellow-600 dark:text-yellow-300">stack</span> = [<span className="text-green-600 dark:text-green-400">"Solidity"</span>, <span className="text-green-600 dark:text-green-400">"Java"</span>, <span className="text-green-600 dark:text-green-400">"React"</span>];</p>
                    <p className="text-slate-500 italic">// All In Web3</p>
                    <p><span className="text-blue-600 dark:text-blue-400">dev</span>.<span className="text-yellow-600 dark:text-yellow-300">focus</span> = <span className="text-green-600 dark:text-green-400">"RWA Hub"</span>;</p>
                    <p><span className="text-purple-600 dark:text-purple-400">await</span> <span className="text-blue-600 dark:text-blue-400">dev</span>.<span className="text-yellow-600 dark:text-yellow-300">buildFuture</span>();</p>
                    
                    <div className="mt-8 p-4 bg-slate-100 dark:bg-black/30 rounded-lg border-l-2 border-green-500">
                        <p className="text-green-600 dark:text-green-400 font-bold">$ initiating startup...</p>
                        <p className="text-green-600 dark:text-green-400">$ status: thriving 🚀</p>
                    </div>
                </div>
                
                {/* Floating decorative icons */}
                <Terminal className="absolute bottom-10 right-10 text-slate-300 dark:text-slate-700 w-24 h-24 opacity-20 group-hover:opacity-30 transition-opacity group-hover:rotate-12 transform duration-500" />
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;