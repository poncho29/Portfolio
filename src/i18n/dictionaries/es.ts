import type { Dictionary } from "./en";

export const es: Dictionary = {
  metadata: {
    title: "Sebastián Meneses | Desarrollador Web Full Stack",
    description:
      "Desarrollador Web Full Stack radicado en Brisbane, Australia. Casi 5 años construyendo aplicaciones web modernas y escalables con React, Next.js, Node.js y Nest.js.",
  },
  nav: {
    mainNavigation: "Navegación principal",
    languageSwitcherLabel: "Idioma",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Skills",
    education: "Educación",
    contact: "Contacto",
    themeToLight: "Cambiar a tema claro",
    themeToDark: "Cambiar a tema oscuro",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  sections: {
    experience: "Experiencia laboral",
    skills: "Skills",
    projects: "Proyectos",
    education: "Educación",
    languages: "Idiomas",
    contact: "Contacto",
    eyebrow: {
      experience: "Trayectoria",
      projects: "Trabajos seleccionados",
      skills: "Herramientas",
      education: "Formación",
      languages: "Comunicación",
      contact: "Hablemos",
    },
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      devops: "DevOps y herramientas",
    },
  },
  hero: {
    heading: "Hola, soy Sebastián Meneses",
    subtitle:
      "Desarrollador Web Full Stack con casi 5 años de experiencia, radicado en Brisbane, Australia. El frontend es mi fuerte principal, complementado con experiencia práctica en backend, APIs e infraestructura. Actualmente lidero el área de desarrollo en VASEprint.",
    contactButton: "Contáctame",
    downloadButton: "Descargar CV",
    imageAlt: "Sebastián Meneses frente al horizonte de Brisbane",
    location: "Brisbane, Australia",
  },
  experience: {
    learnMore: "Saber más",
    items: {
      1: {
        title: "Tech Lead",
        bullets: [
          "Lidero el área de desarrollo de la empresa, creada en 2025, de forma remota desde Brisbane — desde la planificación hasta la ejecución, construyendo productos full-stack con Next.js y Nest.js, incluyendo Vasetec, una plataforma SaaS multi-tenant para gestión de servicios.",
          "Gestiono la infraestructura de servidores (VPS) y el despliegue con Docker para proyectos internos y de clientes.",
        ],
      },
      2: {
        title: "Desarrollador Frontend",
        bullets: [
          "Construí y lancé varios proyectos individuales y en equipo con React.js y Next.js, incluyendo una app de grabación de video con teleprompter, un sistema de gestión de inventario, tiendas online y sitios headless (Strapi/WordPress) para gestión de contenido simplificada.",
          "Diseñé y construí APIs REST con Node.js y Nest.js, implementando autenticación, autorización, manejo de errores, caché y envío de correos siguiendo buenas prácticas.",
          "Integré aplicaciones de terceros y APIs REST, incluyendo automatización de flujos de trabajo con n8n, para mejorar y agilizar procesos de distintos clientes.",
          "Aporté ideas para resolver problemas técnicos y proponer nuevas funcionalidades de producto.",
        ],
      },
    },
  },
  education: {
    items: {
      1: { degree: "Ingeniería de Sistemas" },
      2: { degree: "Bootcamp de Desarrollo Web Full Stack" },
    },
  },
  languages: {
    items: ["Español (nativo)", "Inglés (competencia funcional, en progreso)"],
  },
  projects: {
    viewProjectButton: "Ver proyecto",
    viewDemoButton: "Ver demo",
    viewCodeButton: "Ver código",
    items: {
      "1": {
        description: "Sitio web de la Fundación vincent, que busca promover la adopción de animales.",
      },
      "2": {
        description: "Pagina web y portafolio para la diseñadora Laura Martinez.",
      },
      "3": {
        description: "Este proyecto agrupa mini aplicaciones que he desarrollado con React.",
      },
    },
  },
  contactForm: {
    contactIntro:
      "¿Tienes una vacante o un proyecto en mente? Escríbeme y te respondo lo antes posible.",
    contactLocation: "Brisbane, Australia. Abierto a oportunidades locales y remotas.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí",
    submitButton: "Enviar",
    submittingButton: "Enviando...",
    successMessage: "¡Formulario enviado! Responderé lo más pronto posible.",
    errorMessage: "Ups, algo salió mal. Por favor, inténtalo de nuevo.",
    errors: {
      nameRequired: "El nombre es requerido",
      emailRequired: "El email es requerido",
      emailInvalid: "El email no es válido",
      messageRequired: "El mensaje es requerido",
    },
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
};
