export interface Skill {
  label: string;
  className: string;
}

export interface Project {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  accent: string;
  href?: string;
}

export interface Course {
  name: string;
  org: string;
  year: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // icon name string, resolved in component
}