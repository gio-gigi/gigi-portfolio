export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

type TranslationDictionary = {
  nav: {
    brand: string;
    openMenu: string;
    closeMenu: string;
    links: string[];
    languageLabel: string;
  };
  hero: {
    srTitle: string;
    intro: string;
    name: string;
    rolePrefix: string;
    software: string;
    flower: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    ctaResume: string;
    badge: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    facts: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    jobs: Array<{
      date: string;
      role: string;
      company: string;
      desc: string;
    }>;
  };
  courses: {
    eyebrow: string;
    title: string;
  };
  projects: {
    eyebrow: string;
    title: string;
  };
  contact: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
  };
  footer: {
    thanks: string;
    navTitle: string;
    contactTitle: string;
    blurb: string;
    madeWith: string;
    outro: string;
  };
};

export const translations: Record<Locale, TranslationDictionary> = {
  es: {
    nav: {
      brand: "Giovanna | Software Engineer",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
      links: ["Sobre mi", "Skills", "Experiencia", "Proyectos", "Contacto"],
      languageLabel: "Idioma",
    },
    hero: {
      srTitle: "Soy Giovanna, ingeniera de software",
      intro: "Soy ",
      name: "Giovanna",
      rolePrefix: "ingeniera de ",
      software: "software",
      flower: " ✿",
      description:
        "Construyo cosas dulces y funcionales para la web, desde la UI hasta la base de datos. Me encanta el detalle y los proyectos con personalidad.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Hablemos",
      ctaResume: "Descargar CV",
      badge: "dev life",
      imageAlt: "Foto de Giovanna",
    },
    about: {
      eyebrow: "sobre mi",
      title: "Un poquito de mi",
      description:
        "Soy ingeniera de software con foco en frontend y backend. Disfruto traducir ideas en interfaces lindas y APIs que funcionan parejo. Aprendi a programar porque me gustaba descomponer cosas para entender como funcionan y porque me parecia magico que con codigo pudieras hacer aparecer cosas en la pantalla.",
      facts: [
        "Frontend con React y Next",
        "Backend con Node y Python",
        "SQL y NoSQL",
        "Ojo para diseño",
      ],
    },
    skills: {
      eyebrow: "tech stack",
      title: "Lo que uso a diario",
    },
    experience: {
      eyebrow: "✿ trayectoria",
      title: "Experiencia laboral",
      jobs: [
    {
      date: "Oct 2024 - Jul 2026",
      role: "Frontend Developer",
      company: "Gatzi - Startup",
      desc: "Optimización de Core Web Vitals con SSR en Next.js y React Router v7. Estandarización del consumo de APIs con hooks personalizados en TanStack Query. Implementación de Atomic Design, pruebas unitarias con Vitest y colaboración en células ágiles con Git.",
    },
    {
      date: "Mar 2025 - May 2025",
      role: "Frontend Developer",
      company: "Tribunal de Justicia Administrativa de Zacatecas",
      desc: "Desarrollo de sistema de gestión de casos con dashboards interactivos en Django, Bootstrap y HTML5. Módulos de monitoreo de usuarios, administración de palabras clave y generación automatizada de reportes.",
    },
    {
      date: "Ago 2024 - May 2025",
      role: "Pasante de Desarrollo de Software",
      company: "LAPSOL - UAZ",
      desc: "Responsable único del desarrollo fullstack de una aplicación móvil multiplataforma con React Native y backend en NestJS + MySQL, desde el levantamiento de requerimientos hasta la coordinación de pruebas de software (QA) y la entrega final.",
    },
  ],
    },
    courses: {
      eyebrow: "cursos y certificaciones",
      title: "Siempre aprendiendo",
    },
    projects: {
      eyebrow: "proyectos",
      title: "Cositas que he construido",
    },
    contact: {
      eyebrow: "colaboramos?",
      titlePrefix: "Mandame un ",
      titleHighlight: "mensajito",
      description: "Estoy abierta a oportunidades, proyectos freelance y colaboraciones en productos digitales.",
    },
    footer: {
      thanks: "gracias por pasar",
      navTitle: "Navegacion",
      contactTitle: "Contacto",
      blurb: "Diseno y desarrollo experiencias web con personalidad, detalle y foco en usabilidad.",
      madeWith: "Hecho con",
      outro: "y mucha intencion",
    },
  },
  en: {
    nav: {
      brand: "Giovanna | Software Engineer",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      links: ["About", "Skills", "Experience", "Projects", "Contact"],
      languageLabel: "Language",
    },
    hero: {
      srTitle: "I am Giovanna, software engineer",
      intro: "I am ",
      name: "Giovanna",
      rolePrefix: "software ",
      software: "engineer",
      flower: " ✿",
      description:
        "I build sweet and functional things for the web, from UI to the database. I love detail and projects with personality.",
      ctaProjects: "See projects",
      ctaContact: "Let us talk",
      ctaResume: "Download Resume",
      badge: "dev life",
      imageAlt: "Giovanna photo",
    },
    about: {
      eyebrow: "about me",
      title: "A little about me",
      description:
        "I am a software engineer focused on frontend and backend. I enjoy turning ideas into beautiful interfaces and reliable APIs. I learned programming because I loved taking things apart to understand how they work and because it felt magical that code could make things appear on screen.",
      facts: [
        "Frontend with React and Next",
        "Backend with Node and Python",
        "SQL and NoSQL",
        "Strong design eye",
      ],
    },
    skills: {
      eyebrow: "tech stack",
      title: "What I use every day",
    },
    experience: {
      eyebrow: "✿ journey",
      title: "Work experience",
      jobs: [
    {
      date: "Oct 2024 - Present",
      role: "Frontend Developer",
      company: "Gatzi - Startup",
      desc: "Optimized Core Web Vitals with SSR using Next.js and React Router v7. Standardized API consumption with custom hooks built on TanStack Query. Implemented Atomic Design architecture, automated unit testing with Vitest, and collaborated in agile teams using Git.",
    },
    {
      date: "Mar 2025 - May 2025",
      role: "Frontend Developer",
      company: "Tribunal de Justicia Administrativa de Zacatecas",
      desc: "Built a case management system with interactive dashboards using Django, Bootstrap, and HTML5. Developed modules for user monitoring, keyword management, and automated report generation.",
    },
    {
      date: "Aug 2024 - May 2025",
      role: "Software Development Intern",
      company: "LAPSOL - UAZ",
     desc: "Solely responsible for the full-stack development of a cross-platform mobile app using React Native with a NestJS and MySQL backend, from requirements gathering through QA coordination and final delivery.",
    },
  ],
    },
    courses: {
      eyebrow: "courses and certifications",
      title: "Always learning",
    },
    projects: {
      eyebrow: "projects",
      title: "Things I have built",
    },
    contact: {
      eyebrow: "shall we collaborate?",
      titlePrefix: "Send me a ",
      titleHighlight: "message",
      description: "I am open to opportunities, freelance projects, and collaborations on digital products.",
    },
    footer: {
      thanks: "thanks for stopping by",
      navTitle: "Navigation",
      contactTitle: "Contact",
      blurb: "I design and build web experiences with personality, detail, and usability in mind.",
      madeWith: "Made with",
      outro: "and a lot of intention",
    },
  },
};
