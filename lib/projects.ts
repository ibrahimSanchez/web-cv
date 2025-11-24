import { Project } from "@/interfaces/project.interface";

export const projects: Project[] = [
  {
    id: 1,
    title: "Vital-IA (Sistema Médico)",
    description:
      "Aplicación web para clínicas y centros médicos con soporte para estándares internacionales de salud (FHIR, DICOM, HL7, XDS, CDA) y backend escalable para gestión hospitalaria.",
    imageLight: "/img/projects/vitalia-project-light.png",
    imageDark: "/img/projects/vitalia-project-dark.png",
    technologies: ["React", "Next.js", "Golang", "Azure", "FHIR"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "toDus – Mensajería Cubana",
    description:
      "Aplicación de mensajería en tiempo real y proyecto insignia del ecosistema digital cubano. Desarrollo de frontend y backend escalable para chats, multimedia y servicios asociados.",
    imageLight: "/img/projects/todus-project-light.png",
    imageDark: "/img/projects/todus-project-dark.png",
    technologies: ["Vue", "NestJS", "Redis", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Alaba’O – Carta Digital y Panel Administrativo",
    description:
      "Desarrollo completo del sitio administrativo y sistema de carta digital para restaurante. Interfaz responsiva y backend optimizado para gestión de menús y pedidos.",
    imageLight: "/img/projects/alabao-project-light.png",
    imageDark: "/img/projects/alabao-project-dark.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Azure"],
    link: "#",
    github: "#",
    featured: true,
  },
//   {
//     id: 4,
//     title: "SOScombos – Tienda Online",
//     description:
//       "Desarrollo de la interfaz de usuario para una plataforma de comercio electrónico con catálogo, carrito de compras y sistema de pedidos.",
//     imageLight: "/ecommerce-platform.jpg",
//     imageDark: "/ecommerce-platform.jpg",
//     technologies: ["React", "JavaScript", "Tailwind", "REST API"],
//     link: "#",
//     github: "#",
//     featured: false,
//   },
  {
    id: 5,
    title: "DecoStar / El Paso – Sistema de Gestión",
    description:
      "Servicios backend con NestJS y desarrollo de interfaz web para gestionar contenido y operaciones comerciales.",
    imageLight: "/task-management-board.png",
    imageDark: "/task-management-board.png",
    technologies: ["NestJS", "TypeScript", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: true,
  },
];
