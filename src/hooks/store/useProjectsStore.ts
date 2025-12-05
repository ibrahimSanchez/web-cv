"use client";

// import { Project } from '@prisma/client';
import { Project } from '@/src/interfaces/project.interface';
import { create } from 'zustand';

interface ProjectsStore {
  projects: Project[];
  isLoading: boolean;
  fetchProjects: () => void;
  setProjects: (products: Project[]) => void;
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
  projects: [],
  isLoading: false,
  
  fetchProjects: async () => {
    set({ isLoading: true }); 


    try {
      const res = await fetch('/api/projects', {
        method: 'GET',
      })
      if (!res.ok) {
        throw new Error('Failed to fetch projects');
      }
      const projects = await res.json();
      console.log(projects);
      // set({ projects: projects as Project[], isLoading: false });
    } catch (error) {
      console.error(error);
      // set({ projects: [], isLoading: false });
    }
    // set({ isLoading: false });
  },

  setProjects: (projects: Project[]) => set({ projects }),

}));