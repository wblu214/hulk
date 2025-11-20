import { ExperienceItem, ProjectItem, SocialLink, TechItem } from './types';

export type Lang = 'en' | 'zh';

export const TECH_STACK: TechItem[] = [
  { name: "Java", slug: "java", color: "#007396", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", slug: "spring", color: "#6DB33F" },
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#000000" },
  { name: "Solidity", slug: "solidity", color: "#363636" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "MySQL", slug: "mysql", color: "#4479A1" },
  { name: "Ethereum", slug: "ethereum", color: "#3C3C3D" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
];

export const SOCIALS: SocialLink[] = [
  { name: "X (Twitter)", url: "https://x.com/lwb214", iconName: "Twitter", display: "@lwb214" },
  { name: "GitHub", url: "https://github.com/wblu214", iconName: "Github", display: "wblu214" },
  { name: "Telegram", url: "https://t.me/wblu0214", iconName: "Send", display: "@wblu0214" },
  { name: "WeChat", url: "#", iconName: "MessageCircle", display: "Lu-limitations" },
];

export const getContent = (lang: Lang) => {
  const isEn = lang === 'en';

  return {
    nav: {
      home: isEn ? "Home" : "首页",
      projects: isEn ? "Projects" : "项目",
      hackathons: isEn ? "Hackathons" : "黑客松",
      contact: isEn ? "Contact" : "联系",
      role: isEn ? "Developer" : "开发者"
    },
    hero: {
      status: isEn ? "Open to Collaboration" : "寻求合作 / 远程机会",
      greeting: isEn ? "I am" : "我是",
      name: "Hulk",
      role: isEn ? "All In Web3 / RWA Hub Lead" : "All In Web3 / RWA Hub 负责人",
      bio: isEn 
        ? "Gen Z · 211 Graduate · Backend Specialist · Full Stack Capable. I quit my corporate job to build the future of Real World Assets (RWA)." 
        : "00后 · 211本 · 毕业一年 · 后端专家 · 全栈开发。目前裸辞创业，致力于构建 Web3 真实世界资产 (RWA) 的未来。",
      contactBtn: isEn ? "Contact Me" : "联系我",
      githubBtn: "GitHub"
    },
    tech: {
      title: isEn ? "Technical Arsenal" : "技术栈",
      subtitle: isEn ? "The tools I use to build the future" : "工欲善其事，必先利其器"
    },
    experience: {
      title: isEn ? "Journey" : "职业经历",
      items: [
        {
          company: isEn ? "RWA Hub (Startup)" : "RWA Hub (创业)",
          role: isEn ? "Development Lead & Co-founder" : "开发负责人 & 联合创始人",
          period: isEn ? "Current" : "至今",
          description: isEn 
            ? [
                "Leading the technical architecture for an RWA full-service platform.",
                "Developing asset tokenization workflows and collaborative tools.",
                "Integrating blockchain solutions with traditional asset management."
              ]
            : [
                "负责 RWA 全流程服务平台的技术架构设计。",
                "开发资产评估、RWA 项目可行性分析、各方资源整合等模块。",
                "负责境外虚拟交易所对接及代币模型技术实现。"
              ],
          tags: ["Web3", "Solidity", "Next.js", "RWA"]
        },
        {
          company: isEn ? "Wind (万得)" : "万得 (Wind)",
          role: isEn ? "Backend Engineer" : "后端工程师",
          period: isEn ? "Previous" : "前序经历",
          description: isEn 
            ? [
                "Worked on Global Enterprise Database systems.",
                "Optimized high-concurrency data processing pipelines."
              ]
            : [
                "参与全球企业数据库 (GED) 开发。",
                "优化高并发数据处理流程，提升系统稳定性。"
              ],
          tags: ["Java", "Big Data", "Enterprise"]
        },
        {
          company: isEn ? "Dewu (得物)" : "得物 (Dewu)",
          role: isEn ? "Backend Engineer" : "后端工程师",
          period: isEn ? "Previous" : "前序经历",
          description: isEn 
            ? [
                "Developed Smart Customer Service systems.",
                "Implemented NLP integrations and automated response logic."
              ]
            : [
                "负责智能客服系统后端开发。",
                "实现 NLP 接入与自动化回复逻辑，提升用户体验。"
              ],
          tags: ["Python", "AI", "Microservices"]
        }
      ]
    },
    projects: {
      title: isEn ? "Featured Projects" : "精选项目",
      items: [
        {
          title: "RWA Hub",
          description: isEn 
            ? "A comprehensive platform for Real World Asset tokenization. Covers asset evaluation, feasibility analysis, and full lifecycle management."
            : "RWA 全流程服务平台。涵盖资产评估、RWA 项目可行性分析、各方资源整合及 RWA 知识共建。支持境外虚拟交易所选择与代币模型设计。",
          tags: ["Startup", "DeFi", "RWA", "Web3"],
          links: [],
          highlight: true,
          logoChar: "R",
          gradient: "from-blue-600 to-indigo-600"
        },
        {
          title: "3copy",
          description: isEn 
            ? "A 'Vibe Coding' artifact. Chrome extension that streamlines copy-paste workflows across environments. The ultimate productivity booster."
            : "【Vibe Coding 神器】Chrome 插件。提升开发者效率，打通不同环境下的复制粘贴工作流，极简高效。",
          tags: ["Chrome Ext", "Productivity", "React"],
          links: [
            { label: "Chrome Store", url: "https://chromewebstore.google.com/detail/3copy/bfbjjpojkaaaoalklljhnfeammijjnfc?utm_source=item-share-x&pli=1", icon: 'Chrome' }, 
            { label: "Usage Guide", url: "https://mp.weixin.qq.com/s/_uQe6n9FmuG8XtiruI4ARw", icon: 'BookOpen' }
          ],
          highlight: false,
          logoChar: "3",
          gradient: "from-emerald-500 to-teal-500"
        }
      ]
    },
    hackathons: {
      title: isEn ? "Hackathons" : "黑客松经历",
      items: [
        { title: "advx2025" },
        { title: "ETH Shanghai 2025" }
      ]
    },
    contact: {
      title: isEn ? "Let's Connect" : "保持联系",
      subtitle: isEn 
        ? "Currently open to networking with RWA enthusiasts, Web3 builders, and potential investors." 
        : "目前开放交流，欢迎 RWA 爱好者、Web3 建设者及投资人联系。聊聊 RWA Hub 或交个朋友。",
      copyright: isEn ? "Hulk. Built with React & Tailwind." : "Hulk. 基于 React & Tailwind 构建。"
    }
  };
};