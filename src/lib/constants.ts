import type { NavLink, SocialLink } from "@/types";

export const SITE_NAME = "Giovanna Chávez — Portafolio";
export const SITE_DESCRIPTION =
  "Portafolio de ingeniería de software — frontend, backend, proyectos y cursos. Vibe scrapbook napolitano 🍦";
export const OWNER_EMAIL = "esme.espino19@gmail.com";

export const NAV_LINKS: NavLink[] = [
    { label: "Sobre mí", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experiencia", href: "/#experience" },
    { label: "Proyectos", href: "/#projects" },
    { label: "Contacto", href: "/#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [

  { label: "GitHub", href: "https://github.com/gio-gigi", icon: "github" },
  { label: "LinkedIn", href: "www.linkedin.com/in/gio-chavez-es", icon: "linkedin" },
];