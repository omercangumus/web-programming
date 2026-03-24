import type { Project, Category, SortField, SortOrder, FilterState } from "../types/project";

export function filterBySearch(projects: Project[], query: string): Project[] {
  if (!query) return projects;
  const lowerQuery = query.toLowerCase();
  
  return projects.filter(project => {
    return (
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.tech.some(t => t.toLowerCase().includes(lowerQuery))
    );
  });
}

export function filterByCategory(projects: Project[], category: Category | "all"): Project[] {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
}

export function sortProjects(projects: Project[], field: SortField, order: SortOrder): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (field === "year") {
      return a.year - b.year;
    }
    if (field === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  if (order === "desc") {
    return sorted.reverse();
  }
  return sorted;
}

export function applyFilters(
  projects: Project[],
  { search, category, sortField, sortOrder }: FilterState
): Project[] {
  const searched = filterBySearch(projects, search);
  const categorized = filterByCategory(searched, category);
  return sortProjects(categorized, sortField, sortOrder);
}
