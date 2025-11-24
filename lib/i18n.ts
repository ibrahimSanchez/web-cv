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
      subtitle:
        "Construyendo aplicaciones modernas, escalables y de alto rendimiento",
      cta: "Explorar mi trabajo",
    },
    about: {
      title: "Sobre mí",
      description:
        "Soy un desarrollador Full Stack con experiencia en la creación de soluciones web completas, desde interfaces modernas hasta arquitecturas backend robustas y escalables. He trabajado en proyectos de diferentes países y sectores, incluyendo salud, mensajería en tiempo real, comercio electrónico y plataformas administrativas.",
      background:
        "Cuento con más de 5 años de experiencia profesional trabajando con tecnologías como React, Next.js, Golang, NestJS, Python y servicios cloud en Microsoft Azure. También he impartido docencia universitaria en programación, formando a nuevos desarrolladores. Me apasiona crear software de calidad, escalable y bien diseñado.",
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
      subtitle:
        "¿Te gustaría trabajar conmigo? Estoy disponible para colaborar en proyectos y nuevas oportunidades.",
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
      subtitle:
        "Building modern, scalable and high-performance web applications",
      cta: "Explore my work",
    },
    about: {
      title: "About Me",
      description:
        "I’m a Full Stack developer experienced in building complete web solutions — from modern, responsive interfaces to robust and scalable backend architectures. I have worked on international projects across multiple sectors, including healthcare, real-time messaging, e-commerce and administration platforms.",
      background:
        "I have over 5 years of professional experience using technologies such as React, Next.js, Golang, NestJS, Python and Microsoft Azure cloud services. I have also taught university-level Programming courses, helping train new developers. I'm passionate about high-quality software, scalability and clean architecture.",
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
      subtitle:
        "Would you like to work together? I’m available for collaborations and new opportunities.",
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
