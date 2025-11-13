
export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  linkedinHandle: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  years: string;
  cgpa: string;
  activities: string[];
}

export interface Project {
  title: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
    title: string;
    description: string[];
}

export interface PortfolioData {
  name: string;
  contact: Contact;
  education: EducationInfo;
  projects: Project[];
  achievements: Achievement[];
  skills: SkillCategory[];
}
