export interface Dictionary {
  metadata: {
    title: string;
    description: string;
    role: string;
    ogImageAlt: string;
  };
  nav: {
    mainNavigation: string;
    languageSwitcherLabel: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    themeToLight: string;
    themeToDark: string;
    openMenu: string;
    closeMenu: string;
    scrollToTop: string;
  };
  sections: {
    experience: string;
    skills: string;
    projects: string;
    education: string;
    languages: string;
    contact: string;
    eyebrow: {
      experience: string;
      projects: string;
      skills: string;
      education: string;
      languages: string;
      contact: string;
    };
    skillCategories: {
      frontend: string;
      backend: string;
      databases: string;
      devops: string;
    };
  };
  hero: {
    heading: string;
    subtitle: string;
    contactButton: string;
    downloadButton: string;
    imageAlt: string;
    location: string;
  };
  experience: {
    learnMore: string;
    items: Record<string, { title: string; bullets: string[] }>;
  };
  education: {
    items: Record<string, { degree: string }>;
  };
  languages: {
    items: string[];
  };
  projects: {
    viewProjectButton: string;
    screenshotAlt: string;
    screenshotNavLabel: string;
    items: Record<string, { description: string }>;
  };
  contactForm: {
    contactIntro: string;
    contactLocation: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successMessage: string;
    errorMessage: string;
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
    };
  };
  footer: {
    rights: string;
  };
}

export const en: Dictionary = {
  metadata: {
    title: "Sebastián Meneses | Full Stack Web Developer",
    description:
      "Full Stack Web Developer based in Brisbane, Australia. Almost 5 years building modern, scalable web applications with React, Next.js, Node.js and Nest.js.",
    role: "Full Stack Web Developer",
    ogImageAlt: "Sebastián Meneses, Full Stack Web Developer based in Brisbane, Australia",
  },
  nav: {
    mainNavigation: "Main navigation",
    languageSwitcherLabel: "Language",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    scrollToTop: "Scroll to top",
  },
  sections: {
    experience: "Work experience",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    languages: "Languages",
    contact: "Contact",
    eyebrow: {
      experience: "Career",
      projects: "Selected work",
      skills: "Toolkit",
      education: "Background",
      languages: "Communication",
      contact: "Get in touch",
    },
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps & Tools",
    },
  },
  hero: {
    heading: "Hi, I'm Sebastián Meneses",
    subtitle:
      "Full Stack Web Developer with almost 5 years of experience, based in Brisbane, Australia. Frontend is my core strength, backed by hands-on backend, API and infrastructure work. I currently lead the development area at VASEprint.",
    contactButton: "Contact me",
    downloadButton: "Download CV",
    imageAlt: "Sebastián Meneses in front of the Brisbane skyline",
    location: "Brisbane, Australia",
  },
  experience: {
    learnMore: "Learn more",
    items: {
      1: {
        title: "Tech Lead",
        bullets: [
          "Lead the company's development area, created in 2025, remotely from Brisbane — from planning through execution, building full-stack products with Next.js and Nest.js, including Vasetec, a multi-tenant SaaS platform for service management.",
          "Manage server infrastructure (VPS) and Docker-based deployment for both internal and client projects.",
        ],
      },
      2: {
        title: "Frontend Developer",
        bullets: [
          "Built and shipped several individual and team projects using React.js and Next.js, including a teleprompter-based video recording app, an inventory management system, online stores, and headless websites (Strapi/WordPress) for streamlined content management.",
          "Designed and built REST APIs with Node.js and Nest.js, implementing authentication, authorisation, error handling, caching, and email delivery following best practices.",
          "Integrated third-party applications and REST APIs, including workflow automation with n8n, to improve and speed up processes for different clients.",
          "Contributed ideas for solving technical problems and proposing new product features.",
        ],
      },
    },
  },
  education: {
    items: {
      1: { degree: "Systems Engineering" },
      2: { degree: "Full Stack Web Development Bootcamp" },
    },
  },
  languages: {
    items: ["Spanish (native)", "English (working proficiency, improving)"],
  },
  projects: {
    viewProjectButton: "View project",
    screenshotAlt: "{project}, screenshot {index} of {total}",
    screenshotNavLabel: "Show screenshot {index}",
    items: {
      "1": {
        description:
          "Multi-tenant system with a dedicated database per tenant, built to control and organise workshop services. It covers work orders, service status, time tracking, deliveries and evidence.",
      },
      "2": {
        description:
          "VASEprint's online store, with an admin dashboard to manage products, orders and shipping status.",
      },
      "3": {
        description:
          "System for recording coffee harvesting. It logs every weigh-in per picker and handles farms, rates, expenses and picker payments with receipts.",
      },
      "4": {
        description:
          "Public system connected to the SECOP II API that reports public tenders matching the filters set in each profile. Alerts arrive on Telegram, completely free.",
      },
      "5": {
        description:
          "Website for a real estate agency, with an admin panel to manage its content.",
      },
      "6": {
        description:
          "Static website showcasing the services and products Colfood has for sale.",
      },
      "7": {
        description: "Website and portfolio for designer Laura Martínez.",
      },
    },
  },
  contactForm: {
    contactIntro:
      "Have a role or a project in mind? Send me a message and I'll get back to you as soon as I can.",
    contactLocation: "Brisbane, Australia. Open to local and remote opportunities.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Write your message here",
    submitButton: "Send",
    submittingButton: "Sending...",
    successMessage: "Message sent! I'll get back to you as soon as possible.",
    errorMessage: "Oops, something went wrong. Please try again.",
    errors: {
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Email is not valid",
      messageRequired: "Message is required",
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
};
