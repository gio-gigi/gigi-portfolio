import type { ExperienceItem, Course } from "../types";

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Empresa Dulce S.A.",
    period: "2024 — Actualidad",
    bullets: [
      "Lideré la migración del frontend a Next.js, mejorando el LCP en 40%.",
      "Diseñé APIs REST consumidas por +10k usuarios diarios.",
    ],
  },
  {
    role: "Frontend Developer (Jr)",
    company: "Startup Pastelera",
    period: "2022 — 2024",
    bullets: [
      "Construí el dashboard interno con React + TypeScript.",
      "Implementé pruebas e2e con Playwright reduciendo bugs en producción.",
    ],
  },
];

export const courses: Course[] = [
  { name: "Meta Frontend Developer", org: "Coursera", year: "2024" },
  { name: "The Complete Node.js Bootcamp", org: "Udemy", year: "2024" },
  { name: "CS50 Intro to Computer Science", org: "Harvard / edX", year: "2023" },
  { name: "Diseño UX/UI Avanzado", org: "Domestika", year: "2023" },
];