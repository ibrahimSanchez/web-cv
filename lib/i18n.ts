export type Language = "es" | "en"

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    home: {
      greeting: "¡Hola! Soy",
      title: "Desarrollador Full Stack",
      subtitle: "Creando experiencias web excepcionales con tecnología moderna",
      cta: "Explorar mi trabajo",
    },
    about: {
      title: "Sobre mí",
      description:
        "Soy un desarrollador apasionado por crear interfaces accesibles y experiencias de usuario excepcionales. Con experiencia en desarrollo web moderno y enfoque en la calidad del código.",
      background:
        "Tengo más de 5 años de experiencia trabajando en proyectos de diferentes tamaños, desde startups hasta corporaciones. Me especializo en React, Next.js y TypeScript.",
    },
    skills: {
      title: "Habilidades",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas",
      },
    },
    projects: {
      title: "Proyectos",
      viewProject: "Ver proyecto",
      technologies: "Tecnologías",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Te gustaría trabajar juntos? Me encantaría escuchar sobre tu proyecto.",
      email: "Email",
      phone: "Teléfono",
      followMe: "Sígueme",
      sendMessage: "Enviar mensaje",
    },
    footer: {
      copyright: "Todos los derechos reservados",
      year: new Date().getFullYear(),
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      greeting: "Hi! I'm",
      title: "Full Stack Developer",
      subtitle: "Creating exceptional web experiences with modern technology",
      cta: "Explore my work",
    },
    about: {
      title: "About Me",
      description:
        "I am a passionate developer focused on creating accessible interfaces and exceptional user experiences. With experience in modern web development and a focus on code quality.",
      background:
        "I have over 5 years of experience working on projects of different sizes, from startups to corporations. I specialize in React, Next.js and TypeScript.",
    },
    skills: {
      title: "Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
      },
    },
    projects: {
      title: "Projects",
      viewProject: "View project",
      technologies: "Technologies",
    },
    contact: {
      title: "Contact",
      subtitle: "Would you like to work together? I'd love to hear about your project.",
      email: "Email",
      phone: "Phone",
      followMe: "Follow me",
      sendMessage: "Send message",
    },
    footer: {
      copyright: "All rights reserved",
      year: new Date().getFullYear(),
    },
  },
}
