import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Sweet Shop",
    tag: "Full-stack",
    desc: "E-commerce con carrito en tiempo real, pagos con Stripe y panel admin.",
    stack: ["Next.js", "Stripe", "Prisma"],
    accent: "var(--strawberry)",
  },
  {
    title: "Study Buddy",
    tag: "Frontend",
    desc: "App para tomar notas con flashcards y modo pomodoro. Mobile-first.",
    stack: ["React", "Tailwind", "Zustand"],
    accent: "var(--vanilla)",
  },
  {
    title: "API Pastelera",
    tag: "Backend",
    desc: "API REST para gestionar pedidos de repostería con auth y roles.",
    stack: ["Node", "Express", "Postgres"],
    accent: "var(--chocolate)",
  },
  {
    title: "Mood Tracker",
    tag: "Full-stack",
    desc: "Diario emocional con gráficas semanales y exportar a PDF.",
    stack: ["React", "Supabase", "Recharts"],
    accent: "var(--strawberry)",
  },
];