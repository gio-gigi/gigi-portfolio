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
        "Ojo para diseno",
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
          date: "2023 - presente",
          role: "Frontend Junior Developer",
          company: "C-Tickets / Gatzi - Startup",
          desc: "Desarrollo de interfaces en React y TypeScript para plataforma de venta de boletos. Refactoring de componentes, integracion de SDKs y colaboracion en arquitectura frontend.",
        },
        {
          date: "Anterior",
          role: "Desarrolladora Web",
          company: "Tribunal de Justicia Administrativa de Zacatecas",
          desc: "Desarrollo y mantenimiento de sistemas internos para la institucion.",
        },
        {
          date: "Servicio social",
          role: "Desarrolladora - Responsable unica",
          company: "LAPSOL - UAZ",
          desc: "A cargo del desarrollo de software de forma independiente durante el periodo de servicio social en el laboratorio de la universidad.",
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
          date: "2023 - present",
          role: "Frontend Junior Developer",
          company: "C-Tickets / Gatzi - Startup",
          desc: "Built interfaces in React and TypeScript for a ticketing platform. Refactored components, integrated SDKs, and collaborated on frontend architecture.",
        },
        {
          date: "Previous",
          role: "Web Developer",
          company: "Tribunal de Justicia Administrativa de Zacatecas",
          desc: "Developed and maintained internal systems for the institution.",
        },
        {
          date: "Social service",
          role: "Developer - Sole owner",
          company: "LAPSOL - UAZ",
          desc: "Owned software development independently during social service at the university lab.",
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
