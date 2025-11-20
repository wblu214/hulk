export interface TechItem {
  name: string;
  slug: string; // for simpleicons.org
  color: string; // hex color for the icon or glow
  iconUrl?: string; // Optional override for specific icons (e.g. Java)
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  links: {
    label: string;
    url: string;
    icon?: 'ExternalLink' | 'BookOpen' | 'Chrome'; // Icon type helper
  }[];
  highlight?: boolean;
  logoChar?: string; // Character to display if no image
  gradient?: string; // Custom gradient for the card
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: 'Twitter' | 'Github' | 'Send' | 'MessageCircle' | 'Globe'; // Mapping to Lucide icons
  display: string;
}