import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import { Lang, getContent } from './constants';
import { Moon, Sun, Languages } from 'lucide-react';

const App: React.FC = () => {
  // Default to light mode (false for dark)
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Lang>('zh'); // Default to Chinese as per 'Hulk' persona hints, or EN if preferred. Let's default to Chinese as user requested Chinese interface mostly.

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');
  
  const content = getContent(lang).nav;

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-200 selection:bg-primary/30 selection:text-white transition-colors duration-300 font-sans">
      <Background />
      
      {/* Navigation Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="text-xl font-bold font-mono tracking-tighter text-slate-900 dark:text-white cursor-pointer hover:scale-105 transition-transform">
            HULK<span className="text-secondary">.DEV</span>
        </div>
        
        <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">{content.home}</a>
                <a href="#projects" className="hover:text-primary dark:hover:text-white transition-colors">{content.projects}</a>
                <a href="#hackathons" className="hover:text-primary dark:hover:text-white transition-colors">{content.hackathons}</a>
                <a href="#contact" className="hover:text-primary dark:hover:text-white transition-colors">{content.contact}</a>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-6">
                <button 
                    onClick={toggleLang}
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
                    title="Switch Language"
                >
                    <Languages size={20} />
                </button>
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
                    title="Toggle Theme"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col gap-10">
        <Hero lang={lang} />
        <TechStack lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
};

export default App;