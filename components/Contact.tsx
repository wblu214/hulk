import React from 'react';
import { getContent, Lang, SOCIALS } from '../constants';
import { Github, Globe, MessageCircle, Send, Twitter } from 'lucide-react';

const IconMap = {
  Twitter: Twitter,
  Github: Github,
  Send: Send, // For Telegram
  MessageCircle: MessageCircle, // For WeChat
  Globe: Globe
};

interface ContactProps {
  lang: Lang;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const content = getContent(lang).contact;

  return (
    <footer id="contact" className="py-20 px-6 border-t border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-900/50 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{content.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-lg mx-auto text-lg">
            {content.subtitle}
        </p>

        {/* Logo Row Display */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {SOCIALS.map((social, idx) => {
                const Icon = IconMap[social.iconName];
                return (
                    <a 
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex items-center justify-center"
                        title={`${social.name}: ${social.display}`}
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-transparent group-hover:border-primary/50 group-hover:-translate-y-2 transition-all duration-300 shadow-sm group-hover:shadow-2xl">
                            <Icon size={40} className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors duration-300" />
                        </div>
                        <span className="absolute -bottom-8 text-sm font-mono font-bold text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            {social.name}
                        </span>
                    </a>
                );
            })}
        </div>

        <div className="mt-24 text-slate-500 dark:text-slate-600 text-sm font-mono">
            <p>&copy; {new Date().getFullYear()} {content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;