export interface Project {
  id: number
  title: string;
  tag: "Full-stack" | "Frontend" | "Backend";
  desc: string;
  stack: string[];
  accent: string;
  href?: string;
}