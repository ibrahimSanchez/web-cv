import { prisma } from "../prisma";

export class ProjectsService {
  async getAll() {
    return prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
  }
  
}

export const projectsService = new ProjectsService();