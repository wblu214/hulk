import React, { useState } from 'react';
import { getContent, Lang, SOCIALS } from '../constants';
import { Github, Globe, Send, Twitter, Check, Copy } from 'lucide-react';

// Custom WeChat Icon since Lucide doesn't have one
const WeChatIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.69 13.7C5.84 13.7 3.52 11.54 3.52 8.88C3.52 6.22 5.84 4.06 8.69 4.06C11.55 4.06 13.87 6.22 13.87 8.88C13.87 11.54 11.55 13.7 8.69 13.7ZM18.52 12.87C18.52 12.12 18.36 11.41 18.08 10.77C17.74 10.83 17.39 10.86 17.03 10.86C12.91 10.86 9.56 7.82 9.56 4.06C9.56 3.84 9.57 3.62 9.6 3.41C9.3 3.37 9 3.35 8.69 3.35C5.27 3.35 2.5 5.83 2.5 8.88C2.5 10.6 3.43 12.14 4.91 13.13C4.83 13.6 4.65 14.55 4.27 15.27C4.27 15.27 5.79 15.27 7.14 14.63C7.63 14.76 8.15 14.83 8.69 14.83C8.94 14.83 9.2 14.82 9.44 14.8C9.44 14.8 9.44 14.8 9.44 14.81C9.44 17.47 12.05 19.63 15.28 19.63C15.98 19.63 16.64 19.55 17.27 19.39C18.45 20.02 19.78 20.03 19.78 20.03C19.45 19.36 19.29 18.48 19.23 18.04C20.49 17.18 21.29 15.79 21.29 14.25C21.29 14.23 21.29 14.21 21.29 14.19C21.29 14.16 21.29 14.14 21.29 14.12C21.26 13.43 21.05 12.78 20.7 12.2C20.03 12.62 19.3 12.87 18.52 12.87Z" />
  </svg>
);

const IconMap: any = {
  Twitter: Twitter,
  Github: Github,
  Send: Send,
  MessageCircle: WeChatIcon, 
  Globe: Globe
};

interface ContactProps {
  lang: Lang;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const content = getContent(lang).contact;
  const [copied, setCopied] = useState<string | null>(null);

  const handleSocialClick = (e: React.MouseEvent, social: any) => {
    if (social.iconName === 'MessageCircle') {
      e.preventDefault();
      navigator.clipboard.writeText(social.display);
      setCopied(social.name);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <footer id="contact" className="scroll-mt-28 py-20 px-6 border-t border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-900/50 transition-colors relative">
      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2 animate-bounce">
          <Check size={18} />
          <span className="font-medium">Copied {copied} ID!</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{content.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-lg mx-auto text-lg">
            {content.subtitle}
        </p>

        {/* Logo Row Display */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {SOCIALS.map((social, idx) => {
                const Icon = IconMap[social.iconName];
                const isWeChat = social.iconName === 'MessageCircle';
                
                return (
                    <a 
                        key={idx}
                        href={social.url || '#'}
                        target={isWeChat ? undefined : "_blank"}
                        rel={isWeChat ? undefined : "noreferrer"}
                        onClick={(e) => handleSocialClick(e, social)}
                        className="group relative flex items-center justify-center cursor-pointer"
                        title={`${social.name}: ${social.display}`}
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-transparent group-hover:border-primary/50 group-hover:-translate-y-2 transition-all duration-300 shadow-sm group-hover:shadow-2xl">
                            <Icon size={40} className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors duration-300" />
                        </div>
                        <span className="absolute -bottom-8 text-sm font-mono font-bold text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
                            {isWeChat && copied === social.name ? "Copied!" : social.name}
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