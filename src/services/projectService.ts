import { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch("/data/projects.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as Project[];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
}
