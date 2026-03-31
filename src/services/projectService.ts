import type { Project } from '../types/project';

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch('/data/projects.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: { projects: Project[] } = await response.json();
    return data.projects;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Projeler yüklenirken hata oluştu: ${error.message}`);
    }
    throw new Error('Projeler yüklenirken bilinmeyen bir hata oluştu');
  }
};
