export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  linkedinUrl: string;
}

export interface Project {
  id: string;
  title: string;
  tech: string;
  description: string;
  previewUrl: string;
  liveUrl: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string;
}

export type Theme = 'light' | 'dark';
